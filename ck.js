let vantaEffect = null;
let current = 0;
let intervalId;

function runPageLogic() {
  if (vantaEffect) vantaEffect.destroy();

  vantaEffect = VANTA.BIRDS({
    el: "#bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    backgroundColor: 0x0,
  });

  let current = 0;
  let intervalId;

  const movies = [
    {
      namemovie: "Vùng đất linh hồn",
      desc: "Vốn là một con ma kì lạ không có gương mặt, Vô diện thực sự gây ấn tượng mạnh với khán giả nhờ những hành động tuy nhạt nhẽo nhưng lại vô cùng đáng yêu trong phim. Số lượng người hâm mộ của Vô diện thậm chí còn không hề thua kém hai nhân vật chính là Chihiro và Haku.",
      image:
        "https://media.vov.vn/sites/default/files/styles/large/public/2021-07/spirited_away.jpg",
      watchUrl: "xemphim1.html",
      liked: false,
    },

    {
      namemovie: "Doraemon: Stand by me",
      desc: "Sau 7 năm, “Doraemon: Stand by me” trở lại với phần phim thứ hai, tiếp tục kể câu chuyện về cậu bé Nobita hậu đậu, ham ngủ ham chơi nhưng lại có tấm lòng nhân hậu. Thế nhưng lần này, thế giới của “Doraemon: Stand by me” được mở rộng hơn rất nhiều, bao trùm cả quá khứ, hiện tại và tương lai để kể câu chuyện vẹn tròn và sâu sắc về hành trình trưởng thành của Nobita.",
      image:
        "https://media.vov.vn/sites/default/files/styles/large/public/2021-12/safu1.jpg",
      watchUrl: "xemphim2.html",
      liked: false,
    },
    {
      namemovie: "Your Name",
      desc: "Hai người xa lạ trao đổi thân xác và số phận.",
      image:
        "https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/8295003/your_name_oped.jpg?quality=90&strip=all&crop=0.036284470246741,0,99.927431059507,100.png",
      watchUrl: "xemphim3.html",
      liked: false,
    },
    {
      namemovie: "Cô bé người cá",
      desc: "Ponyo kể về câu chuyện giữa cô bé Brunhilde - con gái của thần biển Fujimoto và cậu bé người thường Sosuke. Trong một lần dạo chơi, Brunhilde bị kẹt vào một lọ thủy tinh và không thể thoát ra được. May thay Sosuke đã nhìn thấy và giải cứu chú cá nhỏ này, sau đó đặt tên cho cô là Ponyo. Sau khi bị vua cha bắt về, Ponyo đã nhờ đến sự trợ giúp của những người em để lên bờ tìm kiếm Sosuke. Nhưng cô bé 5 tuổi lại không hiểu rằng việc mình trở thành người và lên bờ sẽ là mối hiểm họa cho nhân loại, khiến mặt trăng gần với trái đất hơn. Và chỉ khi Ponyo nhận được tình yêu chân thành từ Sosuke thì trái đất mới thoát khỏi mối nguy.",
      image:
        "https://www.intofilm.org/intofilm-production/1058/scaledcropped/3000x1688/resources/1058/ponyo-header-image.jpg",
      watchUrl: "xemphim4.html",
      liked: false,
    },

    {
      namemovie: "Đồi gió hú",
      desc: 'Dưới bầu trời đầy gió và hoài bão của Kaze Tachinu là tình yêu của Jiro và Naoko. Họ gặp trên một chuyến tàu, khi chiếc mũ của Jiro bị gió cuốn đi và Naoko bắt được, câu nói "Gió nổi lên ta phải sống" đã liên kết hai con người với hai cuộc sống khác nhau thành một.',
      image: "https://kenh14cdn.com/2017/photo-6-1509856361958.jpg",
      watchUrl: "xemphim4.html",
      liked: false,
    },
  ];

  function updateLikeIcon() {
    const likeIcon = document.getElementById("like-icon");
    if (!likeIcon) return;

    if (movies[current].liked) {
      likeIcon.src = "redheart.png";
    } else {
      likeIcon.src = "heart.png";
    }
  }

  function updateHeader() {
    const movie = movies[current];
    const header = document.getElementById("movie-header");
    const desc = document.getElementById("movie-desc");
    const namemovie = document.getElementById("movie-title");

    if (header && desc) {
      header.style.backgroundImage = `url(${movie.image})`;
      namemovie.textContent = movie.namemovie;
      desc.textContent = movie.desc;
    }
    updateLikeIcon();
  }

  function nextMovie() {
    current = (current + 1) % movies.length;
    updateHeader();
    resetInterval();
  }

  function prevMovie() {
    current = (current - 1 + movies.length) % movies.length;
    updateHeader();
    resetInterval();
  }

  function resetInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
      current = (current + 1) % movies.length;
      updateHeader();
    }, 3000);
  }

  function watchMovie() {
    const movie = movies[current];
    if (movie.watchUrl) {
      window.location.href = movie.watchUrl;
    }
  }

  function toggleLike() {
    movies[current].liked = !movies[current].liked;
    updateLikeIcon();
  }

  document.getElementById("next-btn")?.addEventListener("click", nextMovie);
  document.getElementById("prev-btn")?.addEventListener("click", prevMovie);
  document.getElementById("watch-btn")?.addEventListener("click", watchMovie);
  document.getElementById("like-btn")?.addEventListener("click", toggleLike);

  updateHeader();
  resetInterval();

  document.querySelectorAll(".anime-card").forEach((card) => {
    const video = card.querySelector("video");
    if (video) {
      card.addEventListener("mouseenter", () => video.play());
      card.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
      });
    }
  });
}

