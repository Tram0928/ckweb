window.bikichModule = (function () {
  const bikichMovie = [
    [
      {
        title: "Uzumaki: Spiral into Horror",
        image: "https://placehold.it/400x600.png?text=Uzumaki",
        episodes: "Mini‑series: 4",
        country: "NXB: 2024",
      },
      {
        title: "Dark Gathering",
        image: "https://placehold.it/400x600.png?text=Dark+Gathering",
        episodes: "Series: 12",
        country: "NXB: 2023",
      },
      {
        title: "Chainsaw Man",
        image: "https://placehold.it/400x600.png?text=Chainsaw+Man",
        episodes: "Series: 12",
        country: "NXB: 2022",
      },
      {
        title: "Junji Ito Maniac: Japanese Tales of the Macabre",
        image: "https://placehold.it/400x600.png?text=Junji+Ito+Maniac",
        episodes: "ONA: 12",
        country: "NXB: 2023",
      },
      {
        title: "Dan Da Dan",
        image: "https://placehold.it/400x600.png?text=Dan+Da+Dan",
        episodes: "Series: 12",
        country: "NXB: 2024",
      },
      {
        title: "Dan Da Dan: First Encounter",
        image: "https://placehold.it/400x600.png?text=Dan+Da+Dan+Movie",
        episodes: "Movie: ~75min",
        country: "NXB: 2024",
      },
      {
        title: "Gannibal",
        image: "https://placehold.it/400x600.png?text=Gannibal",
        episodes: "Series S1: 8 + S2 upcoming",
        country: "NXB: 2022–2025",
      },
      {
        title: "Kaiju No. 8",
        image: "https://placehold.it/400x600.png?text=Kaiju+No+8",
        episodes: "Series: 12",
        country: "NXB: 2024",
      },
      {
        title: "Orb: On the Movements of the Earth",
        image: "https://placehold.it/400x600.png?text=Orb+Earth",
        episodes: "Series: 25",
        country: "NXB: 2024",
      },
      {
        title: "Lockdown Zone: Level X",
        image: "https://placehold.it/400x600.png?text=Lockdown+Zone",
        episodes: "Series: 6",
        country: "NXB: 2024",
      },
      {
        title: "The Grimm Variations",
        image: "https://placehold.it/400x600.png?text=Grimm+Variations",
        episodes: "Series: 6",
        country: "NXB: 2024",
      },
      {
        title: "Mysterious Disappearances",
        image:
          "https://placehold.it/400x600.png?text=Mysterious+Disappearances",
        episodes: "Series: 12",
        country: "NXB: 2024",
      },
      {
        title: "Yamishibai: Japanese Ghost Stories (S12–S13)",
        image: "https://placehold.it/400x600.png?text=Yamishibai",
        episodes: "Series: bite‑size",
        country: "NXB: 2023–2024",
      },
      {
        title: "Uzumaki (mini‑series)",
        image: "https://placehold.it/400x600.png?text=Uzumaki+B%26W",
        episodes: "Mini‑series: 4",
        country: "NXB: 2024",
      },
      {
        title: "Mononoke the Movie: Phantom in the Rain",
        image: "https://placehold.it/400x600.png?text=Mononoke+Phantom",
        episodes: "Movie: 89 min",
        country: "NXB: 2024",
      },
      {
        title: "Mononoke the Movie: The Ashes of Rage",
        image: "https://placehold.it/400x600.png?text=Mononoke+Ashes",
        episodes: "Movie: 74 min",
        country: "NXB: 2025",
      },
      {
        title: "Necronomico and the Cosmic Horror Show",
        image: "https://placehold.it/400x600.png?text=Necronomico",
        episodes: "Series upcoming",
        country: "NXB: 2025",
      },
      {
        title: "The Summer Hikaru Died",
        image: "https://placehold.it/400x600.png?text=Summer+Hikaru",
        episodes: "Series upcoming",
        country: "NXB: 2025",
      },
      {
        title: "Shiver Among Shadows",
        image: "https://placehold.it/400x600.png?text=Shiver+Shadows",
        episodes: "Series upcoming",
        country: "NXB: 2025",
      },
      {
        title: "Nyaight of the Living Cat",
        image: "https://placehold.it/400x600.png?text=Living+Cat",
        episodes: "Series upcoming",
        country: "NXB: 2025",
      },
      {
        title: "Another: New Chapter",
        image: "https://placehold.it/400x600.png?text=Another+New+Chapter",
        episodes: "Series upcoming",
        country: "NXB: 2024",
      },
      {
        title: "In/Spectre Season 2",
        image: "https://placehold.it/400x600.png?text=InSpectre+S2",
        episodes: "Series: 12",
        country: "NXB: 2023",
      },
      {
        title: "Heavenly Delusion",
        image: "https://placehold.it/400x600.png?text=Heavenly+Delusion",
        episodes: "Series: 13",
        country: "NXB: 2023",
      },
    ],
  ];

  let currentPage = 1;
  const itemsPerPage = 24;
  const visiblePages = 3;
  function renderAnimePage() {
    const container = document.getElementById("anime-container");
    container.innerHTML = "";

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentItems = bikichMovie.slice(start, end);
    console.log("Rendering page with data:", currentItems);

    currentItems.forEach((bikichAnime, index) => {
      const card = document.createElement("div");
      card.className = "anime-card";

      card.innerHTML = `
      <img src="${bikichAnime.image}" alt="${
        bikichAnime.title
      }" style="width:200px; height:250px; object-fit:cover;" />
      <p class="name">${bikichAnime.title}</p>
      <div class="card-info">
        <div class="anime-title">${bikichAnime.title}</div>
        <div class="anime-episodes">Tập: ${bikichAnime.episodes}</div>
        <div class="anime-country">Quốc gia: ${bikichAnime.country}</div>
        <div class="anime-desc">${bikichAnime.desc || ""}</div>
        <div class="card-buttons">
          <button class="btn watch" onclick="location.href='${
            bikichAnime.watchUrl
          }'">
            <img src="play.png" alt="Xem" class="icon" /> Xem
          </button>
          <button class="btn like" data-index="${start + index}">
            <img src="${
              bikichAnime.liked ? "redheart.png" : "heart.png"
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
        bikichMovie[index].liked = !bikichMovie[index].liked;

        const img = btn.querySelector("img");
        img.src = bikichMovie[index].liked ? "redheart.png" : "heart.png";
      };
    });
  }

  function renderPagination() {
    const totalPages = Math.ceil(bikichMovie.length / itemsPerPage);
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
      const totalPages = Math.ceil(bikichMovie.length / itemsPerPage);
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
      return bikichMovie;
    },
  };
})();
