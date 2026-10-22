# links

Halaman kumpulan tautan Google Drive milik Kurniawan Hafiz, bergaya Linktree. Bisa dibuka di **[links.kurniawanhafiz.web.id](https://links.kurniawanhafiz.web.id)**.

Situs ini murni statis (HTML, CSS, dan sedikit JavaScript), jadi tidak butuh server, database, maupun proses build.

## Fitur

- Tampilan satu halaman ala Linktree: foto profil, nama, username, bio, dan daftar tombol tautan.
- Mode gelap dan terang dengan tombol pengalih tema.
- Tombol globe di pojok kiri atas menuju website utama ([kurniawanhafiz.web.id](https://kurniawanhafiz.web.id)).
- Responsif, nyaman dibuka dari HP.
- Halaman `404.html` khusus untuk alamat yang tidak ditemukan.

## Struktur Repo

```
links/
├── index.html          # halaman utama (profil + daftar tautan)
├── 404.html            # halaman error 404
├── favicon2.ico        # ikon tab browser
└── assets/
    ├── bootstrap/      # Bootstrap, JS bundle, dan Bootstrap Icons (lokal)
    ├── css/
    │   └── linktree.css    # gaya khusus halaman linktree
    ├── js/
    │   └── theme.js        # logika mode gelap/terang
    └── img/
        ├── logo2.jpg       # foto profil
        └── google-drive.png    # ikon pada tiap tombol tautan
```

## Teknologi

- HTML5
- [Bootstrap](https://getbootstrap.com) dan [Bootstrap Icons](https://icons.getbootstrap.com), disimpan lokal di `assets/bootstrap/`
- CSS kustom (`assets/css/linktree.css`)
- JavaScript vanilla untuk pengalih tema (`assets/js/theme.js`)

## Hubungan dengan Repo `redirect-link`

Tombol di halaman ini tidak menautkan langsung ke Google Drive. Setiap tombol mengarah ke tautan pendek di `go.kurniawanhafiz.web.id/<slug>`, yang kemudian diteruskan ke Google Drive oleh repo [redirect-link](https://github.com/kurniawanhafiz/redirect-link).

Dengan begitu, URL Drive cukup diganti di satu tempat (`_redirects` di repo `redirect-link`) tanpa mengubah halaman ini.

```
links.kurniawanhafiz.web.id  →  go.kurniawanhafiz.web.id/<slug>  →  Google Drive
        (repo links)                  (repo redirect-link)
```

## Menambah Tautan Baru

1. Daftarkan slug baru di `_redirects` pada repo [redirect-link](https://github.com/kurniawanhafiz/redirect-link).
2. Di `index.html`, tambahkan blok berikut di dalam `<div class="linktree-links mt-4">`:

```html
<a href="https://go.kurniawanhafiz.web.id/SLUG" class="linktree-card" target="_blank" rel="noopener noreferrer">
  <img src="./assets/img/google-drive.png" alt="Drive" class="linktree-icon" style="width: 25px; height: 25px; object-fit: contain;">
  <span class="linktree-text">Nama Tombol</span>
</a>
```

3. Ganti `SLUG` dan `Nama Tombol`, lalu commit ke branch `main`.

## Mengubah Profil

Edit bagian `linktree-profile` di `index.html`:

| Yang diubah | Lokasi |
| --- | --- |
| Foto profil | ganti file `assets/img/logo2.jpg` (atau ubah atribut `src`) |
| Nama | elemen `.linktree-name` |
| Username | elemen `.linktree-username` |
| Bio | elemen `.linktree-bio` |
| Link globe | atribut `href` pada tombol globe di bagian atas |

## Menjalankan Lokal

Tidak ada dependensi yang perlu dipasang. Cukup buka `index.html` di browser, atau jalankan server statis:

```bash
npx serve .
```

lalu buka alamat yang ditampilkan (biasanya `http://localhost:3000`).

## Deploy

Karena situs ini statis, repo bisa langsung dihosting di layanan seperti GitHub Pages, Cloudflare Pages, atau Netlify.

| Opsi | Nilai |
| --- | --- |
| Build command | *(kosongkan)* |
| Output directory | `/` (root repo) |
| Branch produksi | `main` |

Setelah itu arahkan custom domain `links.kurniawanhafiz.web.id` ke proyek hosting tersebut.

## Pemilik

Dibuat oleh [Kurniawan Hafiz](https://kurniawanhafiz.web.id) ([@kurniawanhafiz](https://github.com/kurniawanhafiz)).
