'use strict';


// Collapsble js
// Collapsible Divs js
const collapse = () => {
    const coll = document.getElementsByClassName("collapsible");
    const contentDiv = document.getElementsByClassName("content");
    let i;
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
}
collapse()

const headerLinkHighlight = (string) => {
    // Local vars
    const homeLink = document.querySelector('.home-link');
    const imageLink = document.querySelector('.image-link');
    const audioLink = document.querySelector('.audio-link');
    const videoLink = document.querySelector('.video-link');

    switch (string) {
        case '/':
            homeLink.style.color = 'blue';
            break;
        case '/image/':
            imageLink.style.color = 'blue';
            break;
        case '/audio':
            audioLink.style.color = 'blue';
            break;
        case '/video':
            videoLink.style.color = 'blue';
            break;
    }
}
// Header link Highlight
headerLinkHighlight(document.location.pathname)


