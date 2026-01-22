# WiFi 6 Network - Uputstvo za korištenje

## Kako dodati WiFi 6 sekciju na novu stranicu

### 1. Import komponente

```tsx
import { WiFi6NetworkSection } from "@/components/sections/wifi6network";
```

### 2. Dodaj sekciju u stranicu

```tsx
export default function MyPage() {
  return (
    <>
      <PageAnimations />
      
      <ProductHero {...heroProps} />
      
      {/* WiFi 6 Network Section */}
      <WiFi6NetworkSection />
      
      {/* Ostale sekcije */}
    </>
  );
}
```

## Prilagođavanje teksta

Sekcija automatski koristi `useLanguage` hook za višejezičnost.

### Bosanski (bs)
- Naslov: "Najbrža i najstabilnija WiFi 6 mreža"
- Opis: "Saraya koristi najnoviju WiFi 6 tehnologiju..."

### Engleski (en)
- Naslov: "Fastest and most stable WiFi 6 network"
- Opis: "Saraya uses the latest WiFi 6 technology..."

## Prilagođavanje za specifične stranice

Ako želite prilagoditi tekst za specifičnu stranicu (npr. "Saraya Connect" vs "Saraya Hotspot"):

```tsx
// U WiFi6NetworkHeader.tsx, dodajte prop za customizaciju
export default function WiFi6NetworkHeader({ 
  customDescription 
}: { 
  customDescription?: string 
}) {
  const { language } = useLanguage();

  return (
    <div data-gsap="section-header" className="text-center mb-12 md:mb-16">
      {/* ... */}
      <p className="text-foreground-muted text-sm md:text-lg max-w-2xl mx-auto">
        {customDescription || (language === "bs"
          ? "Saraya koristi najnoviju WiFi 6 tehnologiju..."
          : "Saraya uses the latest WiFi 6 technology...")}
      </p>
    </div>
  );
}
```

## Animacije

Sekcija koristi GSAP animacije:
- `data-gsap="section-header"` - Animacija za header
- `data-gsap="card"` - Animacija za svaku karticu
- `data-gsap="parallax"` - Parallax efekti za pozadinske elemente

Animacije se automatski aktiviraju ako je `PageAnimations` komponenta prisutna na stranici.