function toggleMenu() {
  const menu = document.getElementById("menu");
  console.log("Toggle menu clicked"); // để test
  menu.classList.toggle("show");
}

function waitForElement(selector, callback) {
  if (document.querySelector(selector)) callback();
  else requestAnimationFrame(() => waitForElement(selector, callback));
}

window.addEventListener("DOMContentLoaded", () => {
  loadPage("trangchu.html");
});

function loadPage(page) {
  fetch(page)
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("content").innerHTML = html;

      waitForElement("#movie-header", runPageLogic);

      waitForElement("#start", () => {
        document.getElementById("start").scrollIntoView({ behavior: "smooth" });
      });

      const jsFiles = [
        "theloai.js",
        "langman.js",
        "phieuluu.js",
        "kinhdi.js",
        "bikich.js",
        "haihuoc.js",
      ];
      document.querySelectorAll("script").forEach((s) => {
        if (jsFiles.includes(s.getAttribute("src"))) {
          s.remove();
        }
      });

      let scriptSrc = "";
      switch (page) {
        case "cartoon.html":
          scriptSrc = "theloai.js";
          break;
        case "langman.html":
          scriptSrc = "langman.js";
          break;
        case "phieuluu.html":
          scriptSrc = "phieuluu.js";
          break;
        case "kinhdi.html":
          scriptSrc = "kinhdi.js";
          break;
        case "bikich.html":
          scriptSrc = "bikich.js";
          break;
        case "haihuoc.html":
          scriptSrc = "haihuoc.js";
          break;
      }

      if (scriptSrc) {
        const script = document.createElement("script");
        script.src = scriptSrc;
        script.onload = () => {
          switch (page) {
            case "phieuluu.html":
              if (window.phieuluuModule) {
                window.phieuluuModule.setCurrentPage(1);
                window.phieuluuModule.renderAnimePage();
              }
              break;
            case "bikich.html":
              if (window.bikichModule) {
                window.bikichModule.setCurrentPage(1);
                window.bikichModule.renderAnimePage();
              }
              break;
            case "kinhdi.html":
              if (window.kinhdiModule) {
                window.kinhdiModule.setCurrentPage(1);
                window.kinhdiModule.renderAnimePage();
              }
              break;
            case "langman.html":
              if (window.langmanModule) {
                window.langmanModule.setCurrentPage(1);
                window.langmanModule.renderAnimePage();
              }
              break;
            case "cartoon.html":
              if (window.theloaiModule) {
                window.theloaiModule.setCurrentPage(1);
                window.theloaiModule.renderAnimePage();
              }
              break;
            case "haihuoc.html":
              if (window.haihuocModule) {
                window.haihuocModule.setCurrentPage(1);
                window.haihuocModule.renderAnimePage();
              }
              break;
          }
        };
        document.body.appendChild(script);
      }
    })
    .catch((err) => {
      console.error("Lỗi khi load trang:", err);
    });
}

