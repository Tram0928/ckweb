window.theloaiModule = (function () {
  const animes = [
    {
      title: "Attack on Titan",
      image:
        "https://m.media-amazon.com/images/M/MV5BZjliODY5MzQtMmViZC00MTZmLWFhMWMtMjMwM2I3OGY1MTRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      episodes: "75",
      country: "Nhật Bản",
    },
    {
      title: "Demon Slayer",
      image:
        "https://upload.wikimedia.org/wikipedia/en/6/6a/Kimetsu_no_Yaiba_Mugen_Jo_Hen_Poster.png",
      episodes: "26",
      country: "Nhật Bản",
    },
    {
      title: "Your Name",
      image:
        "https://i.pinimg.com/736x/6e/06/d6/6e06d6eb9620e00a5d37cb3f68a78d22.jpg",
      episodes: "1",
      country: "Nhật Bản",
      watchUrl: "xemphim1.html",
      liked: false,
    },
    {
      title: "One Piece",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      episodes: "1000+",
      country: "Nhật Bản",
    },
    {
      title: "Naruto",
      image: "naruto.jpg",
      episodes: "220",
      country: "Nhật Bản",
    },
    {
      title: "Bleach",
      image: "bleach.jpg",
      episodes: "366",
      country: "Nhật Bản",
    },
    {
      title: "Jujutsu Kaisen",
      image: "jujutsu.jpg",
      episodes: "24",
      country: "Nhật Bản",
    },
    {
      title: "Conan",
      image: "conan1.png",
      episodes: "1000+",
      country: "Nhật Bản",
    },
    {
      title: "Tokyo Revengers",
      image:
        "https://m.media-amazon.com/images/M/MV5BN2EzYTYyNGUtOTE2ZS00ZTljLWE5M2EtZDViYjhmYzgwNThhXkEyXkFqcGc@._V1_.jpg",
      episodes: "24",
      country: "Nhật Bản",
    },
    {
      title: "Chainsaw Man",
      image: "chainsaw.jpg",
      episodes: "12",
      country: "Nhật Bản",
    },
    {
      title: "Spy x Family",
      image: "spy.jpg",
      episodes: "25",
      country: "Nhật Bản",
    },
    {
      title: "Death Note",
      image: "death.jpg",
      episodes: "37",
      country: "Nhật Bản",
    },
    {
      title: "Fullmetal Alchemist",
      image: "fma.jpg",
      episodes: "64",
      country: "Nhật Bản",
    },
    {
      title: "One Punch Man",
      image: "opm.jpg",
      episodes: "24",
      country: "Nhật Bản",
    },
    {
      title: "One Punch Man",
      image: "opm.jpg",
      episodes: "24",
      country: "Nhật Bản",
    },
    {
      title: "One Punch Man",
      image: "opm.jpg",
      episodes: "24",
      country: "Nhật Bản",
    },
    {
      title: "One Punch Man",
      image: "opm.jpg",
      episodes: "24",
      country: "Nhật Bản",
    },
    {
      title: "One Punch Man",
      image: "opm.jpg",
      episodes: "24",
      country: "Nhật Bản",
    },
    {
      title: "One Punch Man",
      image: "opm.jpg",
      episodes: "24",
      country: "Nhật Bản",
    },
    {
      title: "One Punch Man",
      image: "opm.jpg",
      episodes: "24",
      country: "Nhật Bản",
    },
  ];

  let currentPage = 1;
  const itemsPerPage = 24;
  const visiblePages = 3;
  function renderAnimePage() {
    const container = document.getElementById("anime-container");
    container.innerHTML = "";

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentItems = animes.slice(start, end);

    currentItems.forEach((anime, index) => {
      const card = document.createElement("div");
      card.className = "anime-card";

      card.innerHTML = `
      <img src="${anime.image}" alt="${
        anime.title
      }" style="width:200px; height:250px; object-fit:cover;" />
      <p class="name">${anime.title}</p>
      <div class="card-info">
        <div class="anime-title">${anime.title}</div>
        <div class="anime-episodes">Tập: ${anime.episodes}</div>
        <div class="anime-country">Quốc gia: ${anime.country}</div>
        <div class="anime-desc">${anime.desc || ""}</div>
        <div class="card-buttons">
          <button class="btn watch" onclick="location.href='${anime.watchUrl}'">
            <img src="play.png" alt="Xem" class="icon" /> Xem
          </button>
          <button class="btn like" data-index="${start + index}">
            <img src="${
              anime.liked ? "redheart.png" : "heart.png"
            }" alt="Like" class="icon" />
          </button>
        </div>
      </div>
    `;
      container.appendChild(card);
    });

    renderPagination();
    attachLikeEvents();
  }
  function attachLikeEvents() {
    const likeButtons = document.querySelectorAll(".btn.like");

    likeButtons.forEach((btn) => {
      btn.onclick = function () {
        const index = parseInt(btn.getAttribute("data-index"));
        animes[index].liked = !animes[index].liked;

        const img = btn.querySelector("img");
        img.src = animes[index].liked ? "redheart.png" : "heart.png";
      };
    });
  }

  function renderPagination() {
    const totalPages = Math.ceil(animes.length / itemsPerPage);
    const pageNumbers = document.getElementById("page-numbers");
    const prevArrow = document.getElementById("prev-arrow");
    const nextArrow = document.getElementById("next-arrow");

    pageNumbers.innerHTML = "";

    let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    let endPage = startPage + visiblePages - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - visiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      const btn = document.createElement("button");
      btn.textContent = i;
      btn.className = i === currentPage ? "active" : "";
      btn.onclick = () => {
        currentPage = i;
        renderAnimePage();
      };
      pageNumbers.appendChild(btn);
    }

    prevArrow.style.display = "inline";
    nextArrow.style.display = "inline";

    prevArrow.onclick = () => {
      if (currentPage > 1) {
        currentPage--;
        renderAnimePage();
      }
    };

    nextArrow.onclick = () => {
      const totalPages = Math.ceil(animes.length / itemsPerPage);
      if (currentPage < totalPages) {
        currentPage++;
        renderAnimePage();
      }
    };
  }

  return {
    setCurrentPage: (page) => (currentPage = page),
    renderAnimePage,
    getMovies: function () {
      return animes;
    },
  };
})();
