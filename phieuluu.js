window.phieuluuModule = (function () {
  const phieuluuMovie = [
    {
      title: "One Piece",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      episodes: "Series: 1100+",
      country: "NXB: 1999",
    },
    {
      title: "Attack on Titan",
      image:
        "https://m.media-amazon.com/images/M/MV5BN2EzYTYyNGUtOTE2ZS00ZTljLWE5M2EtZDViYjhmYzgwNThhXkEyXkFqcGc@._V1_.jpg",
      episodes: "Series: 87",
      country: "NXB: 2013",
    },
    {
      title: "Naruto",
      image:
        "https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      episodes: "Series: 220",
      country: "NXB: 2002",
    },
    {
      title: "Naruto: Shippuden",
      image:
        "https://m.media-amazon.com/images/M/MV5BNTk3MDA1ZjAtNTRhYS00YzNiLTgwOGEtYWRmYTQ3NjA0NTAwXkEyXkFqcGc@._V1_.jpg",
      episodes: "Series: 500",
      country: "NXB: 2007",
    },
    {
      title: "Bleach",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDYyZDEzNzktNDVhNS00MjJiLWJlZjgtY2IzZDY0OTNjMDU3XkEyXkFqcGc@._V1_.jpg",
      episodes: "Series: 366",
      country: "NXB: 2004",
    },
    {
      title: "Fullmetal Alchemist: Brotherhood",
      image:
        "https://m.media-amazon.com/images/M/MV5BNDczZWMyMjEtZDI0ZS00YThjLWE2MjEtNTIxNmVmZDhkNDg5XkEyXkFqcGc@._V1_.jpg",
      episodes: "Series: 64",
      country: "NXB: 2009",
    },
    {
      title: "Demon Slayer: Kimetsu no Yaiba",
      image:
        "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/3/image/c5f0a1eff4c394a251036189ccddaacd/p/o/poster_thanh_guom_diet_quy_10_1_.jpg",
      episodes: "Series: 26",
      country: "NXB: 2019",
    },
    {
      title: "Hunter x Hunter (2011)",
      image:
        "https://m.media-amazon.com/images/M/MV5BNzc4MTA1NTEzNV5BMl5BanBnXkFtZTgwMDE1OTE4MzE@._V1_.jpg",
      episodes: "Series: 148",
      country: "NXB: 2011",
    },
    {
      title: "Black Clover",
      image:
        "https://goldendiscs.ie/cdn/shop/files/MM00314716.jpg?v=1730289912.png",
      episodes: "Series: 170",
      country: "NXB: 2017",
    },

    {
      title: "Fairy Tail",
      image:
        "https://upload.wikimedia.org/wikipedia/en/e/e1/FairyTail-Volume_1_Cover.jpg",
      episodes: "Series: 328",
      country: "NXB: 2009",
    },

    {
      title: "My Hero Academia",
      image:
        "https://m.media-amazon.com/images/M/MV5BNzgxMzI3NzgtYzE2Zi00MzlmLThlNWEtNWVmZWEyZjNkZWYyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      episodes: "Series: 138",
      country: "NXB: 2016",
    },
    {
      title: "Gintama",
      image:
        "https://m.media-amazon.com/images/M/MV5BMmNmMDA5MWEtZWY1Zi00NzQ2LWJjYTEtYmZlYzkxYjRiMGQ3XkEyXkFqcGc@._V1_.jpg",
      episodes: "Series: 367",
      country: "NXB: 2006",
    },

    {
      title: "Samurai Champloo",
      image:
        "https://m.media-amazon.com/images/M/MV5BMjBhZTY4NzMtOGU3OC00ZDllLWE2ZjUtMGFjYTU5OWI0YTQ2XkEyXkFqcGc@._V1_.jpg",
      episodes: "Series: 26",
      country: "NXB: 2004",
    },

    {
      title: "Spirited Away",
      image:
        "https://m.media-amazon.com/images/I/71zqphejhbL._AC_UF1000,1000_QL80_.jpg",
      episodes: "Movie: Full",
      country: "NXB: 2001",
    },
    {
      title: "Princess Mononoke",
      image: "https://m.media-amazon.com/images/I/81jSJRqb9IL.jpg",
      episodes: "Movie: Full",
      country: "NXB: 1997",
    },
    {
      title: "Howl's Moving Castle",
      image:
        "https://i0.wp.com/gkids.com/wp-content/uploads/2025/04/GF25_Posters_6_Howls_A-min.jpg?fit=1000%2C1480&ssl=1.png",
      episodes: "Movie: Full",
      country: "NXB: 2004",
    },
    {
      title: "The Wind Rises",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTU4NDg0MzkzNV5BMl5BanBnXkFtZTgwODA3Mzc1MDE@._V1_FMjpg_UX1000_.jpg",
      episodes: "Movie: Full",
      country: "NXB: 2013",
    },
    {
      title: "Castle in the Sky",
      image:
        "https://m.media-amazon.com/images/I/81bxTPiED1L._AC_UF1000,1000_QL80_.jpg",
      episodes: "Movie: Full",
      country: "NXB: 1986",
    },
    {
      title: "Nausicaä of the Valley of the Wind",
      image:
        "https://m.media-amazon.com/images/S/pv-target-images/5aa43ba7bc6951d73e8df1c4162ed441d9e9f31cddda978ece0f3017489f9517.jpg",
      episodes: "Movie: Full",
      country: "NXB: 1984",
    },
    {
      title: "Porco Rosso",
      image:
        "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p160147_p_v8_ac.jpg",
      episodes: "Movie: Full",
      country: "NXB: 1992",
    },
    {
      title: "Lupin III: The Castle of Cagliostro",
      image:
        "https://m.media-amazon.com/images/I/51Q915AS3CL._AC_UF894,1000_QL80_.jpg",
      episodes: "Movie: Full",
      country: "NXB: 1979",
    },
    {
      title: "Redline",
      image:
        "https://m.media-amazon.com/images/M/MV5BMzMxYWE5ZjMtMGJiMi00YmZjLTg2MGEtMWY1YjBkNWUxNzQ5XkEyXkFqcGc@._V1_.jpg",
      episodes: "Movie: Full",
      country: "NXB: 2009",
    },
    {
      title:
        "https://i.pinimg.com/736x/84/f0/3c/84f03c45eb1b4ffd39aadfe04b2b435a.jpg",
      image: "",
      episodes: "Movie: Full",
      country: "NXB: 2006",
    },
    {
      title: "Steamboy",
      image:
        "https://m.media-amazon.com/images/I/71elCxipedL._AC_UF894,1000_QL80_.jpg",
      episodes: "Movie: Full",
      country: "NXB: 2004",
    },
    {
      title: "Metropolis",
      image:
        "https://api.operanationaldurhin.eu/assets/w800-h800-q80-p1/cc2886ac/metropolis_1.jpg",
      episodes: "Movie: Full",
      country: "NXB: 2001",
    },
    {
      title: "The Boy and the Beast",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDg1ZWJlNTctZDA2MS00ZGM4LWIzNzQtMGFlNDQxZGRmZmU0XkEyXkFqcGc@._V1_.jpg",
      episodes: "Movie: Full",
      country: "NXB: 2015",
    },
    {
      title: "Wolf Children",
      image:
        "https://i0.wp.com/gkids.com/wp-content/uploads/2025/04/WLFCH_KeyArt_Web_Dated_2025-04-14-min.jpg?fit=1000%2C1463&ssl=1.jpg",
      episodes: "Movie: Full",
      country: "NXB: 2012",
    },
    {
      title: "Your Name",
      image:
        "https://japanseye.wordpress.com/wp-content/uploads/2017/09/ho00004717.jpg?w=600.png",
      episodes: "Movie: Full",
      country: "NXB: 2016",
    },
    {
      title: "Weathering with You",
      image:
        "https://image.tmdb.org/t/p/original/s6XFcRb975AMz5HMeNbh7zieG5n.jpg",
      episodes: "Movie: Full",
      country: "NXB: 2019",
    },
    {
      title: "Children Who Chase Lost Voices",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTM4ZGJiZTMtOTU0Mi00MWNhLWI4YzUtNmZmY2IxZjg3NWY0XkEyXkFqcGc@._V1_.jpg",
      episodes: "Movie: Full",
      country: "NXB: 2011",
    },
    {
      title: "The Place Promised in Our Early Days",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTg5ODA4MTY1OV5BMl5BanBnXkFtZTcwODYwMzAzMQ@@._V1_FMjpg_UX1000_.jpg",
      episodes: "Movie: Full",
      country: "NXB: 2004",
    },
    {
      title: "5 Centimeters per Second",
      image:
        "https://m.media-amazon.com/images/M/MV5BZTI5YjI2NmUtZDdlNi00ZWY3LTkzNTEtN2ViMjUyMmJjODZmXkEyXkFqcGc@._V1_.jpg",
      episodes: "Movie: Full",
      country: "NXB: 2007",
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
    const currentItems = phieuluuMovie.slice(start, end);
    console.log("Rendering page with data:", currentItems);

    currentItems.forEach((phieuluuAnime, index) => {
      const card = document.createElement("div");
      card.className = "anime-card";

      card.innerHTML = `
      <img src="${phieuluuAnime.image}" alt="${
        phieuluuAnime.title
      }" style="width:200px; height:250px; object-fit:cover;" />
      <p class="name">${phieuluuAnime.title}</p>
      <div class="card-info">
        <div class="anime-title">${phieuluuAnime.title}</div>
        <div class="anime-episodes">Tập: ${phieuluuAnime.episodes}</div>
        <div class="card-buttons">
          <button class="btn watch" onclick="location.href='${
            phieuluuAnime.watchUrl
          }'">
            <img src="play.png" alt="Xem" class="icon" /> Xem
          </button>
          <button class="btn like" data-index="${start + index}">
            <img src="${
              phieuluuAnime.liked ? "redheart.png" : "heart.png"
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
        phieuluuMovie[index].liked = !phieuluuMovie[index].liked;

        const img = btn.querySelector("img");
        img.src = phieuluuMovie[index].liked ? "redheart.png" : "heart.png";
      };
    });
  }

  function renderPagination() {
    const totalPages = Math.ceil(phieuluuMovie.length / itemsPerPage);
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
      const totalPages = Math.ceil(phieuluuMovie.length / itemsPerPage);
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
      return phieuluuMovie;
    },
  };
})();
