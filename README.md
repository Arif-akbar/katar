# 🌿 Website Karang Taruna FREEDOM Manisharjo

Website resmi organisasi Karang Taruna FREEDOM Desa Manisharjo, Bendosari, Sukoharjo. Platform digital untuk menampilkan informasi, kegiatan, dan dokumentasi organisasi pemuda desa.

## 🎯 Fitur Utama

### 1. **Announcement Bar**
- Banner pengumuman di bagian atas halaman
- Dapat ditutup oleh pengguna
- Animasi smooth saat ditutup

### 2. **Navigasi Responsif**
- Navbar sticky dengan efek shrink saat scroll
- Active section detection otomatis
- Mobile menu dengan animasi burger
- Bottom navigation khusus mobile (5 menu utama)
- Back to top button yang muncul saat scroll

### 3. **Hero Section**
- Desain modern dengan gradient background
- Statistik organisasi (Anggota, Program, Pengabdian)
- Gambar hero dengan animasi floating
- Scroll indicator

### 4. **Visi & Misi**
- Card design dengan hover effect
- Scroll reveal animation
- Numbered list untuk misi

### 5. **Program Unggulan**
- 3 program utama dengan gambar
- Tag kategori (Sosial, Olahraga, Kreativitas)
- Modal popup untuk detail lengkap
- Hover effect yang smooth

### 6. **Struktur Pengurus**
- Grid layout responsif
- Avatar dengan role badge berwarna
- Toggle "Lihat Semua" untuk mobile
- Animasi fade-in saat expand

### 7. **Galeri Dokumentasi**
- Sistem folder seperti Google Drive
- Breadcrumb navigation
- Toggle view: Grid / List
- Show more/less functionality
- Preview gambar fullscreen
- Organized by year and event

### 8. **Lokasi & Informasi**
- Google Maps embed
- Informasi alamat dan jam sekretariat
- Link ke Maps dan artikel sejarah desa

### 9. **Footer**
- Brand identity
- Quick links
- Copyright info

## 🛠️ Teknologi

- **HTML5** - Struktur semantik
- **CSS3** - Custom properties, Grid, Flexbox, Animations
- **Vanilla JavaScript** - No framework/library
- **Google Fonts** - Plus Jakarta Sans & Fraunces
- **Intersection Observer API** - Scroll reveal animations

## 📁 Struktur File

```
karang-taruna/
├── index.html          # Halaman utama
├── style.css          # Styling lengkap
├── script.js          # Interaktivitas
├── README.md          # Dokumentasi
└── img/
    ├── hero.jpeg      # Gambar hero
    ├── pengurus/      # Foto pengurus (6 orang)
    ├── program/       # Gambar program (3 kegiatan)
    └── gallery/
        ├── 2025/      # Dokumentasi 2025
        │   ├── futsal/
        │   ├── gerak-jalan/
        │   └── pentas-seni/
        └── 2026/      # Dokumentasi 2026
            └── kerja-bakti-masjid/
                └── momen-ramadhan/
```

## 🚀 Cara Menggunakan

### 1. **Setup Lokal**
```bash
# Clone atau download project
# Buka index.html di browser
# Tidak perlu instalasi dependencies
```

### 2. **Edit Konten**

#### Mengubah Data Kegiatan
Edit di `script.js`:
```javascript
const kegiatanDetail = {
    "kerja_bakti": {
        title: "🧹 Kerja Bakti",
        text: "Deskripsi lengkap..."
    }
};
```

#### Menambah Foto Galeri
1. Upload foto ke folder `img/gallery/[tahun]/[nama-kegiatan]/`
2. Update `driveData` di `script.js`:
```javascript
const driveData = {
    "Kegiatan 2026": {
        "Nama Event Baru": [
            "img/gallery/2026/event-baru/1.jpeg",
            "img/gallery/2026/event-baru/2.jpeg"
        ]
    }
};
```

#### Mengubah Pengurus
Edit HTML di section `#pengurus`:
```html
<div class="profile-card reveal">
    <div class="profile-avatar">
        <img src="img/pengurus/nama.jpeg" alt="Nama - Jabatan">
    </div>
    <div class="profile-info">
        <h3>Nama Lengkap</h3>
        <span class="role-badge role-ketua">Jabatan</span>
    </div>
</div>
```

#### Mengubah Warna Tema
Edit CSS variables di `style.css`:
```css
:root {
    --primary: #2d5a27;    /* Hijau utama */
    --accent: #c8963e;     /* Emas aksen */
    --earth: #f5f1e8;      /* Background earth tone */
}
```

### 3. **Kustomisasi**

#### Mengubah Limit Galeri
Di `script.js`, ubah:
```javascript
const GALLERY_LIMIT = 3; // Ubah angka sesuai kebutuhan
```

#### Menambah Section Baru
1. Tambah section di HTML
2. Tambah link di navbar
3. Update `sections` query di script.js

## 📱 Responsivitas

Website fully responsive dengan breakpoints:
- **Desktop**: > 968px
- **Tablet**: 768px - 968px  
- **Mobile**: < 768px

Fitur khusus mobile:
- Bottom navigation bar
- Hamburger menu
- Simplified layouts
- Touch-friendly buttons

## ♿ Aksesibilitas

- Semantic HTML5
- ARIA labels dan roles
- Keyboard navigation (ESC untuk close modal)
- Alt text untuk gambar
- Focus states yang jelas
- Color contrast yang baik

## 🎨 Design System

### Warna
- **Primary**: `#2d5a27` (Hijau tua)
- **Accent**: `#c8963e` (Emas)
- **Earth**: `#f5f1e8` (Krem)
- **Text**: `#2c3e2f` (Hijau gelap)

### Typography
- **Heading**: Fraunces (Serif)
- **Body**: Plus Jakarta Sans (Sans-serif)

### Spacing
- Base unit: 8px
- Section padding: 80px (desktop), 60px (mobile)

## 🐛 Troubleshooting

### Gambar tidak muncul
- Pastikan path gambar benar
- Cek nama file (case-sensitive)
- Gunakan placeholder jika gambar hilang

### Modal tidak menutup
- Pastikan JavaScript sudah load
- Cek console untuk error
- Refresh browser

### Galeri kosong
- Cek `driveData` di script.js
- Pastikan path gambar sesuai struktur folder
- Lihat console untuk error

## 📈 Optimasi

### Performance
- Lazy loading untuk gambar (bisa ditambahkan)
- Minify CSS & JS untuk production
- Compress gambar (gunakan TinyPNG)
- Enable browser caching

### SEO
- Tambahkan meta description
- Gunakan Open Graph tags
- Sitemap.xml
- robots.txt

## 🔄 Update Log

### Version 2.0 (Current)
- ✅ Redesign complete dengan earth tone theme
- ✅ Announcement bar system
- ✅ Bottom navigation untuk mobile
- ✅ Scroll reveal animations
- ✅ Gallery view toggle (grid/list)
- ✅ Improved accessibility
- ✅ Better responsive design

### Version 1.0
- Basic website dengan blue theme
- Simple gallery system
- Basic responsive layout

## 📞 Kontak

**Karang Taruna FREEDOM Manisharjo**
- Alamat: Dukuh Manisharjo, Kec. Bendosari, Kab. Sukoharjo
- Sekretariat: Senin-Jumat, 18.00-21.00 WIB

## 📄 License

© 2026 Karang Taruna FREEDOM Manisharjo. All rights reserved.

---

**Dibuat dengan ❤️ oleh pemuda desa untuk kemajuan bersama** 🌿