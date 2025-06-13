window.haihuocModule = (function () {
  const haihuocMovie = [
    {
      title: "Tokyo Revengers",
      image:
        "https://m.media-amazon.com/images/M/MV5BN2EzYTYyNGUtOTE2ZS00ZTljLWE5M2EtZDViYjhmYzgwNThhXkEyXkFqcGc@._V1_.jpg",
      episodes: "24",
      country: "Nhật Bản",
    },
    {
      title: "Lovely★Complex",
      image:
        "https://m.media-amazon.com/images/M/MV5BNGVhZGExOTktMzU0OC00N2IzLThlZmQtZGIxZWI3ZTUzZThlXkEyXkFqcGc@._V1_.jpg",
      episodes: "Series: 24",
      country: "NXB: 2007",
    },
    {
      title: "Clannad",
      image:
        "https://m.media-amazon.com/images/M/MV5BMWJiNDQzNGEtNTA3Zi00NjM2LWE2NTAtOTU0NzA4ZmJiMjhmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      episodes: "Series: 23",
      country: "NXB: 2007",
    },
    {
      title: "Angel Beats!",
      image:
        "https://upload.wikimedia.org/wikipedia/vi/e/ed/Angel_Beats%21_-1st_beat-_DVD_cover.jpg",
      episodes: "Series: 13",
      country: "NXB: 2010",
    },
    {
      title: "Your Lie in April",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Your_Lie_in_April_Blu-ray_Volume_1_cover.jpg/260px-Your_Lie_in_April_Blu-ray_Volume_1_cover.jpg",
      episodes: "Series: 22",
      country: "NXB: 2014",
    },
    {
      title: "Your Lie in April",
      image:
        "https://miro.medium.com/v2/resize:fit:750/1*0pAJw7Sug8HIdllNEscOUg@2x.jpeg",
      episodes: "Series: 22",
      country: "NXB: 2014",
    },
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
      image:
        "https://m.media-amazon.com/images/M/MV5BNTk3MDA1ZjAtNTRhYS00YzNiLTgwOGEtYWRmYTQ3NjA0NTAwXkEyXkFqcGc@._V1_.jpg",
      episodes: "220",
      country: "Nhật Bản",
    },
    {
      title: "Bleach",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDYyZDEzNzktNDVhNS00MjJiLWJlZjgtY2IzZDY0OTNjMDU3XkEyXkFqcGc@._V1_.jpg",
      episodes: "366",
      country: "Nhật Bản",
    },
    {
      title: "Jujutsu Kaisen",
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202405/1410/f8938970a9fa2a2f990c6944065bb379e3c8a858c2acc9fd.png?w=440.png",
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
      title: "Honey and Clover",
      image:
        "https://m.media-amazon.com/images/M/MV5BZTc3OTVlZDgtNmVlNS00OGQwLTk1ZDktMjYzZGI3MGVkMzVlXkEyXkFqcGc@._V1_.jpg",
      episodes: "Series: 24",
      country: "NXB: 2005",
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
    const currentItems = haihuocMovie.slice(start, end);
    console.log("Rendering page with data:", currentItems);

    currentItems.forEach((haihuocAnime, index) => {
      const card = document.createElement("div");
      card.className = "anime-card";

      card.innerHTML = `
      <img src="${haihuocAnime.image}" alt="${
        haihuocAnime.title
      }" style="width:200px; height:250px; object-fit:cover;" />
      <p class="name">${haihuocAnime.title}</p>
      <div class="card-info">
        <div class="anime-title">${haihuocAnime.title}</div>
        <div class="anime-episodes">Tập: ${haihuocAnime.episodes}</div>
        <div class="anime-country">Quốc gia: ${haihuocAnime.country}</div>
        <div class="anime-desc">${haihuocAnime.desc || ""}</div>
        <div class="card-buttons">
          <button class="btn watch" onclick="location.href='${
            haihuocAnime.watchUrl
          }'">
            <img src="play.png" alt="Xem" class="icon" /> Xem
          </button>
          <button class="btn like" data-index="${start + index}">
            <img src="${
              haihuocAnime.liked ? "redheart.png" : "heart.png"
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
        haihuocAnime[index].liked = !haihuocAnime[index].liked;

        const img = btn.querySelector("img");
        img.src = haihuocAnime[index].liked ? "redheart.png" : "heart.png";
      };
    });
  }

  function renderPagination() {
    const totalPages = Math.ceil(haihuocMovie.length / itemsPerPage);
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
      const totalPages = Math.ceil(haihuocMovie.length / itemsPerPage);
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
      return haihuocMovie;
    },
  };
})();
