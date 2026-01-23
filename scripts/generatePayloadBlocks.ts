/**
 * Script to automatically generate Payload block definitions
 * from Storybook component prop types
 * 
 * Usage: ts-node scripts/generatePayloadBlocks.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import * as ts from 'typescript';

interface PropDefinition {
  name: string;
  type: string;
  required: boolean;
  description?: string;
}

interface ComponentInfo {
  name: string;
  props: PropDefinition[];
  filePath: string;
}

/**
 * Map TypeScript types to Payload field types
 */
function mapTypeToPayloadField(tsType: string): string {
  const typeMap: Record<string, string> = {
    string: 'text',
    number: 'number',
    boolean: 'checkbox',
    Date: 'date',
    'string[]': 'array',
    'number[]': 'array',
  };

  return typeMap[tsType] || 'text';
}

/**
 * Extract prop types from a TypeScript interface
 */
function extractPropsFromInterface(
  sourceFile: ts.SourceFile,
  interfaceName: string
): PropDefinition[] {
  const props: PropDefinition[] = [];

  function visit(node: ts.Node) {
    if (ts.isInterfaceDeclaration(node) && node.name.text === interfaceName) {
      node.members.forEach((member) => {
        if (ts.isPropertySignature(member) && member.name) {
          const propName = member.name.getText(sourceFile);
          const isRequired = !member.questionToken;
          const typeNode = member.type;
          
          let propType = 'string';
          if (typeNode) {
            propType = typeNode.getText(sourceFile);
          }

          // Get JSDoc comment if available
          const jsDocTags = ts.getJSDocTags(member);
          const description = jsDocTags
            .find((tag) => tag.tagName.text === 'description')
            ?.comment?.toString();

          props.push({
            name: propName,
            type: propType,
            required: isRequired,
            description,
          });
        }
      });
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
  return props;
}

/**
 * Generate Payload block definition from component props
 */
function generateBlockDefinition(component: ComponentInfo): string {
  const blockSlug = component.name.toLowerCase().replace(/section$/, '');
  const blockName = component.name.replace(/Section$/, '');

  let blockCode = `import { Block } from 'payload/types';\n\n`;
  blockCode += `export const ${blockName}Block: Block = {\n`;
  blockCode += `  slug: '${blockSlug}',\n`;
  blockCode += `  labels: {\n`;
  blockCode += `    singular: '${blockName} Section',\n`;
  blockCode += `    plural: '${blockName} Sections',\n`;
  blockCode += `  },\n`;
  blockCode += `  fields: [\n`;

  component.props.forEach((prop) => {
    const payloadType = mapTypeToPayloadField(prop.type);
    
    blockCode += `    {\n`;
    blockCode += `      name: '${prop.name}',\n`;
    blockCode += `      type: '${payloadType}',\n`;
    
    if (prop.description) {
      blockCode += `      label: '${prop.description}',\n`;
    }
    
    if (prop.required) {
      blockCode += `      required: true,\n`;
    }
    
    blockCode += `    },\n`;
  });

  blockCode += `  ],\n`;
  blockCode += `};\n`;

  return blockCode;
}

/**
 * Scan components directory and extract prop types
 */
function scanComponents(componentsDir: string): ComponentInfo[] {
  const components: ComponentInfo[] = [];
  const files = fs.readdirSync(componentsDir);

  files.forEach((file) => {
    const filePath = path.join(componentsDir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Recursively scan subdirectories
      components.push(...scanComponents(filePath));
    } else if (file.endsWith('.tsx') && !file.includes('.stories.')) {
      // Parse TypeScript file
      const sourceCode = fs.readFileSync(filePath, 'utf-8');
      const sourceFile = ts.createSourceFile(
        filePath,
        sourceCode,
        ts.ScriptTarget.Latest,
        true
      );

      // Look for Props interface
      const componentName = path.basename(file, '.tsx');
      const propsInterfaceName = `${componentName}Props`;
      
      const props = extractPropsFromInterface(sourceFile, propsInterfaceName);
      
      if (props.length > 0) {
        components.push({
          name: componentName,
          props,
          filePath,
        });
      }
    }
  });

  return components;
}

/**
 * Main execution
 */
function main() {
  const componentsDir = path.join(__dirname, '../src/components/sections');
  const outputDir = path.join(__dirname, '../src/payload/blocks/generated');

  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('🔍 Scanning components...');
  const components = scanComponents(componentsDir);

  console.log(`📦 Found ${components.length} components with prop types`);

  components.forEach((component) => {
    console.log(`\n✨ Generating block for: ${component.name}`);
    console.log(`   Props: ${component.props.map((p) => p.name).join(', ')}`);

    const blockCode = generateBlockDefinition(component);
    const outputFile = path.join(outputDir, `${component.name}Block.ts`);

    fs.writeFileSync(outputFile, blockCode);
    console.log(`   ✅ Generated: ${outputFile}`);
  });

  // Generate index file
  const indexCode = components
    .map((c) => `export { ${c.name}Block } from './${c.name}Block';`)
    .join('\n');
  
  fs.writeFileSync(path.join(outputDir, 'index.ts'), indexCode);

  console.log('\n✅ Done! Generated blocks are in:', outputDir);
  console.log('\n📝 Next steps:');
  console.log('1. Review generated blocks in src/payload/blocks/generated/');
  console.log('2. Import them in src/payload/collections/Pages.ts');
  console.log('3. Add component mappings in src/components/payload/RenderBlocks.tsx');
}

// Run the script
main();
