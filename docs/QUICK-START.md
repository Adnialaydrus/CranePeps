# 🚀 Quick Start Guide - Sewa Crane Peps Website

## Langkah 1: Persiapan Logo ⚠️ PENTING

Website sudah siap, tapi Anda perlu menambahkan logo terlebih dahulu:

### Cara Menyimpan Logo:

1. **Dari gambar yang Anda berikan** (gambar kedua):
   - Logo dengan crane kuning dan teks "Sewa CranePeps"
   - Simpan/ekstrak gambar tersebut
   
2. **Save as PNG**:
   - Format: PNG dengan background transparan
   - Nama file: `logo.png` (huruf kecil semua)
   
3. **Simpan di folder**:
   - Lokasi: `images/logo.png`

### Cara Cepat:
- Klik kanan pada gambar logo → Save Image As
- Pilih format PNG
- Rename menjadi `logo.png`
- Pindahkan ke folder `images/`

## Langkah 2: Tambahkan Foto Crane (Opsional)

Dari gambar mockup Anda (gambar pertama), ada foto crane kuning outdoor:

1. Save foto crane tersebut
2. Nama file: `crane-photo.jpg`
3. Simpan di: `images/crane-photo.jpg`

**Atau** gunakan foto crane dari perusahaan Anda sendiri.

## Langkah 3: Update Nomor WhatsApp

Edit nomor WhatsApp di semua file HTML:

1. Buka `index.html`
2. Find (Ctrl+F): `6281234567890`
3. Replace dengan nomor WhatsApp Anda (format: 62812XXXX)
4. Ulangi untuk `tentang-kami.html` dan `hubungi-kami.html`

**Format nomor yang benar:**
- ❌ Salah: 0812-3456-7890
- ✅ Benar: 6281234567890 (62 = kode Indonesia, tanpa 0)

## Langkah 4: Buka Website

1. **Buka di Browser**:
   - Double click `index.html`
   - Atau klik kanan → Open with → Browser pilihan Anda

2. **Test Semua Halaman**:
   - ✅ Home (index.html)
   - ✅ Tentang Kami
   - ✅ Hubungi Kami

3. **Test di Mobile**:
   - Buka Developer Tools (F12)
   - Toggle Device Toolbar (Ctrl+Shift+M)
   - Pilih device mobile untuk test responsive

## Langkah 5: Kustomisasi (Opsional)

### Ubah Informasi Kontak:

Edit di bagian footer semua file HTML:

```html
<p>WhatsApp: +62 812-3456-7890</p>  <!-- Ganti nomor -->
<p>Email: andhikapp06@gmail.com</p>  <!-- Ganti email -->
```

### Ubah Warna Website:

Edit di `css/styles.css` baris 12-17:

```css
:root {
    --primary-color: #F4B223;     /* Warna kuning/gold */
    --secondary-color: #000000;   /* Warna hitam */
    --background-color: #F5F5F0;  /* Warna background */
}
```

## Langkah 6: Hosting (Upload ke Internet)

### Opsi 1: GitHub Pages (GRATIS)

1. Buat repository di GitHub
2. Upload semua file
3. Settings → Pages → Enable
4. Website live di `https://username.github.io/repository-name`

### Opsi 2: Netlify (GRATIS)

1. Buka [netlify.com](https://netlify.com)
2. Drag & drop folder website-pp
3. Website langsung live dengan custom domain

### Opsi 3: Web Hosting Tradisional

1. Upload semua file via FTP/cPanel
2. Pastikan `index.html` di root directory
3. Website langsung bisa diakses

## ✅ Checklist Sebelum Launch

- [ ] Logo sudah di `images/logo.png`
- [ ] Foto crane (opsional) di `images/crane-photo.jpg`
- [ ] Nomor WhatsApp sudah diganti di semua file HTML
- [ ] Email dan kontak sudah benar
- [ ] Test di browser desktop (Chrome, Firefox, Edge)
- [ ] Test di mobile (responsive)
- [ ] Test semua tombol WhatsApp berfungsi
- [ ] Test navigasi antar halaman

## 🆘 Troubleshooting Cepat

### Logo tidak muncul
- Periksa nama file: harus persis `logo.png`
- Periksa lokasi: harus di folder `images/`
- Clear cache browser (Ctrl+F5)

### WhatsApp tidak buka
- Periksa format nomor: 62812XXXX (tanpa +, tanpa spasi)
- Test di HP dengan WhatsApp terinstall

### Tampilan berantakan
- Clear cache browser
- Periksa semua file CSS dan JS sudah di folder yang benar

## 📞 File-File Penting

```
website-pp/
├── index.html              ← Halaman utama (wajib)
├── tentang-kami.html       ← Halaman about
├── hubungi-kami.html       ← Halaman kontak
├── css/styles.css          ← Styling (jangan dihapus)
├── js/main.js              ← JavaScript (jangan dihapus)
└── images/
    ├── logo.png            ← TAMBAHKAN INI!
    └── crane-photo.jpg     ← Opsional
```

## 🎉 Selesai!

Website Anda siap digunakan! Jika ada pertanyaan, silakan hubungi developer atau tim IT Anda.

---

**Tips**: Simpan nomor WhatsApp yang banyak menghubungi untuk analytics bisnis Anda!



