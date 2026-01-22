"use client";

import { motion } from "framer-motion";
import { 
  Glasses, Headset, MessageSquare, Bot, Wifi, Monitor, 
  ArrowRight, Brain, Globe, Camera, Hand, Mic,
  Shield, BarChart3, Sparkles, Code, Smartphone, Gamepad2,
  Layers, Database, Palette, Zap, Server, Lock
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import TechIllustration from "@/components/ui/TechIllustration";
import PageAnimations from "@/components/animations/PageAnimations";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export default function TechnologyPage() {
  const { t, language } = useLanguage();

  const coreTechnologies = [
    {
      id: "ar",
      icon: Glasses,
      title: t.technology.arTitle,
      subtitle: t.technology.arSubtitle,
      description: t.technology.arDescription,
      applications: t.technology.arApps,
      color: "purple",
    },
    {
      id: "vr",
      icon: Headset,
      title: t.technology.vrTitle,
      subtitle: t.technology.vrSubtitle,
      description: t.technology.vrDescription,
      applications: t.technology.vrApps,
      color: "green",
    },
    {
      id: "chatbot",
      icon: MessageSquare,
      title: t.technology.chatbotTitle,
      subtitle: t.technology.chatbotSubtitle,
      description: t.technology.chatbotDescription,
      applications: t.technology.chatbotApps,
      color: "blue",
    },
    {
      id: "avatar",
      icon: Bot,
      title: t.technology.avatarTitle,
      subtitle: t.technology.avatarSubtitle,
      description: t.technology.avatarDescription,
      applications: t.technology.avatarApps,
      color: "cyan",
    },
  ];

  const displayTechnologies = [
    { icon: Monitor, title: t.technology.basicDisplay, description: t.technology.basicDisplayDesc },
    { icon: MessageSquare, title: t.technology.kioskDisplay, description: t.technology.kioskDisplayDesc },
    { icon: Camera, title: t.technology.businessDisplay, description: t.technology.businessDisplayDesc },
    { icon: Bot, title: t.technology.eliteDisplay, description: t.technology.eliteDisplayDesc },
  ];

  const networkTechnologies = [
    { icon: Wifi, title: t.technology.sarayaConnectTitle, description: t.technology.sarayaConnectDesc },
    { icon: Globe, title: t.technology.sarayaNetworkTitle, description: t.technology.sarayaNetworkDesc },
    { icon: BarChart3, title: t.technology.analyticsTitle, description: t.technology.analyticsDesc },
    { icon: Shield, title: t.technology.securityTitle, description: t.technology.securityDesc },
  ];

  const webTechnologies = [
    { icon: Code, name: t.technology.nextReact, description: t.technology.nextReactDesc, color: "blue" },
    { icon: Palette, name: t.technology.tailwind, description: t.technology.tailwindDesc, color: "cyan" },
    { icon: Database, name: t.technology.nodeExpress, description: t.technology.nodeExpressDesc, color: "green" },
    { icon: Server, name: t.technology.databases, description: t.technology.databasesDesc, color: "purple" },
    { icon: Lock, name: t.technology.auth, description: t.technology.authDesc, color: "pink" },
    { icon: Zap, name: t.technology.cloud, description: t.technology.cloudDesc, color: "orange" },
  ];

  const gameTechnologies = [
    { icon: Gamepad2, name: t.technology.unity, description: t.technology.unityDesc, features: t.technology.unityFeatures },
    { icon: Layers, name: t.technology.unreal, description: t.technology.unrealDesc, features: t.technology.unrealFeatures },
  ];

  const mobileTechnologies = [
    { icon: Smartphone, name: t.technology.reactNative, description: t.technology.reactNativeDesc, color: "blue" },
    { icon: Code, name: t.technology.flutter, description: t.technology.flutterDesc, color: "cyan" },
    { icon: Zap, name: t.technology.swiftKotlin, description: t.technology.swiftKotlinDesc, color: "purple" },
  ];

  const aiCapabilities = [
    { icon: Brain, title: t.technology.nlp, description: t.technology.nlpDesc },
    { icon: Globe, title: t.technology.multilingual, description: t.technology.multilingualDesc },
    { icon: Mic, title: t.technology.voiceRecognition, description: t.technology.voiceRecognitionDesc },
    { icon: Camera, title: t.technology.computerVision, description: t.technology.computerVisionDesc },
    { icon: Hand, title: t.technology.motionTracking, description: t.technology.motionTrackingDesc },
    { icon: Sparkles, title: t.technology.personalization, description: t.technology.personalizationDesc },
  ];

  const integrations = t.technology.integrationsList;
  return (
    <>
      <PageAnimations />
      {/* Hero Section */}
      <section className="relative pt-20 pb-8 md:pt-32 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute top-1/4 right-0 w-64 md:w-[500px] h-64 md:h-[500px] bg-primary-500/20 rounded-full blur-[100px] md:blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-48 md:w-[400px] h-48 md:h-[400px] bg-pink-500/15 rounded-full blur-[80px] md:blur-[100px]" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 md:mb-6">
              {t.technology.heroTitle}{" "}
              <span className="text-gradient">{t.technology.heroTitleHighlight}</span>
            </h1>
            <p className="text-sm md:text-lg lg:text-xl text-foreground-muted leading-relaxed max-w-2xl mx-auto">
              {t.technology.heroDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="py-24 bg-background-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.technology.coreTechTitle} <span className="text-gradient">{t.technology.coreTechTitleHighlight}</span>
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              {t.technology.coreTechDescription}
            </p>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* AR - Large card spanning 7 columns */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-7 rounded-2xl border backdrop-blur-sm overflow-hidden bg-gradient-to-br from-primary-500/10 to-primary-600/5 border-primary-500/20 group hover:border-primary-500/40 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row h-full">
                <div className="relative h-48 md:h-auto md:w-2/5 flex items-center justify-center bg-primary-500/5 overflow-hidden">
                  <TechIllustration type="ar" className="w-full h-full scale-110 group-hover:scale-125 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary-500/10" />
                </div>
                <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center">
                      <Glasses className="text-primary-400" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">AR</h3>
                      <p className="text-foreground-subtle text-xs">Proširena stvarnost</p>
                    </div>
                  </div>
                  <p className="text-foreground-muted text-sm mb-4 line-clamp-3">{coreTechnologies[0].description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {coreTechnologies[0].applications.slice(0, 3).map((app) => (
                      <span key={app} className="px-2 py-0.5 rounded-full text-xs bg-primary-500/20 text-primary-400">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* VR - Tall card spanning 5 columns */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-5 md:row-span-2 rounded-2xl border backdrop-blur-sm overflow-hidden bg-gradient-to-br from-accent-green/10 to-emerald-600/5 border-accent-green/20 group hover:border-accent-green/40 transition-all duration-300"
            >
              <div className="relative h-56 md:h-64 flex items-center justify-center bg-accent-green/5 overflow-hidden">
                <TechIllustration type="vr" className="w-full h-full scale-110 group-hover:scale-125 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background-dark/80" />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-green/20 flex items-center justify-center">
                    <Headset className="text-accent-green" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">VR</h3>
                    <p className="text-foreground-subtle text-xs">Virtualna stvarnost</p>
                  </div>
                </div>
                <p className="text-foreground-muted text-sm mb-4">{coreTechnologies[1].description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {coreTechnologies[1].applications.map((app) => (
                    <span key={app} className="px-2 py-0.5 rounded-full text-xs bg-accent-green/20 text-accent-green">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* AI Chatbot - Medium card spanning 7 columns */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-7 rounded-2xl border backdrop-blur-sm overflow-hidden bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20 group hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="flex flex-col-reverse md:flex-row h-full">
                <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                      <MessageSquare className="text-blue-400" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">AI Chatbot</h3>
                      <p className="text-foreground-subtle text-xs">Virtualni asistent</p>
                    </div>
                  </div>
                  <p className="text-foreground-muted text-sm mb-4 line-clamp-3">{coreTechnologies[2].description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {coreTechnologies[2].applications.slice(0, 3).map((app) => (
                      <span key={app} className="px-2 py-0.5 rounded-full text-xs bg-blue-500/20 text-blue-400">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="relative h-48 md:h-auto md:w-2/5 flex items-center justify-center bg-blue-500/5 overflow-hidden">
                  <TechIllustration type="chatbot" className="w-full h-full scale-110 group-hover:scale-125 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-blue-500/10" />
                </div>
              </div>
            </motion.div>

            {/* AI Avatar - Full width card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-12 rounded-2xl border backdrop-blur-sm overflow-hidden bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border-cyan-500/20 group hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="relative h-48 md:h-56 w-full md:w-1/3 flex items-center justify-center bg-cyan-500/5 overflow-hidden">
                  <TechIllustration type="avatar" className="w-full h-full scale-110 group-hover:scale-125 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-cyan-500/10" />
                </div>
                <div className="p-6 md:p-10 md:w-2/3">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                      <Bot className="text-cyan-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">AI Avatar</h3>
                      <p className="text-foreground-subtle text-sm">Digitalna reprezentacija</p>
                    </div>
                    <span className="ml-auto px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/30 text-cyan-300 border border-cyan-500/30">
                      {t.common.languages}
                    </span>
                  </div>
                  <p className="text-foreground-muted mb-5">{coreTechnologies[3].description}</p>
                  <div className="flex flex-wrap gap-2">
                    {coreTechnologies[3].applications.map((app) => (
                      <span key={app} className="px-3 py-1 rounded-full text-sm bg-cyan-500/20 text-cyan-400 border border-cyan-500/20">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Display Technologies */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.technology.displayTechTitle} <span className="text-gradient">{t.technology.displayTechTitleHighlight}</span>
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              {t.technology.displayTechDescription}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {displayTechnologies.map((tech, index) => (
              <Card key={tech.title} glow="purple">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary-500/20 flex items-center justify-center mx-auto mb-4">
                    <tech.icon className="text-primary-400" size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{tech.title}</h3>
                  <p className="text-foreground-muted text-sm">{tech.description}</p>
                </motion.div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/products/display">
              <Button variant="outline">
                {t.technology.displayCta}
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Network Technologies */}
      <section className="py-24 bg-background-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.technology.networkTechTitle} <span className="text-gradient">{t.technology.networkTechTitleHighlight}</span>
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              {t.technology.networkTechDescription}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {networkTechnologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-background-card border border-accent-green/10 text-center hover:border-accent-green/30 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-accent-green/20 flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="text-accent-green" size={28} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{tech.title}</h3>
                <p className="text-foreground-muted text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/products/saraya-connect">
              <Button variant="secondary">
                {t.technology.networkCta}
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Web Technologies */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.technology.webTechTitle} <span className="text-gradient">{t.technology.webTechTitleHighlight}</span>
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              {t.technology.webTechDescription}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {webTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-2xl border backdrop-blur-sm hover:scale-[1.02] transition-all duration-300 ${
                  tech.color === "blue" ? "bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20 hover:border-blue-500/40"
                  : tech.color === "cyan" ? "bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border-cyan-500/20 hover:border-cyan-500/40"
                  : tech.color === "green" ? "bg-gradient-to-br from-accent-green/10 to-emerald-600/5 border-accent-green/20 hover:border-accent-green/40"
                  : tech.color === "purple" ? "bg-gradient-to-br from-primary-500/10 to-primary-600/5 border-primary-500/20 hover:border-primary-500/40"
                  : tech.color === "pink" ? "bg-gradient-to-br from-pink-500/10 to-pink-600/5 border-pink-500/20 hover:border-pink-500/40"
                  : "bg-gradient-to-br from-orange-500/10 to-orange-600/5 border-orange-500/20 hover:border-orange-500/40"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  tech.color === "blue" ? "bg-blue-500/20"
                  : tech.color === "cyan" ? "bg-cyan-500/20"
                  : tech.color === "green" ? "bg-accent-green/20"
                  : tech.color === "purple" ? "bg-primary-500/20"
                  : tech.color === "pink" ? "bg-pink-500/20"
                  : "bg-orange-500/20"
                }`}>
                  <tech.icon className={`${
                    tech.color === "blue" ? "text-blue-400"
                    : tech.color === "cyan" ? "text-cyan-400"
                    : tech.color === "green" ? "text-accent-green"
                    : tech.color === "purple" ? "text-primary-400"
                    : tech.color === "pink" ? "text-pink-400"
                    : "text-orange-400"
                  }`} size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
                <p className="text-foreground-muted text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Development Technologies */}
      <section className="py-24 bg-background-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.technology.gameTechTitle} <span className="text-gradient">{t.technology.gameTechTitleHighlight}</span>
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              {t.technology.gameTechDescription}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {gameTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-primary-500/10 via-pink-500/5 to-accent-green/10 border border-primary-500/20 hover:border-primary-500/40 transition-all group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500/30 to-pink-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <tech.icon className="text-primary-400" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{tech.name}</h3>
                    <p className="text-foreground-muted mb-4">{tech.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {tech.features.map((feature) => (
                        <span key={feature} className="px-3 py-1 rounded-full text-xs bg-primary-500/20 text-primary-400 border border-primary-500/20">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Technologies */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.technology.mobileTechTitle} <span className="text-gradient">{t.technology.mobileTechTitleHighlight}</span>
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              {t.technology.mobileTechDescription}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {mobileTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-2xl border backdrop-blur-sm text-center hover:scale-[1.02] transition-all duration-300 ${
                  tech.color === "blue" ? "bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20 hover:border-blue-500/40"
                  : tech.color === "cyan" ? "bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border-cyan-500/20 hover:border-cyan-500/40"
                  : "bg-gradient-to-br from-primary-500/10 to-primary-600/5 border-primary-500/20 hover:border-primary-500/40"
                }`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                  tech.color === "blue" ? "bg-blue-500/20"
                  : tech.color === "cyan" ? "bg-cyan-500/20"
                  : "bg-primary-500/20"
                }`}>
                  <tech.icon className={`${
                    tech.color === "blue" ? "text-blue-400"
                    : tech.color === "cyan" ? "text-cyan-400"
                    : "text-primary-400"
                  }`} size={28} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
                <p className="text-foreground-muted text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.technology.aiTitle} <span className="text-gradient">{t.technology.aiTitleHighlight}</span>
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              {t.technology.aiDescription}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiCapabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-primary-500/10 border border-cyan-500/20 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <cap.icon className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{cap.title}</h3>
                  <p className="text-foreground-muted text-sm">{cap.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24 bg-background-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t.technology.integrationsTitle} <span className="text-gradient">{t.technology.integrationsTitleHighlight}</span>
              </h2>
              <p className="text-foreground-muted mb-8 leading-relaxed">
                {t.technology.integrationsDescription}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {integrations.map((integration, index) => (
                  <motion.div
                    key={integration}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent-green" />
                    <span className="text-foreground-muted text-sm">{integration}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-background-card border border-primary-500/20 p-8 flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Central hub - Saraya Logo */}
                  <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-green/20 border-2 border-primary-500/30 flex items-center justify-center z-10 shadow-xl shadow-primary-500/20">
                    <img 
                      src="/images/shortLogo.png" 
                      alt="Saraya" 
                      className="w-16 h-16 md:w-20 md:h-20 object-contain"
                    />
                  </div>
                  
                  {/* Orbiting icons */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center">
                      <Wifi className="text-primary-400" size={20} />
                    </div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-accent-green/20 flex items-center justify-center">
                      <Monitor className="text-accent-green" size={20} />
                    </div>
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                      <Bot className="text-cyan-400" size={20} />
                    </div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <Glasses className="text-blue-400" size={20} />
                    </div>
                  </motion.div>

                  {/* Connection lines */}
                  <div className="absolute inset-12 rounded-full border border-dashed border-primary-500/20" />
                  <div className="absolute inset-4 rounded-full border border-dashed border-accent-green/20" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/50 to-background" />
        <div className="absolute top-0 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-pink-500/20 rounded-full blur-3xl" />

        <div className="text-center relative z-10">
          <div className="inline-block mb-4 md:mb-6">
            <Sparkles className="text-primary-400" size={32} />
          </div>

          <h2 className="text-xl md:text-3xl lg:text-5xl font-bold mb-3 md:mb-6">
            {language === "bs" ? "Spremni za" : "Ready for"}{" "}
            <span className="text-gradient">{language === "bs" ? "digitalnu transformaciju?" : "digital transformation?"}</span>
          </h2>

          <p className="text-xs md:text-lg text-foreground-muted mb-6 md:mb-8 max-w-2xl mx-auto">
            {language === "bs" 
              ? "Razgovarajmo o tome kako Saraya Solutions može pomoći vašem poslovanju da postigne tehnološke ciljeve."
              : "Let's talk about how Saraya Solutions can help your business achieve its technology goals."
            }
          </p>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                {t.nav.contactUs}
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Made in BiH */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-green flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl font-bold text-white">S</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t.technology.madeInBiHTitle} <span className="text-gradient">{t.technology.madeInBiHTitleHighlight}</span>
            </h2>
            <p className="text-lg text-foreground-muted mb-8 leading-relaxed">
              {t.technology.madeInBiHDescription}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  {t.nav.contactUs}
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link href="/products/display">
                <Button variant="outline" size="lg">
                  {t.technology.viewProducts}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
