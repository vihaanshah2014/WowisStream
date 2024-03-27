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
    iframe.src = iframeUrl;
    iframe.frameborder = "0";
    iframe.allowfullscreen = true;
    iframe.setAttribute('sandbox', 'allow-scripts');

    iframe.onload = function () {
      loadingIndicator.style.display = 'none';
    };

    // Timeout to hide the loading indicator after 5 seconds (adjust as needed)
    setTimeout(function () {
      loadingIndicator.style.display = 'none';
    }, 5000);

    videoContainer.appendChild(iframe);
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

document.addEventListener('DOMContentLoaded', function () {
  const videoContainer = document.querySelector('.video');
  const overlay = document.querySelector('.overlay');
  const toggleOverlayButton = document.getElementById('toggleOverlay');

  let overlayActive = true;

  toggleOverlayButton.addEventListener('click', () => {
    overlayActive = !overlayActive;

    if (overlayActive) {
      overlay.style.display = 'block';
      overlay.style.zIndex = 3; // Keep overlay above the iframe
      const iframe = videoContainer.querySelector('iframe');
      if (iframe) {
        iframe.style.pointerEvents = 'none'; // Disable pointer events to iframe
      }
      toggleOverlayButton.textContent = 'Remove Ad Shield ☠️';
    } else {
      overlay.style.display = 'none';
      overlay.style.zIndex = 1; // Send overlay behind the iframe
      const iframe = videoContainer.querySelector('iframe');
      if (iframe) {
        iframe.style.pointerEvents = 'auto'; // Enable pointer events to iframe
      }
      toggleOverlayButton.textContent = 'Activate Ad Shield ⚔️';
    }
  });
});