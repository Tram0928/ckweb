window.langmanModule = (function () {
  const langmanMovie = [
    {
      title: "Just Because!",
      image:
        "https://m.media-amazon.com/images/I/71fuvWqNTBL._AC_UF894,1000_QL80_.jpg",
      episodes: "Series: 12",
      country: "NXB: 2017",
    },
    {
      title: "Tsuki ga Kirei",
      image: "https://myanimelist.net/images/anime/7/85819.jpg",
      episodes: "Series: 12",
      country: "NXB: 2017",
    },
    {
      title: "My Little Monster",
      image:
        "https://m.media-amazon.com/images/M/MV5BYzg1MTU3MWMtYjJlNi00YzQ2LTg3YTUtMTM1NzY4Y2Y5MDdiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      episodes: "Series: 13",
      country: "NXB: 2012",
    },
    {
      title: "After the Rain",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTM3Y2RjYzAtNDRiNC00OTMzLWIzOGYtMzUyYzhjNzIyM2FmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      episodes: "Series: 12",
      country: "NXB: 2018",
    },
    {
      title: "Nana",
      image:
        "https://m.media-amazon.com/images/M/MV5BYjRmOWJmMDgtYjBjMS00OTg1LWJmZTItZTY2MjJlODgxNmUwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      episodes: "Series: 47",
      country: "NXB: 2006",
    },
    {
      title: "Toradora!",
      image:
        "https://m.media-amazon.com/images/M/MV5BNjEyZmRmMGYtNGY1Zi00MTFiLWE0ZTMtNzUzMWJmMTgzNWE5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      episodes: "Series: 25",
      country: "NXB: 2008",
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
      title: "Honey and Clover",
      image:
        "https://m.media-amazon.com/images/M/MV5BZTc3OTVlZDgtNmVlNS00OGQwLTk1ZDktMjYzZGI3MGVkMzVlXkEyXkFqcGc@._V1_.jpg",
      episodes: "Series: 24",
      country: "NXB: 2005",
    },
    {
      title: "Chobits",
      image:
        "https://m.media-amazon.com/images/M/MV5BNmM4NTAxOTEtODJhNi00NDAxLWE3M2ItODRlZTc1NjU0ZTBjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      episodes: "Series: 26",
      country: "NXB: 2002",
    },
    {
      title: "Nodame Cantabile",
      image:
        "https://product.hstatic.net/200000287623/product/nodame_cantabile_1_manga_bia_1_400eb59146564bbf9b10212b69f0e37a_master.png",
      episodes: "Series: 23",
      country: "NXB: 2007",
    },
    {
      title: "Anohana: The Flower We Saw That Day",
      image:
        "https://m.media-amazon.com/images/M/MV5BNTc1NzEwOTU0MV5BMl5BanBnXkFtZTgwNTMxMzY5MDE@._V1_.jpg",
      episodes: "Series: 11",
      country: "NXB: 2011",
    },
    {
      title: "5 Centimeters per Second",
      image:
        "https://m.media-amazon.com/images/M/MV5BZTI5YjI2NmUtZDdlNi00ZWY3LTkzNTEtN2ViMjUyMmJjODZmXkEyXkFqcGc@._V1_.jpg",
      episodes: "Movie: Full",
      country: "NXB: 2007",
    },
    {
      title: "Your Name",
      image:
        "https://static0.srcdn.com/wordpress/wp-content/uploads/2024/04/your-name-2016.jpg",
      episodes: "Movie: Full",
      country: "NXB: 2016",
    },
    {
      title: "A Silent Voice",
      image:
        "https://m.media-amazon.com/images/M/MV5BYzQ2YTM2NmYtZjEzMS00M2NiLWI3NjQtNjIyMDEzMmQ1ZDkxXkEyXkFqcGc@._V1_.jpg",
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
      title: "The Garden of Words",
      image:
        "https://m.media-amazon.com/images/M/MV5BYjdiMDdlMDItOGM4Ny00YmE4LTk0MTEtMGRhM2Y4OWZkZDZkXkEyXkFqcGc@._V1_.jpg",
      episodes: "Movie: Full",
      country: "NXB: 2013",
    },
    {
      title: "Wolf Children",
      image:
        "https://upload.wikimedia.org/wikipedia/en/9/9c/%C5%8Ckami_Kodomo_no_Ame_to_Yuki_poster.jpg",
      episodes: "Movie: Full",
      country: "NXB: 2012",
    },
    {
      title: "The Tale of the Princess Kaguya",
      image:
        "https://m.media-amazon.com/images/M/MV5BZjQyOWIxNmYtY2U3NS00Mzg0LWE5YWQtZmZhNzFkZGUwYmUwXkEyXkFqcGc@._V1_.jpg",
      episodes: "Movie: Full",
      country: "NXB: 2013",
    },
    {
      title: "Children Who Chase Lost Voices",
      image:
        "https://upload.wikimedia.org/wikipedia/en/2/26/Children_Who_Chase_Lost_Voices.png",
      episodes: "Movie: Full",
      country: "NXB: 2011",
    },
    {
      title: "The Anthem of the Heart",
      image:
        "https://m.media-amazon.com/images/M/MV5BZTRkZGU0ZDUtMzFhYi00YjFiLWI2ZDUtODVjYzg0ZWQ0ZTcwXkEyXkFqcGc@._V1_.jpg",
      episodes: "Movie: Full",
      country: "NXB: 2015",
    },
    {
      title: "Whisper of the Heart",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTkyMDMyMDI1MV5BMl5BanBnXkFtZTcwNzY1ODEzMQ@@._V1_.jpg",
      episodes: "Movie: Full",
      country: "NXB: 1995",
    },
    {
      title: "From Up on Poppy Hill",
      image:
        "https://m.media-amazon.com/images/M/MV5BMWVjMWRhMzYtOGRmMi00ODExLTk2M2YtZDhjNGY5OWQ5NDY4XkEyXkFqcGc@._V1_.jpg",
      episodes: "Movie: Full",
      country: "NXB: 2011",
    },
    {
      title: "The Girl Who Leapt Through Time",
      image:
        "https://m.media-amazon.com/images/M/MV5BNWNjMTVhNDctZjFiNi00MzQwLTgwMDAtM2UxZTBiOTIyMjk4XkEyXkFqcGc@._V1_.jpg",
      episodes: "Movie: Full",
      country: "NXB: 2006",
    },
    {
      title: "Tamako Love Story",
      image:
        "https://m.media-amazon.com/images/M/MV5BNjQ2ZjkxNTctZjI3Yi00MDM1LWI3MWEtMTcxMTU4MzQ5MzhhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      episodes: "Movie: Full",
      country: "NXB: 2014",
    },
    {
      title: "The World is Still Beautiful",
      image:
        "https://m.media-amazon.com/images/M/MV5BNjNjYjQ0ZDItMDljNi00MTAzLWFiZGQtMmY0YjAzNjk0MWU2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      episodes: "Series: 12",
      country: "NXB: 2014",
    },
    {
      title: "Kaguya-sama: Love is War",
      image:
        "https://static0.srcdn.com/wordpress/wp-content/uploads/2024/06/kaguya-sama-love-is-war.jpg",
      episodes: "Series: 12",
      country: "NXB: 2022",
    },

    {
      title: "My Dress-Up Darling",
      image:
        "https://static0.cbrimages.com/wordpress/wp-content/uploads/sharedimages/2024/04/my-dress-up-darling.jpg",
      episodes: "Series: 12",
      country: "NXB: 2022",
    },
    {
      title: "Rent-a-Girlfriend",
      image:
        "https://m.media-amazon.com/images/M/MV5BNThiMDM2MTktNGMwYi00NTY3LWEyMzQtNDg1NDBlYWIwYTU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      episodes: "Series: 24",
      country: "NXB: 2020",
    },
    {
      title: "Horimiya: The Missing Pieces",
      image:
        "https://m.media-amazon.com/images/M/MV5BNGFjM2M0MTYtM2IxMi00MWQ0LWIyNTYtMGE0YzAyMjA1N2ZhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      episodes: "Series: 6",
      country: "NXB: 2021",
    },
    {
      title: "Blue Period",
      image:
        "https://m.media-amazon.com/images/M/MV5BNWQ4NmU0MmEtN2MxYi00MDRkLWExMDctMDQwNjExYjA0NTExXkEyXkFqcGc@._V1_.jpg",
      episodes: "Series: 12",
      country: "NXB: 2021",
    },
    {
      title: "O Maidens in Your Savage Season",
      image:
        "https://m.media-amazon.com/images/M/MV5BODA4YTJjODItOTlkYi00NTQ4LTkwOTUtZTQ3OGNjZDJjYmM4XkEyXkFqcGc@._V1_.jpg",
      episodes: "Series: 12",
      country: "NXB: 2019",
    },
    {
      title: "Tonikawa: Over the Moon for You",
      image:
        "https://images.justwatch.com/poster/243966532/s718/tonikawa-over-the-moon-for-you.jpg",
      episodes: "Series: 12",
      country: "NXB: 2020",
    },
    {
      title: "Given",
      image:
        "https://m.media-amazon.com/images/M/MV5BZDU1NjJlMDAtNmEwZS00ZmNkLWI5MzUtNDU1MzM2YzM1ZTc1XkEyXkFqcGc@._V1_.jpg",
      episodes: "Series: 11",
      country: "NXB: 2019",
    },
    {
      title: "Sing 'Yesterday' for Me",
      image:
        "https://m.media-amazon.com/images/M/MV5BZmRlYWE3YjMtNDIxOC00ZTIxLTgyODUtODVjMzkwMTllNjg2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      episodes: "Series: 12",
      country: "NXB: 2020",
    },
    {
      title: "The Quintessential Quintuplets",
      image:
        "https://m.media-amazon.com/images/M/MV5BZDNmNzljMzEtOTM5Ny00NWU0LThkNTEtMzJlZDhjYjQxOTAxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      episodes: "Series: 12",
      country: "NXB: 2019",
    },
    {
      title: "My Teen Romantic Comedy SNAFU Climax!",
      image:
        "https://s.pacn.ws/1/p/15c/my-teen-romantic-comedy-snafu-climax-game-744319.8.jpg?v=rsmf53&width=800&crop=922,1498",
      episodes: "Series: 12",
      country: "NXB: 2020",
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
    const currentItems = langmanMovie.slice(start, end);
    console.log("Rendering page with data:", currentItems);

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
        anime[index].liked = !anime[index].liked;

        const img = btn.querySelector("img");
        img.src = anime[index].liked ? "redheart.png" : "heart.png";
      };
    });
  }

  function renderPagination() {
    const totalPages = Math.ceil(langmanMovie.length / itemsPerPage);
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
      const totalPages = Math.ceil(langmanMovie.length / itemsPerPage);
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
      return langmanMovie;
    },
  };
})();
