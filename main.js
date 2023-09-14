document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[data-iframe-url]');

    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default link behavior

            const iframeUrl = link.getAttribute('data-iframe-url');

            // Store the selected iframe URL in localStorage
            localStorage.setItem('selectedIframeUrl', iframeUrl);

            // Navigate to the watch.html page
            window.location.href = 'watch.html';
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const videoContainer = document.querySelector('.video');
    
    // Retrieve the selected iframe URL from localStorage
    const iframeUrl = localStorage.getItem('selectedIframeUrl');
    
    if (iframeUrl) {
        // Load the selected iframe URL into the .video element
        videoContainer.innerHTML = `<iframe src="${iframeUrl}" frameborder="0" allowfullscreen></iframe>`;
        
        // Clear the stored iframe URL from localStorage (optional)
        localStorage.removeItem('selectedIframeUrl');
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
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});