function toggleLike(button) {
  const img = button.querySelector("img");
  const isLiked = img.src.includes("redheart.png");

  img.src = isLiked ? "heart.png" : "redheart.png";
}

function loadContact() {
  fetch("trangchu.html")
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("content").innerHTML = html;

      setTimeout(() => {
        const end = document.getElementById("end");
        if (end) {
          end.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    });
}

function waitForElement(selector, callback) {
  const interval = setInterval(() => {
    if (document.querySelector(selector)) {
      clearInterval(interval);
      callback();
    }
  }, 100);
}

function searchAnime(keyword) {
  loadFind("findAnime.html", () => {
    // Sau khi load xong mới chạy
    console.log(window.allMovies);

    const resultsContainer = document.getElementById("searchResultContainer");
    const findedTitle = document.getElementById("finded");

    if (!resultsContainer || !findedTitle) {
      console.error("Không tìm thấy phần tử hiển thị kết quả");
      return;
    }

    resultsContainer.innerHTML = "";

    if (!keyword || keyword.trim() === "") {
      findedTitle.textContent = "Vui lòng nhập từ khóa tìm kiếm.";
      return;
    }

    const key = keyword.trim().toLowerCase();

    const matchedMovies = (window.allMovies || []).filter((movie) =>
      movie.title.toLowerCase().includes(key)
    );

    findedTitle.textContent = `Kết quả tìm kiếm cho từ khóa "${keyword}" (${matchedMovies.length} kết quả):`;

    if (matchedMovies.length === 0) {
      resultsContainer.innerHTML = "<p>Không tìm thấy kết quả nào.</p>";
      return;
    }

    matchedMovies.forEach((movie) => {
      const card = document.createElement("div");
      card.className = "anime-card";

      card.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}" />
        <h2>${movie.title}</h2>
        <p>${movie.episodes}</p>
        <p>${movie.country}</p>
      `;

      resultsContainer.appendChild(card);
    });
  });
}
function loadFind(page, callback) {
  fetch(page)
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("content").innerHTML = html;

      setTimeout(() => {
        // Sau khi HTML được gắn vào #content → các element mới tồn tại
        const button = document.getElementById("findIcon");
        const input = document.getElementById("inputtext");

        if (button && input) {
          button.addEventListener("click", () => {
            gatherAllMoviesFromModules();
            searchAnime(input.value);
          });
        }

        if (typeof callback === "function") callback();
      }, 50); // Delay nhẹ để DOM render xong
    })
    .catch((err) => console.error("Lỗi khi load trang:", err));
}

function gatherAllMoviesFromModules() {
  window.allMovies = [];

  if (
    window.kinhdiModule &&
    typeof window.kinhdiModule.getMovies === "function"
  ) {
    window.allMovies = window.allMovies.concat(window.kinhdiModule.getMovies());
  }
  if (
    window.langmanModule &&
    typeof window.langmanModule.getMovies === "function"
  ) {
    window.allMovies = window.allMovies.concat(
      window.langmanModule.getMovies()
    );
  }
  if (
    window.bikichModule &&
    typeof window.bikichModule.getMovies === "function"
  ) {
    window.allMovies = window.allMovies.concat(window.bikichModule.getMovies());
  }
  if (
    window.phieuluuModule &&
    typeof window.phieuluuModule.getMovies === "function"
  ) {
    window.allMovies = window.allMovies.concat(
      window.phieuluuModule.getMovies()
    );
  }
  if (
    window.theloaiModule &&
    typeof window.theloaiModule.getMovies === "function"
  ) {
    window.allMovies = window.allMovies.concat(
      window.theloaiModule.getMovies()
    );
  }
  if (
    window.haihuocModule &&
    typeof window.haihuocModule.getMovies === "function"
  ) {
    window.allMovies = window.allMovies.concat(
      window.haihuocModule.getMovies()
    );
  }
}
