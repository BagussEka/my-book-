document.addEventListener("DOMContentLoaded", () => {
  // 1. Data Buku Sesuai Permintaan (Menggunakan Gambar Lokal)
  const BUKU = [
    // Fiksi
    { title: "Sisi Tergelap Surga", author: "Brian Krisna", category: "Fiksi", imageSrc: "foto/sisitergelap.jpeg" },
    { title: "This Is Why I Need You", author: "Brian Krisna", category: "Fiksi", imageSrc: "foto/twih.jpg" },
    { title: "Parable", author: "Brian Krisna", category: "Fiksi", imageSrc: "foto/parable.jpg" },
    { title: "23:59", author: "Brian Krisna", category: "Fiksi", imageSrc: "foto/duatiga.jpg" },
    { title: "Kudasai", author: "Brian Krisna", category: "Fiksi", imageSrc: "foto/kudasai.jpg" },
    { title: "Seporsi Mie Ayam Sebelum Mati", author: "Brian Krisna", category: "Fiksi", imageSrc: "foto/mieayam.jpg" },
    { title: "Bandung Menjelang Pagi", author: "Brian Krisna", category: "Fiksi", imageSrc: "foto/bandunng.jpg" },
    { title: "The Match Breaker", author: "Brian Krisna", category: "Fiksi", imageSrc: "foto/THE-MATCHBREAKER.jpg" },
    { title: "The Match Breaker", author: "Brian Krisna", category: "Fiksi", imageSrc: "foto/THE-MATCHBREAKER.jpg" },
    { title: "Galaksi", author: "Poppi Pertiwi", category: "Fiksi", imageSrc: "foto/galaksi.jpg" },
    { title: "Galaksi Kejora", author: "Poppi Pertiwi", category: "Fiksi", imageSrc: "foto/galaksikejora.jpg" },
    { title: "Mariposa 2 Part 1", author: "Luluk HF", category: "Fiksi", imageSrc: "foto/mariposa 2 part 1.jpg" },
    { title: "Mariposa 2 Part 2", author: "Luluk HF", category: "Fiksi", imageSrc: "foto/mariposa 2 part 2.avif" },
    { title: "Mada", author: "Gigrey", category: "Fiksi", imageSrc: "foto/mada.jpg" },
    { title: "Mahajana", author: "Gigrey", category: "Fiksi", imageSrc: "foto/mahajana.jpeg" },
    { title: "Teluk Alaska", author: "Eka Aryani", category: "Fiksi", imageSrc: "foto/telukalaska.jpg" },
    { title: "Malioboro", author: "Skysphire", category: "Fiksi", imageSrc: "foto/malioboro.jpeg" },

    // Non Fiksi
    { title: "The Art Of Stoicism", author: "Adora Kinara", category: "Non Fiksi", imageSrc: "foto/theart.jpeg" },

    // Wishlist
    { title: "Sapiens", author: "Yuval Noah Harari", category: "Wishlist", bgCover: "linear-gradient(145deg, #d97706, #f59e0b)" },
  ];

  const bookListContainer = document.getElementById("bookListContainer");
  const navItems = document.querySelectorAll(".nav-item");

  function tampilkanBuku(kategoriAktif) {
    const bukuSaring = BUKU.filter((b) => b.category === kategoriAktif);

    document.getElementById("summaryCategoryLabel").textContent = "Koleksi " + kategoriAktif;
    document.getElementById("bookCountBadge").textContent = bukuSaring.length + " Buku";
    bookListContainer.innerHTML = "";

    bukuSaring.forEach((b) => {
      // Logika Tampilan Sampul Buku (Gambar vs Gradien)
      let coverHtml = "";

      if (b.imageSrc) {
        // Jika properti imageSrc ada, tampilkan gambar
        coverHtml = `<div class="book-cover" style="background-image: url('${b.imageSrc}'); background-size: cover; background-position: center; border-radius: 8px; width: 60px; height: 80px; flex-shrink: 0; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"></div>`;
      } else {
        // Jika tidak ada gambar, gunakan bgCover dan tentukan ikon default berdasarkan kategori
        let iconCategory = "bi-journal-text";
        if (b.category === "Non Fiksi") iconCategory = "bi-journal-check";
        if (b.category === "Wishlist") iconCategory = "bi-star-fill";

        coverHtml = `<div class="book-cover" style="background: ${b.bgCover}; display: flex; align-items: center; justify-content: center; border-radius: 8px; width: 60px; height: 80px; flex-shrink: 0;"><i class="bi ${iconCategory} text-white fs-4"></i></div>`;
      }

      // Membangun elemen kartu buku
      const card = document.createElement("div");
      card.className = "book-card";
      card.innerHTML = `
                ${coverHtml}
                <div class="book-info" style="flex-grow: 1;">
                    <h4 class="book-title" style="font-size: 1.05rem; font-weight: 700; margin-bottom: 0.1rem; color: #f8fafc;">${b.title}</h4>
                    <div class="book-author" style="font-size: 0.85rem; color: #94a3b8; margin-bottom: 0.4rem;">
                        <i class="bi bi-pencil" style="font-size: 0.75rem;"></i> ${b.author}
                    </div>
                    <span class="category-badge" style="background: rgba(255,255,255,0.08); color: #94a3b8; font-size: 0.65rem; padding: 0.2rem 0.5rem; border-radius: 4px;">
                        <i class="bi bi-tag-fill me-1"></i>${b.category.toUpperCase()}
                    </span>
                </div>
            `;
      bookListContainer.appendChild(card);
    });
  }

  // Logika Klik Navigasi
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      navItems.forEach((nav) => nav.classList.remove("active"));
      this.classList.add("active");
      tampilkanBuku(this.getAttribute("data-tab"));
    });
  });

  // Tampilkan kategori "Fiksi" saat pertama kali dimuat
  tampilkanBuku("Fiksi");
});
