# WiFi 6 Network Section

Sekcija koja prikazuje WiFi 6 tehnologiju korištenu u Saraya mreži.

## Komponente

### WiFi6NetworkSection
Glavna sekcija koja kombinuje header i kartice.

### WiFi6NetworkHeader
Header sa badge-om, naslovom i opisom WiFi 6 mreže.

### WiFi6NetworkCards
Grid sa tri kartice koje prikazuju:
- **WiFi 6**: Najnovija generacija sa brzinama do 9.6 Gbps
- **Stabilnost**: 99.9% uptime sa redundantnim sistemima
- **Kapacitet**: Podrška za 1000+ korisnika po access pointu

## Korištenje

```tsx
import { WiFi6NetworkSection } from "@/components/sections/wifi6network";

<WiFi6NetworkSection />
```

## Storybook

Komponente su dostupne u Storybook-u pod:
- `Sections/WiFi6Network/Overview` - Kompletna sekcija
- `Sections/WiFi6Network/Header` - Samo header
- `Sections/WiFi6Network/Cards` - Samo kartice

## Stranice

Ova sekcija se koristi na:
- `/products/saraya-connect` - Saraya Connect stranica
- `/products/saraya-hotspot` - Saraya Hotspot stranica
