# Panduan Tugas 7 (React + Vite)

## 1. Jalankan
Di folder proyek:
```
npm install
npm run dev        # buka alamat yang muncul (http://localhost:5173)
npm run build      # pastikan tanpa error
```
Uji semua fitur: cari mata kuliah, filter SKS, lihat/sembunyikan detail proyek, tambah proyek, hapus proyek. Coba juga di ukuran layar HP (F12 > ikon device).

## 2. GitHub (minimal 5 commit)
Buat repository KOSONG di GitHub, misalnya `portofolio-react`. Lalu commit bertahap:
```
git init
git add package.json package-lock.json vite.config.js index.html .gitignore
git commit -m "Inisialisasi proyek React + Vite"
git add src/main.jsx src/index.css src/data
git commit -m "Tambah entry point, gaya dasar, dan data"
git add src/components/Header.jsx src/components/Footer.jsx src/components/Section.jsx src/components/Button.jsx src/components/ProfilCard.jsx
git commit -m "Tambah komponen layout dan profil"
git add src/components/SearchBar.jsx src/components/FilterButtons.jsx src/components/MatkulItem.jsx src/components/MatkulList.jsx
git commit -m "Tambah fitur cari dan filter mata kuliah"
git add src/components/ProyekCard.jsx src/components/ProyekForm.jsx
git commit -m "Tambah fitur proyek (tambah, hapus, detail)"
git add .
git commit -m "Tambah App, penjelasan, dan panduan"
git branch -M main
git remote add origin https://github.com/anggraenisilvi413-sudo/portofolio-react.git
git push -u origin main
```
Screenshot: `git --no-pager log --oneline` (minimal 5 commit) dan halaman repo di GitHub.

## 3. Publikasi
1. Vercel > **Add New > Project** > pilih repo `portofolio-react` (Framework: **Vite**) > **Deploy**. Tidak perlu environment variable.
2. Buka link hasil deploy (alamat utama, bukan alamat acak per deployment) dan cek semua fitur.
3. Di website pribadi (`projek-paw.vercel.app`): **Masuk pemilik > + Tambah Tugas**, isi "Tugas Pertemuan 7: React", link aplikasi di **Link tugas / demo**, dan link repo di **Link repository**.

## 4. Yang dikumpulkan
- Link website pribadi yang menyediakan link ke aplikasi React.
- Link repository GitHub.
- Screenshot: tampilan desktop dan HP, tiap fitur (cari, filter, detail, tambah, hapus), riwayat commit, aplikasi online, website pribadi dengan link ke aplikasi.
- Penjelasan komponen, props, state, event handling: sudah ada di bagian "Tentang Aplikasi Ini" pada halaman aplikasi.
