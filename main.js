document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('a[data-iframe-url]');
  links.forEach(function (link) {
      link.addEventListener('click', function (event) {
          event.preventDefault();
          const iframeUrl = link.getAttribute('data-iframe-url');
          localStorage.setItem('selectedIframeUrl', iframeUrl);
          window.location.href = 'watch.html';
      });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const videoContainer = document.querySelector('.video');
  const loadingIndicator = document.getElementById('loading-indicator');
  const iframeUrl = localStorage.getItem('selectedIframeUrl');

  if (iframeUrl) {
      loadingIndicator.style.display = 'block';

      const iframe = document.createElement('iframe');
      iframe.frameborder = "0";
      iframe.allowfullscreen = true;

      // Generate a unique identifier for the iframe
      const iframeId = 'unique-iframe-' + Date.now();
      iframe.id = iframeId;

      // Create a unique URL for the iframe with the identifier
      const iframeUrlWithId = `${iframeUrl}?iframe_id=${iframeId}`;
      iframe.src = iframeUrlWithId;

      iframe.onload = function () {
          loadingIndicator.style.display = 'none';
      };

      // Timeout to hide the loading indicator after 5 seconds (adjust as needed)
      setTimeout(function () {
          loadingIndicator.style.display = 'none';
      }, 5000);

      videoContainer.appendChild(iframe);

      // Listen for messages from the iframe
      window.addEventListener('message', function (event) {
          if (event.data === 'adClicked') {
              // If the message indicates an ad was clicked, reload the iframe
              iframe.src = iframeUrlWithId;
          }
      });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const videoContainer = document.querySelector('.video');
  const iframeUrl = localStorage.getItem('selectedIframeUrl');
  if (iframeUrl) {
    videoContainer.innerHTML = `<iframe src="${iframeUrl}" frameborder="0" allowfullscreen></iframe>`;
  }
});

const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
  console.log(Math.floor(window.innerWidth / 270));
});

//TOGGLE
const ball = document.querySelector(".toggle-ball");
if (ball) {
  ball.addEventListener("click", () => {
    const items = document.querySelectorAll(".movie-list-item");
    items.forEach((item) => {
      item.classList.toggle("active");
    });
    ball.classList.toggle("active");
  });
}