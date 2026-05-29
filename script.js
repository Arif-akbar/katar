// ===========================
// DATA DETAIL KEGIATAN
// ===========================
const kegiatanDetail = {
    "kerja_bakti": {
        title: "Kerja Bakti",
        text: "Kerja Bakti rutin dilaksanakan setiap Minggu pagi bersama seluruh warga desa. Fokus kegiatan meliputi pembersihan saluran irigasi, pengecatan fasilitas umum, dan penanaman pohon di sepanjang jalan desa. Melalui kegiatan ini, rasa kebersamaan dan kepedulian terhadap lingkungan terus dipupuk."
    },
    "pengajian": {
        title: "Futsal Bersama",
        text: "Kompetisi futsal antar RT dan RW di Desa Manisharjo yang diadakan setiap bulan. Selain sebagai sarana olahraga, kegiatan ini menjadi media pemersatu pemuda lintas dusun. Turnamen akhir tahun juga menjadi agenda besar yang dinantikan seluruh warga."
    },
    "lomba": {
        title: "Lomba & Event",
        text: "Rangkaian kegiatan lomba dan event mencakup peringatan HUT RI, festival budaya lokal, serta kompetisi kreativitas pemuda. Karang Taruna FREEDOM secara aktif menjadi panitia dan penggerak utama setiap penyelenggaraan event desa."
    }
};

// ===========================
// DATA GALERI (Simulasi Folder Drive)
// ===========================
const driveData = {
    "Kegiatan 2025": {
        "Futsal": [
            "img/gallery/2025/futsal/1.jpeg",
            "img/gallery/2025/futsal/2.jpeg",
            "img/gallery/2025/futsal/3.jpeg",
            "img/gallery/2025/futsal/4.jpeg",
            "img/gallery/2025/futsal/5.jpeg"
        ],
        "Gerak Jalan": [
            "img/gallery/2025/gerak-jalan/1.jpeg",
            "img/gallery/2025/gerak-jalan/2.jpeg",
            "img/gallery/2025/gerak-jalan/3.jpeg",
            "img/gallery/2025/gerak-jalan/4.jpeg",
            "img/gallery/2025/gerak-jalan/5.jpeg",
            "img/gallery/2025/gerak-jalan/6.jpeg",
            "img/gallery/2025/gerak-jalan/7.jpeg",
            "img/gallery/2025/gerak-jalan/8.jpeg",
            "img/gallery/2025/gerak-jalan/9.jpeg"
        ],
        "Pentas Seni": [
            "img/gallery/2025/pentas-seni/1.jpeg",
            "img/gallery/2025/pentas-seni/2.jpeg",
            "img/gallery/2025/pentas-seni/3.jpeg",
            "img/gallery/2025/pentas-seni/4.jpeg",
            "img/gallery/2025/pentas-seni/5.jpeg"
        ]
    },
    "Dokumentasi 2026": {
        "Kerja Bakti Masjid": [
            "img/gallery/2026/kerja-bakti-masjid/1.jpeg",
            "img/gallery/2026/kerja-bakti-masjid/2.jpeg",
            "img/gallery/2026/kerja-bakti-masjid/3.jpeg",
            "img/gallery/2026/kerja-bakti-masjid/4.jpeg",
            "img/gallery/2026/kerja-bakti-masjid/5.jpeg",
            "img/gallery/2026/kerja-bakti-masjid/6.jpeg"
        ],
        "Momen Ramadhan": [
            "img/gallery/2026/kerja-bakti-masjid/momen-ramadhan/1.jpeg",
            "img/gallery/2026/kerja-bakti-masjid/momen-ramadhan/2.jpeg",
            "img/gallery/2026/kerja-bakti-masjid/momen-ramadhan/3.jpeg",
            "img/gallery/2026/kerja-bakti-masjid/momen-ramadhan/4.jpeg",
            "img/gallery/2026/kerja-bakti-masjid/momen-ramadhan/5.jpeg",
            "img/gallery/2026/kerja-bakti-masjid/momen-ramadhan/6.jpeg",
            "img/gallery/2026/kerja-bakti-masjid/momen-ramadhan/7.jpeg",
            "img/gallery/2026/kerja-bakti-masjid/momen-ramadhan/8.jpeg"
        ]
    }
};

// ===========================
// ANNOUNCEMENT BAR
// ===========================
function closeAnnouncement() {
    const bar = document.getElementById('announcementBar');
    if (!bar) return;
    bar.style.maxHeight = bar.scrollHeight + 'px';
    requestAnimationFrame(() => {
        bar.style.transition = 'max-height 0.35s ease, opacity 0.25s ease';
        bar.style.maxHeight = '0';
        bar.style.opacity = '0';
    });
    setTimeout(() => bar.remove(), 400);
}

