# Kako koristiti Payload CMS

## 🚀 Brzi Start

### 1. Pokretanje Servera

Ako server nije pokrenut, pokrenite ga:
```bash
npm run dev
```

Server će biti dostupan na: **http://localhost:3000**

### 2. Pristup Admin Panelu

Otvorite browser i idite na:
```
http://localhost:3000/admin
```

### 3. Kreiranje Admin Naloga

Pri prvom pristupu, vidjet ćete formu za registraciju:
- **Email**: Unesite vaš email
- **Password**: Unesite sigurnu lozinku
- Kliknite "Create First User"

### 4. Kreiranje Stranice

Nakon logovanja:

1. **Kliknite na "Pages"** u lijevom meniju
2. **Kliknite "Create New"**
3. **Popunite osnovne informacije:**
   - **Page Title**: Naslov stranice (npr. "O nama")
   - **URL Slug**: URL putanja (npr. "o-nama")
   - **Language**: Odaberite jezik (Bosnian ili English)
   - **Meta Description**: SEO opis za pretraživače

4. **Dodajte sekcije:**
   - Kliknite "Add Block" u "Page Sections"
   - Odaberite tip sekcije (Hero, Features, Products, itd.)
   - Popunite polja za odabranu sekciju
   - Možete dodati više sekcija

5. **Sačuvajte stranicu:**
   - Kliknite "Save" dugme gore desno

### 5. Pregled Stranice

Vaša stranica će biti dostupna na:
```
http://localhost:3000/cms/[vaš-slug]
```

Npr. ako je slug "o-nama":
```
http://localhost:3000/cms/o-nama
```

## 📦 Dostupne Sekcije (Blocks)

### Hero Section
Glavna hero sekcija sa naslovom, opisom i CTA dugmadima.

**Polja:**
- Badge Text
- Title (First Part)
- Title (Gradient Part)
- Description
- Primary CTA (text, link)
- Secondary CTA (text, link)
- Hero Image

### Product Hero Section
Hero sekcija specifična za proizvode sa statistikama.

**Polja:**
- Badge Text
- Product Title
- Title Highlight
- Description
- Primary CTA
- Secondary CTA
- Product Image
- Statistics (value, label)

### Features Section
Prikaz feature-a sa ikonama.

**Polja:**
- Badge Text
- Section Title
- Title Highlight
- Description
- Features (icon, title, description, link)

### Products Section
Prikaz proizvoda u grid formatu.

**Polja:**
- Badge Text
- Section Title
- Title Highlight
- Description
- Products (icon, title, description, link, color)

### Services Section
Prikaz usluga (koristi isti layout kao Products).

**Polja:**
- Badge Text
- Section Title
- Title Highlight
- Description
- Services (icon, title, description, link, color)

### Benefits Section
Prikaz benefita/prednosti.

**Polja:**
- Badge Text
- Section Title
- Title Highlight
- Description
- Benefits (icon, title, description)

### Technologies Section
Prikaz tehnologija koje koristite.

**Polja:**
- Badge Text
- Section Title
- Title Highlight
- Description
- Technologies (name, icon, description)

### Partners Section
Prikaz partnera/klijenata sa logotipima.

**Polja:**
- Badge Text
- Section Title
- Description
- Partner Logos

### CTA Section
Call-to-action sekcija za poziv na akciju.

**Polja:**
- Title
- Description
- CTA Button (text, link)

## 🎨 Upload Slika

1. Idite na **"Media"** u lijevom meniju
2. Kliknite **"Upload"**
3. Odaberite sliku sa računara
4. Dodajte **Alt Text** za pristupačnost
5. Kliknite **"Save"**

Slike možete koristiti u sekcijama koje imaju polje za upload (npr. Hero Image).

## 🌐 Višejezičnost

Svaka stranica ima polje **Language**:
- **Bosnian (bs)**: Za bosanski sadržaj
- **English (en)**: Za engleski sadržaj

Možete kreirati istu stranicu na oba jezika sa istim slug-om.

## 💡 Savjeti

1. **URL Slug** mora biti jedinstven
2. Koristite **kratke i opisne slug-ove** (npr. "proizvodi", "kontakt")
3. **Meta Description** je važan za SEO (150-160 karaktera)
4. **Redoslijed sekcija** možete mijenjati drag & drop metodom
5. Možete **duplicirati sekcije** ako trebate sličan sadržaj

## 🔍 Pregled u Supabase

Svi podaci se čuvaju u Supabase PostgreSQL bazi:

1. Idite na: https://supabase.com/dashboard
2. Odaberite vaš projekat
3. Kliknite na **"Table Editor"**
4. Vidjet ćete tabele: `pages`, `users`, `media`

## 🚨 Troubleshooting

### Ne mogu pristupiti /admin
- Provjerite da li server radi na http://localhost:3000
- Provjerite `.env.local` fajl

### Stranica se ne prikazuje
- Provjerite da li je slug tačan
- Provjerite da li ste sačuvali stranicu
- Osvježite stranicu (Ctrl+F5)

### Slike se ne učitavaju
- Provjerite da li je slika uploadovana u Media
- Provjerite da li je folder `public/uploads` kreiran

## 📚 Dodatna Dokumentacija

- `PAYLOAD_SETUP.md` - Tehnička dokumentacija
- `PAYLOAD_EXAMPLES.md` - Primjeri korištenja
- `SUPABASE_SETUP.md` - Supabase konfiguracija
