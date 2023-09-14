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
