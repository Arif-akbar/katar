// DATA DETAIL KEGIATAN (Untuk Modal)
const kegiatanDetail = {
    "kerja_bakti": {
        title: "Kerja Bakti Lingkungan",
        text: "Bentuk kepedulian generasi muda terhadap kebersihan dan keindahan lingkungan. Kegiatan ini bertujuan untuk menumbuhkan semangat gotong royong dan rasa tanggung jawab sosial."
    },
    "pengajian": {
        title: "Futsal Pemuda Freedom",
        text: "Diselenggarakan sebagai wadah pengembangan minat dan bakat olahraga, sekaligus untuk meningkatkan kebersamaan, sportivitas, dan solidaritas antar pemuda."
    },
    "lomba": {
        title: "Lomba & Event Tahunan",
        text: "Termasuk perayaan 17 Agustus, Pentas Seni Akhir Tahun. Event ini dikelola sepenuhnya oleh panitia dari Karang Taruna sebagai wadah pembelajaran manajemen organisasi dan acara."
    }
};

// DATA GALERI (Simulasi Folder Drive)
const driveData = {
    "Kegiatan 2025": {
        "Futsal": ["img/gallery/2025/futsal/1.jpeg","img/gallery/2025/futsal/2.jpeg","img/gallery/2025/futsal/3.jpeg","img/gallery/2025/futsal/4.jpeg","img/gallery/2025/futsal/5.jpeg"],
        "Gerak Jalan": ["img/gallery/2025/gerak-jalan/1.jpeg", "img/gallery/2025/gerak-jalan/2.jpeg","img/gallery/2025/gerak-jalan/3.jpeg", "img/gallery/2025/gerak-jalan/4.jpeg","img/gallery/2025/gerak-jalan/5.jpeg","img/gallery/2025/gerak-jalan/6.jpeg", "img/gallery/2025/gerak-jalan/7.jpeg","img/gallery/2025/gerak-jalan/8.jpeg","img/gallery/2025/gerak-jalan/9.jpeg"],
        "Pentas Seni": ["img/gallery/2025/pentas-seni/1.jpeg", "img/gallery/2025/pentas-seni/2.jpeg", "img/gallery/2025/pentas-seni/3.jpeg","img/gallery/2025/pentas-seni/4.jpeg","img/gallery/2025/pentas-seni/5.jpeg"]
    },
    "Dokumentasi 2026": {
        "Kerja Bakti Masjid": ["img/gallery/2026/kerja-bakti-masjid/1.jpeg","img/gallery/2026/kerja-bakti-masjid/2.jpeg","img/gallery/2026/kerja-bakti-masjid/3.jpeg","img/gallery/2026/kerja-bakti-masjid/4.jpeg","img/gallery/2026/kerja-bakti-masjid/5.jpeg","img/gallery/2026/kerja-bakti-masjid/6.jpeg"]
    }
};

// ========================
// NAVBAR TOGGLE
// ========================
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    // Animasi ikon burger (opsional)
    const spans = menuToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
        spans.forEach(span => span.style = '');
    }
});

// ========================
// MODAL KEGIATAN SYSTEM
// ========================
const modalKegiatan = document.getElementById('kegiatanModal');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');

function showDetail(key) {
    if (kegiatanDetail[key]) {
        modalTitle.innerText = kegiatanDetail[key].title;
        modalText.innerText = kegiatanDetail[key].text;

        modalKegiatan.style.display = 'flex';
        // Sedikit delay untuk animasi fade-in css
        setTimeout(() => {
            modalKegiatan.classList.add('active');
        }, 10);
    } else {
        console.error("Data kegiatan tidak ditemukan untuk key:", key);
    }
}

function closeModalKegiatan() {
    modalKegiatan.classList.remove('active');
    setTimeout(() => {
        modalKegiatan.style.display = 'none';
    }, 300); // Sesuaikan dengan durasi transition CSS
}

// Tutup modal jika klik area gelap
modalKegiatan.addEventListener('click', (e) => {
    if (e.target === modalKegiatan) closeModalKegiatan();
});


// ========================
// DRIVE / GALLERY SYSTEM
// ========================
// ========================
// DRIVE / GALLERY SYSTEM (FIXED)
// ========================
let currentPath = [];
const container = document.getElementById("driveContent");
const breadcrumb = document.getElementById("breadcrumb");
const btnGaleri = document.getElementById("btnGaleri");

// KONFIGURASI: Batas item sebelum disembunyikan
const GALLERY_LIMIT = 3;

