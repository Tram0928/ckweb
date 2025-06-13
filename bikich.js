window.bikichModule = (function () {
  const bikichMovie = [
    {
      title: "Clannad After Story",
      image:
        "https://lh5.googleusercontent.com/-HRguDNuill0/T6Y85vKYfjI/AAAAAAAABSI/2X1nGb03dx8/s640/%255Banimepaper.net%255Dpicture-standard-anime-clannad-clannad-picture-178835-suemura-preview-c86f0008.png",
      episodes: "Series: 24",
      country: "NXB: 2008",
    },

    {
      title: "Your Lie in April",
      image:
        "https://rukminid2.flixcart.com/image/850/1000/xif0q/poster/0/d/g/medium-vposter1123037-anime-your-lie-in-april-kaori-miyazono-original-imagka7zejbqr5z2.jpeg?q=90&crop=false.jpg",
      episodes: "Series: 22",
      country: "NXB: 2014",
    },
    {
      title: "Anohana The Flower We Saw That Day",
      image:
        "https://upload.wikimedia.org/wikipedia/en/c/c6/AnoHana_DVD_vol_1.jpg",
      episodes: "Series: 11",
      country: "NXB: 2011",
    },

    {
      title: "I Want to Eat Your Pancreas",
      image:
        "https://m.media-amazon.com/images/I/81tHXxCkU1L._AC_UF1000,1000_QL80_.jpg",
      episodes: "Movie: Full",
      country: "NXB: 2018",
    },
    {
      title: "Orange",
      image: "https://animeuknews.net/app/uploads/Orange-anime-2.jpg",
      episodes: "Series: 13",
      country: "NXB: 2016",
    },
    {
      title: "Plastic Memories",
      image: "https://i1.sndcdn.com/artworks-000171727330-2dt1cg-t500x500.jpg",
      episodes: "Series: 13",
      country: "NXB: 2015",
    },
    {
      title: "Violet Evergarden",
      image:
        "https://m.media-amazon.com/images/M/MV5BMWUwNDFiNjQtYjQ0MC00MTcxLWE0MGQtNTdkYTlhZGU2NDFmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      episodes: "Series: 13",
      country: "NXB: 2018",
    },
    {
      title: "To Your Eternity",
      image:
        "https://preview.redd.it/to-your-eternity-anime-3rd-season-announced-this-will-cover-v0-p0fdp2utfana1.jpg?width=640&crop=smart&auto=webp&s=cb19cb99c58a84b24c219c8e82c0d4a930fa31b9",
      episodes: "Series: 40",
      country: "NXB: 2021",
    },
    {
      title: "Josee, the Tiger and the Fish",
      image:
        "https://m.media-amazon.com/images/M/MV5BNzQ4M2MyOWQtN2EyNy00NWMyLThkNzctNDcyZTFhMjE2MjJmXkEyXkFqcGc@._V1_.jpg",
      episodes: "Movie: Full",
      country: "NXB: 2020",
    },
    {
      title: "Maquia When the Promised Flower Blooms",
      image:
        "https://m.media-amazon.com/images/M/MV5BNjNkYWJiNTEtMjkzOS00NTM2LWEzMmYtMzZjMmIwNmEyY2M1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      episodes: "Movie: Full",
      country: "NXB: 2018",
    },
    {
      title: "The Wind Rises",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTU4NDg0MzkzNV5BMl5BanBnXkFtZTgwODA3Mzc1MDE@._V1_FMjpg_UX1000_.jpg",
      episodes: "Movie: Full",
      country: "NXB: 2013",
    },
    {
      title: "Angel Beats!",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTU4NDg0MzkzNV5BMl5BanBnXkFtZTgwODA3Mzc1MDE@._V1_FMjpg_UX1000_.jpg",
      episodes: "Series: 13",
      country: "NXB: 2010",
    },
    {
      title: "Wolf Children",
      image:
        "https://i0.wp.com/gkids.com/wp-content/uploads/2025/04/WLFCH_KeyArt_Web_Dated_2025-04-14-min.jpg?fit=1000%2C1463&ssl=1",
      episodes: "Movie: Full",
      country: "NXB: 2012",
    },
    {
      title: "5 Centimeters per Second",
      image:
        "https://m.media-amazon.com/images/M/MV5BODVmZjhhYTYtYzRiOC00YzFiLThlZjMtZTQxNWY0MTI1MzlmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      episodes: "Movie: Full",
      country: "NXB: 2007",
    },
    {
      title: "Just Because!",
      image:
        "https://m.media-amazon.com/images/I/71fuvWqNTBL._AC_UF894,1000_QL80_.jpg",
      episodes: "Series: 12",
      country: "NXB: 2017",
    },
    {
      title: "Shigatsu wa Kimi no Uso",
      image:
        "data:image/jpeg;base64,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",
      episodes: "Series: 22",
      country: "NXB: 2014",
    },
    {
      title: "Colorful",
      image:
        "https://m.media-amazon.com/images/M/MV5BYTM0NTcyNGMtNjNkMy00OGFkLTkwZjMtNDEyOWI3YmUyZWZkXkEyXkFqcGc@._V1_.jpg",
      episodes: "Movie: Full",
      country: "NXB: 2010",
    },
    {
      title: "Charlotte",
      image:
        "https://upload.wikimedia.org/wikipedia/vi/thumb/3/32/Charlotte_key.jpg/250px-Charlotte_key.jpg",
      episodes: "Series: 13",
      country: "NXB: 2015",
    },
    {
      title: "Erased",
      image:
        "https://m.media-amazon.com/images/M/MV5BZWQ2YmI5NWMtZTY2Mi00MGUxLWFhMmEtYjVjZjMwOTNkOThjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      episodes: "Series: 12",
      country: "NXB: 2016",
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