// ===========================
// NAVBAR: Scroll Shrink + Active Section
// ===========================
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link[data-section]');
const bnavItems = document.querySelectorAll('.bnav-item[data-section]');
const backToTopBtn = document.getElementById('backToTop');
const themeToggle = document.getElementById('themeToggle');

function applyTheme(theme) {
    const nextTheme = theme === 'light' ? 'light' : 'dark';
    document.documentElement.dataset.theme = nextTheme;

    if (themeToggle) {
        const isLight = nextTheme === 'light';
        themeToggle.setAttribute('aria-pressed', isLight);
        themeToggle.setAttribute('aria-label', isLight ? 'Ganti mode gelap' : 'Ganti mode terang');
    }
}

const savedTheme = localStorage.getItem('siteTheme');
applyTheme(savedTheme || 'dark');

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
        const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('siteTheme', nextTheme);
        applyTheme(nextTheme);
    });
}

function onScroll() {
    // Navbar shrink effect
    if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
    }
    
    // Back to top button visibility
    if (backToTopBtn) {
        backToTopBtn.classList.toggle('visible', window.scrollY > 400);
    }

    // Active navigation detection
    let current = '';
    sections.forEach(sec => {
        const sectionTop = sec.offsetTop;
        if (window.scrollY >= sectionTop - 120) {
            current = sec.id;
        }
    });
    
    // Update nav links
    navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.section === current);
    });
    
    // Update bottom nav items
    bnavItems.forEach(item => {
        item.classList.toggle('active', item.dataset.section === current);
    });
}

window.addEventListener('scroll', onScroll, { passive: true });

// ===========================
// MOBILE MENU TOGGLE
// ===========================
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('active');
        menuToggle.classList.toggle('open', isOpen);
        menuToggle.setAttribute('aria-expanded', isOpen);
        document.body.classList.toggle('menu-open', isOpen);
        
        // Animasi ikon burger
        const spans = menuToggle.querySelectorAll('span');
        if (isOpen) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans.forEach(span => span.style = '');
        }
    });
    
    // Close menu when clicking nav links
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', false);
            document.body.classList.remove('menu-open');
            
            const spans = menuToggle.querySelectorAll('span');
            spans.forEach(span => span.style = '');
        });
    });
}

// ===========================
// SCROLL REVEAL ANIMATION
// ===========================
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ===========================
// MODAL KEGIATAN SYSTEM
// ===========================
const modalKegiatan = document.getElementById('kegiatanModal');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');

function showDetail(key) {
    if (!modalKegiatan || !modalTitle || !modalText) return;

    if (!kegiatanDetail[key]) {
        console.error("Data kegiatan tidak ditemukan untuk key:", key);
        return;
    }
    
    modalTitle.textContent = kegiatanDetail[key].title;
    modalText.textContent = kegiatanDetail[key].text;
    
    modalKegiatan.style.display = 'flex';
    requestAnimationFrame(() => {
        modalKegiatan.classList.add('active');
    });
    document.body.style.overflow = 'hidden';
}

function closeModalKegiatan() {
    if (!modalKegiatan) return;

    modalKegiatan.classList.remove('active');
    setTimeout(() => {
        modalKegiatan.style.display = 'none';
    }, 300);
    document.body.style.overflow = '';
}

// Tutup modal jika klik area gelap
if (modalKegiatan) {
    modalKegiatan.addEventListener('click', (e) => {
        if (e.target === modalKegiatan) closeModalKegiatan();
    });
}

// ===========================
// PENGURUS TOGGLE
// ===========================
let pengurusExpanded = false;

function togglePengurus() {
    pengurusExpanded = !pengurusExpanded;
    const grid = document.getElementById('pengurusGrid');
    if (!grid) return;

    const extras = grid.querySelectorAll('.pengurus-extra');
    const btnText = document.getElementById('btnPengurusText');
    const btnIcon = document.getElementById('btnPengurusIcon');
    
    extras.forEach(el => el.classList.toggle('visible', pengurusExpanded));
    
    if (btnText) {
        btnText.textContent = pengurusExpanded ? 'Sembunyikan' : 'Lihat Semua Pengurus';
    }
    
    if (btnIcon) {
        btnIcon.textContent = pengurusExpanded ? '^' : 'v';
    }
}

