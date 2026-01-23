# 🚀 Payload CMS sa Supabase - Kompletne Upute

## 📋 Šta je Supabase?

Supabase je open-source alternativa Firebase-u koja koristi PostgreSQL bazu podataka. Besplatan je za development i male projekte!

## ✅ Korak 1: Kreiraj Supabase Projekat

### 1.1 Registruj se na Supabase

Idi na: **https://supabase.com**

Klikni **"Start your project"** i registruj se sa:
- GitHub nalogom (preporučeno)
- Ili email-om

### 1.2 Kreiraj Novi Projekat

1. Klikni **"New Project"**
2. Popuni formu:
   ```
   Name: saraya-cms
   Database Password: (generiši jak password - SAČUVAJ GA!)
   Region: Europe (Frankfurt) - najbliži region
   Pricing Plan: Free
   ```
3. Klikni **"Create new project"**
4. Čekaj 2-3 minute dok se projekat kreira

### 1.3 Dobij Connection String

1. U Supabase dashboard-u, idi na **Settings** (lijevi sidebar)
2. Klikni **Database**
3. Scroll do **Connection string**
4. Kopiraj **URI** (Transaction mode)

Izgledat će ovako:
```
postgresql://postgres.abcdefghijklmnop:YOUR-PASSWORD@aws-0-eu-central-1.pooler.supabase.com:5432/postgres
```

**VAŽNO**: Zamijeni `YOUR-PASSWORD` sa passwordom koji si kreirao!

## ✅ Korak 2: Konfiguriši .env.local

Otvori `.env.local` fajl i ažuriraj:

```env
# Payload CMS Configuration
PAYLOAD_SECRET=your-super-secret-key-change-this

# Supabase Database Configuration
DATABASE_URL=postgresql://postgres.abcdefghijklmnop:YOUR-ACTUAL-PASSWORD@aws-0-eu-central-1.pooler.supabase.com:5432/postgres

# Next.js Configuration
NEXT_PUBLIC_SERVER_URL=http://localhost:3000

# Supabase (Optional)
NEXT_PUBLIC_SUPABASE_URL=https://abcdefghijklmnop.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### Gdje Naći Supabase Credentials:

1. **SUPABASE_URL**: 
   - Settings → API → Project URL

2. **SUPABASE_ANON_KEY**: 
   - Settings → API → Project API keys → anon public

## ✅ Korak 3: Pokreni Development Server

```bash
npm run dev
```

Server će se pokrenuti na: **http://localhost:3000**

## ✅ Korak 4: Pristupi Admin Panelu

Otvori browser i idi na:
```
http://localhost:3000/admin
```

## ✅ Korak 5: Kreiraj Admin Korisnika

Popuni formu:
```
Email: admin@sarayasolutions.com
Password: Admin123! (ili bilo koji jak password)
Confirm Password: Admin123!
Name: Admin
```

Klikni **"Create First User"**

## ✅ Korak 6: Provjeri Supabase Tabele

1. Vrati se u Supabase dashboard
2. Klikni **Table Editor** (lijevi sidebar)
3. Vidjet ćeš nove tabele koje je Payload kreirao:
   - `payload_preferences`
   - `users`
   - `pages`
   - `_rels` (relationships)

## 🎨 Korak 7: Kreiraj Prvu Stranicu

1. U Payload admin-u, klikni **"Pages"**
2. Klikni **"Create New"**
3. Popuni:
   ```
   Title: Home Page
   Slug: home
   Content: Dobrodošli na našu stranicu!
   ```
4. Klikni **"Save"**

## 🔍 Korak 8: Provjeri Podatke

### U Payload API:
```
http://localhost:3000/api/pages
```

### U Supabase:
1. Idi u **Table Editor**
2. Klikni na **pages** tabelu
3. Vidjet ćeš svoju stranicu!

## 📊 Prednosti Supabase-a

✅ **Besplatan tier**: 500MB baze, 2GB storage  
✅ **PostgreSQL**: Moćna relaciona baza  
✅ **Real-time**: Automatski real-time updates  
✅ **Auth**: Ugrađena autentifikacija  
✅ **Storage**: File storage uključen  
✅ **Dashboard**: Odličan UI za upravljanje  
✅ **Backup**: Automatski backup-i  
✅ **Skalabilnost**: Lako se skalira  

## 🔧 Napredne Opcije

### Direktan Pristup Bazi

Možeš koristiti Supabase client direktno:

```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Fetch data
const { data, error } = await supabase
  .from('pages')
  .select('*');
```

### SQL Editor

U Supabase dashboard-u, možeš pokretati SQL upite:

1. Klikni **SQL Editor**
2. Napiši upit:
```sql
SELECT * FROM pages;
```
3. Klikni **Run**

### Backup i Restore

1. Idi na **Database** → **Backups**
2. Klikni **"Create backup"**
3. Za restore, klikni na backup i **"Restore"**

## 🐛 Troubleshooting

### Problem: "Connection refused"

**Rješenje**:
1. Provjeri da li je `DATABASE_URL` tačan
2. Provjeri da li si zamijenio `YOUR-PASSWORD`
3. Provjeri da li je Supabase projekat aktivan

### Problem: "SSL connection error"

**Rješenje**: Dodaj `?sslmode=require` na kraj connection string-a:
```
DATABASE_URL=postgresql://...postgres?sslmode=require
```

### Problem: "Too many connections"

**Rješenje**: Koristi **Pooler** connection string (Transaction mode) umjesto Direct connection.

### Problem: "Password authentication failed"

**Rješenje**:
1. Resetuj database password u Supabase Settings → Database
2. Ažuriraj `DATABASE_URL` sa novim passwordom

## 📚 Korisni Linkovi

- **Supabase Dashboard**: https://supabase.com/dashboard
- **Supabase Docs**: https://supabase.com/docs
- **Payload Docs**: https://payloadcms.com/docs
- **PostgreSQL Docs**: https://www.postgresql.org/docs/

## 🎯 Sljedeći Koraci

1. ✅ Kreiraj više stranica
2. ✅ Dodaj media upload
3. ✅ Konfiguriši blocks za Storybook komponente
4. ✅ Setup production deployment
5. ✅ Konfiguriši backup strategiju

## 💡 Pro Tips

1. **Koristi Pooler**: Uvijek koristi Transaction mode connection string za bolje performanse
2. **Enable Row Level Security**: Za dodatnu sigurnost
3. **Monitor Usage**: Provjeri Database → Usage da ne pređeš free tier limite
4. **Use Indexes**: Dodaj indexe na često pretražene kolone
5. **Regular Backups**: Pravi redovne backup-e važnih podataka

## 🆘 Pomoć

Ako imaš problema:
1. Provjeri Supabase dashboard za greške
2. Pogledaj Payload logs u terminalu
3. Provjeri `.env.local` fajl
4. Kontaktiraj Supabase support (odlični su!)

---

**Čestitamo! 🎉**

Sada imaš Payload CMS sa Supabase PostgreSQL bazom!

- ✅ Besplatno hosting za bazu
- ✅ Moćan admin panel
- ✅ Real-time capabilities
- ✅ Automatski backup-i
- ✅ Skalabilno rješenje
