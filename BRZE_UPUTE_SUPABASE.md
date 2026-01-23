# ⚡ BRZE UPUTE - Payload CMS sa Supabase

## 🎯 Šta Trebaš Uraditi (5 minuta)

### 1️⃣ Kreiraj Supabase Projekat

1. Idi na: **https://supabase.com**
2. Registruj se (besplatno)
3. Klikni **"New Project"**
4. Popuni:
   - Name: `saraya-cms`
   - Password: (generiši i **SAČUVAJ**)
   - Region: `Europe (Frankfurt)`
5. Klikni **"Create new project"**
6. Čekaj 2-3 minute

### 2️⃣ Dobij Connection String

1. U Supabase, idi na **Settings** → **Database**
2. Scroll do **Connection string**
3. Kopiraj **URI** (Transaction mode)
4. Izgledat će ovako:
   ```
   postgresql://postgres.xyz:PASSWORD@aws-0-eu-central-1.pooler.supabase.com:5432/postgres
   ```

### 3️⃣ Ažuriraj .env.local

Otvori `.env.local` i zamijeni:

```env
DATABASE_URL=postgresql://postgres.xyz:TVOJ-PASSWORD@aws-0-eu-central-1.pooler.supabase.com:5432/postgres
```

**VAŽNO**: Zamijeni `TVOJ-PASSWORD` sa passwordom iz koraka 1!

### 4️⃣ Pokreni Server

```bash
npm run dev
```

### 5️⃣ Otvori Admin

```
http://localhost:3000/admin
```

Kreiraj korisnika:
- Email: `admin@sarayasolutions.com`
- Password: `Admin123!`

## ✅ Gotovo!

Sada možeš:
- Kreirati stranice u admin panelu
- Vidjeti podatke u Supabase dashboard-u
- Koristiti API: `http://localhost:3000/api/pages`

## 🐛 Problem?

### "Connection refused"
→ Provjeri da li si zamijenio password u `DATABASE_URL`

### "SSL error"
→ Dodaj `?sslmode=require` na kraj connection string-a

### "Password authentication failed"
→ Resetuj password u Supabase Settings → Database

---

**Detaljne upute**: [SUPABASE_SETUP.md](./SUPABASE_SETUP.md)