// ===========================
// GALERI VIEW TOGGLE (Grid/List)
// ===========================
function setGaleriView(mode) {
    const grid = document.getElementById('driveContent');
    const btnGrid = document.getElementById('btnGrid');
    const btnList = document.getElementById('btnList');
    
    if (grid) {
        grid.classList.toggle('list-view', mode === 'list');
    }
    
    if (btnGrid) {
        btnGrid.classList.toggle('active', mode === 'grid');
        btnGrid.setAttribute('aria-pressed', mode === 'grid');
    }
    
    if (btnList) {
        btnList.classList.toggle('active', mode === 'list');
        btnList.setAttribute('aria-pressed', mode === 'list');
    }
}

// ===========================
// GALERI TOGGLE (Show More/Less)
// ===========================
function toggleGaleri() {
    const grid = document.getElementById('driveContent');
    if (!grid) return;

    const btnText = document.getElementById('btnGaleriText');
    const expanded = grid.classList.toggle('show-all');
    
    if (btnText) {
        btnText.textContent = expanded ? 'Sembunyikan' : 'Lihat Lebih Banyak';
    }
}

// ===========================
// DRIVE / GALLERY SYSTEM
// ===========================
let currentPath = [];
const container = document.getElementById("driveContent");
const breadcrumb = document.getElementById("breadcrumb");
const btnGaleri = document.getElementById("btnGaleri");

// KONFIGURASI: Batas item sebelum disembunyikan
const GALLERY_LIMIT = 3;

function renderDrive() {
    if (!container) return;
    
    // 1. Reset Container
    container.innerHTML = "";
    container.classList.remove("show-all");
    
    const btnText = document.getElementById('btnGaleriText');
    if (btnText) btnText.textContent = "Lihat Lebih Banyak";

    // 2. Navigasi Data (Traverse)
    let currentData = driveData;
    currentPath.forEach(folder => {
        if (currentData[folder]) currentData = currentData[folder];
    });

    // 3. Render Breadcrumb
    if (breadcrumb) {
        let breadHtml = `<span onclick="goRoot()" style="cursor:pointer;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline-block;vertical-align:middle;margin-right:4px;">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            Galeri Utama
        </span>`;
        currentPath.forEach((folder, index) => {
            breadHtml += `  /  <span onclick="goPath(${index})" style="cursor:pointer;">${folder}</span>`;
        });
        breadcrumb.innerHTML = breadHtml;
    }

    // 4. Siapkan Data
    const keys = Object.keys(currentData);
    const isArray = Array.isArray(currentData);
    const totalItems = isArray ? currentData.length : keys.length;

    // Fungsi Helper Render Item
    const createItem = (contentHtml, index, onClickFunc) => {
        const div = document.createElement("div");
        const extraClass = index >= GALLERY_LIMIT ? "drive-item hidden-item" : "drive-item";
        div.className = extraClass;
        div.innerHTML = contentHtml;
        div.onclick = onClickFunc;
        div.setAttribute('role', 'listitem');
        container.appendChild(div);
    };

    // 5. Loop & Render
    if (isArray) {
        // Render Foto
        currentData.forEach((imgSrc, i) => {
            createItem(
                `<img src="${imgSrc}" class="file-thumb" alt="Foto ${i + 1}" loading="lazy" onerror="this.src='https://via.placeholder.com/150/111111/ffd700?text=Foto'">
                 <div class="item-name">Foto ${i + 1}</div>`,
                i,
                () => openImgModal(imgSrc)
            );
        });
    } else {
        // Render Folder
        keys.forEach((key, i) => {
            createItem(
                `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="folder-icon" style="margin:0 auto 8px;">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
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
            btnGaleri.style.display = 'inline-flex';
        } else {
            btnGaleri.style.display = 'none';
        }
    }
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

// ===========================
// IMAGE PREVIEW MODAL
// ===========================
const imgModal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");

function openImgModal(src) {
    if (!imgModal || !modalImg) return;
    
    modalImg.src = src;
    imgModal.style.display = "flex";
    requestAnimationFrame(() => {
        imgModal.classList.add("active");
    });
    document.body.style.overflow = 'hidden';
}

function closeImgModal() {
    if (!imgModal) return;
    
    imgModal.classList.remove("active");
    setTimeout(() => {
        imgModal.style.display = "none";
    }, 300);
    document.body.style.overflow = '';
}

if (imgModal) {
    imgModal.addEventListener("click", (e) => {
        if (e.target === imgModal || e.target.classList.contains('close-img-modal')) {
            closeImgModal();
        }
    });
}

// ===========================
// KEYBOARD SHORTCUTS
// ===========================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModalKegiatan();
        closeImgModal();
    }
});

// ===========================
// INITIAL RUN
// ===========================
window.addEventListener('DOMContentLoaded', () => {
    renderDrive();
    onScroll(); // Set initial state
});