function renderDrive() {
    // 1. Reset Container (Kosongkan isi & Hapus status 'show-all')
    container.innerHTML = "";
    container.classList.remove("show-all"); // PENTING: Reset agar tertutup lagi saat refresh/pindah folder
    if (btnGaleri) btnGaleri.innerText = "Lihat Semua Galeri";

    // 2. Navigasi Data (Traverse)
    let currentData = driveData;
    currentPath.forEach(folder => {
        if (currentData[folder]) currentData = currentData[folder];
    });

    // 3. Render Breadcrumb
    let breadHtml = `<span onclick="goRoot()">📁 Galeri Utama</span>`;
    currentPath.forEach((folder, index) => {
        breadHtml += `  /  <span onclick="goPath(${index})">${folder}</span>`;
    });
    breadcrumb.innerHTML = breadHtml;

    // 4. Siapkan Data
    const keys = Object.keys(currentData);
    const isArray = Array.isArray(currentData);
    const totalItems = isArray ? currentData.length : keys.length;

    // Fungsi Helper Render Item
    const createItem = (contentHtml, index, onClickFunc) => {
        const div = document.createElement("div");

        // LOGIKA KUNCI: 
        // Jika index (0,1,2..) lebih besar atau sama dengan 3, beri kelas 'hidden-item'
        const extraClass = index >= GALLERY_LIMIT ? "drive-item hidden-item" : "drive-item";

        div.className = extraClass;
        div.innerHTML = contentHtml;
        div.onclick = onClickFunc;
        container.appendChild(div);
    };

    // 5. Loop & Render
    if (isArray) {
        // Render Foto
        currentData.forEach((imgSrc, i) => {
            createItem(
                `<img src="${imgSrc}" class="file-thumb" onerror="this.src='https://via.placeholder.com/150'">
                 <div class="item-name">Foto ${i + 1}</div>`,
                i,
                () => openImgModal(imgSrc)
            );
        });
    } else {
        // Render Folder
        keys.forEach((key, i) => {
            createItem(
                `<span class="folder-icon">📂</span>
                 <div class="item-name">${key}</div>`,
                i,
                () => {
                    currentPath.push(key);
                    renderDrive();
                }
            );
        });
    }

    // 6. LOGIKA TOMBOL (Show/Hide Button)
    if (btnGaleri) {
        if (totalItems > GALLERY_LIMIT) {
            // Jika item > 3, Tampilkan tombol
            btnGaleri.style.display = 'inline-flex';
        } else {
            // Jika item <= 3, Sembunyikan tombol
            btnGaleri.style.display = 'none';
        }
    }
}

// ========================
// EVENT LISTENER TOMBOL GALERI
// ========================
// Pasang event listener di luar fungsi renderDrive agar tidak duplikat
if (btnGaleri) {
    btnGaleri.addEventListener('click', () => {
        // Toggle class 'show-all' pada container
        container.classList.toggle('show-all');

        // Ubah Teks Tombol
        if (container.classList.contains('show-all')) {
            btnGaleri.innerText = "Sembunyikan";
        } else {
            btnGaleri.innerText = "Lihat Semua Galeri";
        }
    });
}

// Navigasi Root & Path
function goRoot() {
    currentPath = [];
    renderDrive();
}

function goPath(index) {
    currentPath = currentPath.slice(0, index + 1);
    renderDrive();
}

// Jalankan saat load
window.addEventListener('DOMContentLoaded', renderDrive);

// ========================
// PENGURUS MOBILE TOGGLE
// ========================
const btnPengurus = document.getElementById("btnPengurus");
const pengurusGrid = document.querySelector(".pengurus-grid");

if (btnPengurus) {
    btnPengurus.addEventListener("click", () => {
        pengurusGrid.classList.toggle("show-all");
        btnPengurus.innerText = pengurusGrid.classList.contains("show-all")
            ? "Sembunyikan Sebagian"
            : "Lihat Semua Pengurus";
    });
}

// ========================
// IMAGE PREVIEW MODAL
// ========================
const imgModal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");

function openImgModal(src) {
    modalImg.src = src;
    imgModal.style.display = "flex";
    setTimeout(() => imgModal.classList.add("active"), 10);
}

function closeImgModal() {
    imgModal.classList.remove("active");
    setTimeout(() => imgModal.style.display = "none", 300);
}

imgModal.addEventListener("click", (e) => {
    if (e.target === imgModal) closeImgModal();
});

// INITIAL RUN
window.addEventListener('DOMContentLoaded', renderDrive);

