# 🚀 Payload CMS - Brzi Start

## ✅ Šta je instalirano

Payload CMS v3 je uspješno instaliran i konfigurisan!

## 📋 Koraci za pokretanje

### 1. Pokreni MongoDB

**Opcija A: Lokalni MongoDB**
```bash
# Windows
net start MongoDB

# macOS
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

**Opcija B: MongoDB Atlas (Cloud - PREPORUČENO)**
1. Idi na https://www.mongodb.com/cloud/atlas
2. Kreiraj besplatan cluster
3. Dobij connection string
4. Ažuriraj `MONGODB_URI` u `.env.local`

### 2. Pokreni Development Server

```bash
npm run dev
```

### 3. Pristupi Payload Admin

Otvori browser i idi na:
```
http://localhost:3000/admin
```

### 4. Kreiraj Admin Korisnika

Pri prvom pristupu, vidjet ćeš formu za kreiranje admin korisnika:

- **Email**: `admin@sarayasolutions.com`
- **Password**: (odaberi jak password)
- **Name**: Tvoje ime

Klikni **Create First User**

## 🎨 Kreiranje Stranice

1. U admin panelu, klikni **Pages** u sidebar-u
2. Klikni **Create New**
3. Popuni:
   - **Title**: "Home"
   - **Slug**: "home"
   - **Content**: Napiši neki sadržaj
4. Klikni **Save**

## 🌐 Pristup Stranici

Tvoja stranica je sada dostupna na:
```
http://localhost:3000/api/pages
```

## 📚 Sljedeći Koraci

1. Pročitaj [PAYLOAD_CMS_INTEGRATION.md](./PAYLOAD_CMS_INTEGRATION.md) za detaljnu dokumentaciju
2. Pročitaj [PAYLOAD_EXAMPLES.md](./PAYLOAD_EXAMPLES.md) za primjere
3. Dodaj više kolekcija i blokova

## 🐛 Problemi?

### MongoDB se ne povezuje

**Problem**: `MongoServerError: connect ECONNREFUSED`

**Rješenje**:
```bash
# Provjeri da li MongoDB radi
mongosh

# Ili koristi MongoDB Atlas (cloud)
```

### Port 3000 je zauzet

**Problem**: `Port 3000 is already in use`

**Rješenje**:
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:3000 | xargs kill -9
```

### PAYLOAD_SECRET greška

**Problem**: `PAYLOAD_SECRET is missing`

**Rješenje**:
Provjeri da `.env.local` postoji i ima `PAYLOAD_SECRET`

## 🎉 Gotovo!

Sada možeš:
- ✅ Kreirati stranice u Payload admin
- ✅ Upravljati sadržajem bez koda
- ✅ Koristiti REST API
- ✅ Dodavati nove kolekcije

## 💡 Korisni Linkovi

- Admin Panel: http://localhost:3000/admin
- API Docs: http://localhost:3000/api-docs
- Pages API: http://localhost:3000/api/pages
