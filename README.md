# Sewa Crane Peps - Website

Website landing page untuk layanan sewa crane dan skylift profesional.

## 📋 Deskripsi

Website ini dibuat untuk **Sewa Crane Peps**, penyedia jasa sewa crane dan skylift dengan operator berpengalaman. Website ini dirancang dengan tampilan modern, responsif, dan mudah digunakan.

## 🚀 Fitur

- **Desain Modern & Responsif** - Tampil sempurna di semua perangkat (desktop, tablet, mobile)
- **Integrasi WhatsApp** - Langsung terhubung ke WhatsApp untuk pemesanan cepat
- **3 Halaman Utama**:
  - Home - Halaman utama dengan informasi layanan
  - Tentang Kami - Profil perusahaan dan keunggulan
  - Hubungi Kami - Informasi kontak dan jam operasional
- **Navigasi Mudah** - Menu yang user-friendly
- **SEO Friendly** - Optimasi untuk mesin pencari

## 🛠️ Teknologi

- **HTML5** - Struktur semantic
- **CSS3** - Styling modern dengan Flexbox & Grid
- **Vanilla JavaScript** - Interaktivitas tanpa framework
- **No Dependencies** - Tidak memerlukan build tools atau framework

## 📁 Struktur Folder

```
website-pp/
├── index.html              # Halaman utama
├── tentang-kami.html       # Halaman tentang kami
├── hubungi-kami.html       # Halaman kontak
├── css/
│   └── styles.css          # File styling utama
├── js/
│   └── main.js             # JavaScript untuk interaktivitas
├── images/
│   ├── logo.png            # Logo perusahaan
│   ├── crane-photo.jpg     # Foto crane (placeholder)
│   └── (icon files)        # Icon-icon produk
└── README.md               # File dokumentasi ini
```

## 🎨 Warna & Desain

- **Primary Color**: Gold/Yellow (#F4B223)
- **Secondary Color**: Black (#000000)
- **Background**: Off-white/Cream (#F5F5F0)
- **Accent**: White (#FFFFFF)

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🚀 Cara Menggunakan

### Lokal (Development)

1. Clone atau download repository ini
2. Buka file `index.html` di browser
3. Tidak perlu instalasi atau build process

### Hosting

Website ini bisa di-hosting di:
- **GitHub Pages** (Gratis)
- **Netlify** (Gratis)
- **Vercel** (Gratis)
- **Web Hosting** tradisional

#### Hosting di GitHub Pages:

1. Upload semua file ke GitHub repository
2. Ke Settings > Pages
3. Pilih branch dan folder
4. Website akan live di `https://username.github.io/repository-name`

#### Hosting di Netlify:

1. Drag & drop folder ke Netlify
2. Website langsung live dengan custom domain gratis

## ⚙️ Kustomisasi

### Mengubah Nomor WhatsApp

Edit semua link WhatsApp di file HTML:
```html
<!-- Ganti 6281234567890 dengan nomor WhatsApp Anda -->
<a href="https://wa.me/6281234567890?text=...">
```

### Mengubah Logo

1. Siapkan logo dengan format PNG (background transparan)
2. Simpan di folder `images/` dengan nama `logo.png`
3. Ukuran rekomendasi: lebar 200-300px, tinggi proporsional

### Mengubah Foto Crane

1. Siapkan foto crane berkualitas tinggi
2. Simpan di folder `images/` dengan nama `crane-photo.jpg`
3. Ukuran rekomendasi: 800x600px atau lebih besar

### Mengubah Warna

Edit di `css/styles.css` bagian `:root`:
```css
:root {
    --primary-color: #F4B223;    /* Warna utama */
    --secondary-color: #000000;  /* Warna kedua */
    --background-color: #F5F5F0; /* Warna background */
}
```

## 📞 Informasi Kontak

Untuk update nomor telepon, email, atau informasi kontak lainnya:
1. Edit file `index.html`, `tentang-kami.html`, dan `hubungi-kami.html`
2. Cari bagian footer dan contact section
3. Update informasi sesuai kebutuhan

## 🔧 Troubleshooting

### Logo tidak muncul
- Pastikan file logo ada di folder `images/logo.png`
- Periksa nama file (case sensitive di Linux/Mac)

### WhatsApp tidak terbuka
- Pastikan format nomor benar: `https://wa.me/62XXXXXXXXXX`
- Nomor harus dimulai dengan kode negara (62 untuk Indonesia)
- Hilangkan angka 0 di depan (contoh: 0812 → 62812)

### Website tidak responsif
- Pastikan tidak ada perubahan di viewport meta tag
- Clear cache browser (Ctrl+F5 atau Cmd+Shift+R)

## 📄 License

Website ini dibuat untuk keperluan komersial Sewa Crane Peps.

## 👨‍💻 Support

Untuk bantuan teknis atau pertanyaan, hubungi developer atau tim IT Anda.

---

**Sewa Crane Peps** - Solusi Sewa Crane Profesional untuk Proyek Anda



