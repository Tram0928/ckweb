/*particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 2 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      out_mode: "out",
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
    },
  },
  retina_detect: true,
});
*/
function loadPage(page) {
  fetch(page)
    .then((response) => response.text())
    .then((html) => {
      function loadPage(page) {
        fetch(page)
          .then((res) => {
            if (!res.ok) throw new Error("Không thể tải trang");
            return res.text();
          })
          .then((html) => {
            document.getElementById("content").innerHTML = html;
          })
          .catch((err) => {
            document.getElementById("content").innerHTML =
              "<p style='color: red;'>Lỗi khi tải trang: " +
              err.message +
              "</p>";
          });
      }

      // Tải mặc định TRANG CHỦ khi mở trang
      window.onload = () => {
        loadPage("trangchu.html");
      };
    });
}

window.onload = () => loadPage("trangchu.html"); // load mặc định

window.addEventListener("DOMContentLoaded", () => {
  VANTA.BIRDS({
    el: "#bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    backgroundColor: 0x0, // hoặc xóa dòng này nếu muốn nền trong suốt
  });
});
/*
// Lấy phần tử DOM sau khi DOM đã sẵn sàng
const header = document.getElementById("movie-header");
const desc = document.getElementById("movie-desc");

// Danh sách các phim
const movies = [
  {
    title: "Avengers: Endgame",
    image: "image/dccd.jpg",
    desc: "Phim: Avengers - Hồi kết",
  },
  {
    title: "Interstellar",
    image: "image/dccd.jpg",
    desc: "Phim: Hố đen vũ trụ",
  },
  {
    title: "Inception",
    image: "image/dccd.jpg",
    desc: "Phim: Giấc mơ chồng giấc mơ",
  },
  {
    title: "Dune",
    image: "image/dccd.jpg",
    desc: "Phim: Cuộc chiến cát đỏ",
  },
];

let index = 0;

function changeBackground() {
  const movie = movies[index];
  header.style.backgroundImage = `url('${movie.image}')`;
  desc.textContent = movie.desc;

  index = (index + 1) % movies.length;
}

// Gọi lần đầu và setup interval
changeBackground();
setInterval(changeBackground, 5000);
*/
