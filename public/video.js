enterView({
    selector: 'section',
    enter: function (el) {
        el.classList.add('entered');
    }
})

var frameNumber = 0, // start video at frame 0
    // lower numbers = faster playback
    playbackConst = 400,
    // get page height from video duration
    setHeight = document.getElementById("set-height"),
    // select video element         
    vid = document.getElementById('v0');
// var vid = $('#v0')[0]; // jquery option

// dynamically set the page height according to video length
vid.addEventListener('loadedmetadata', function () {
    setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
});


// Use requestAnimationFrame for smooth playback
function scrollPlay() {
    var frameNumber = window.pageYOffset / playbackConst;
    vid.currentTime = frameNumber;
    window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);

// ------------------------------------------------------------------------------
// Text Show
const textsToShowHide = [
    { element: document.querySelector('.show1'), showAt: 15, hideAt: 25 },
    { element: document.querySelector('.show2'), showAt: 27, hideAt: 40 },
    { element: document.querySelector('.show3'), showAt: 42, hideAt:55 },
    { element: document.querySelector('.show4'), showAt: 56, hideAt: 70 },
    { element: document.querySelector('.show5'), showAt: 71, hideAt: 85 },
    { element: document.querySelector('.show6'), showAt: 86, hideAt: 99 },
    { element: document.querySelector('.show7'), showAt: 100, hideAt: 120 },
];

const handleScroll = () => {
    const scrollPosition = window.scrollY || window.pageYOffset;
    const videoDuration = Math.floor(vid.duration);
    const windowHeight = videoDuration * playbackConst;
    
    // Set the height of the element with id "set-height" to the calculated windowHeight
    setHeight.style.height = windowHeight + "px";

    textsToShowHide.forEach((textInfo) => {
        const { element, showAt, hideAt } = textInfo;
        const showHeight = (showAt / 100) * windowHeight;
        const hideHeight = (hideAt / 100) * windowHeight;

        if (scrollPosition >= showHeight && scrollPosition <= hideHeight) {
            // Element is within the visible range, make it visible
            element.style.opacity = 1;
            element.style.display = 'block'; // or 'inline-block' based on the element type
        } else {
            // Element is outside the visible range, make it invisible and remove from layout
            element.style.opacity = 0;
            element.style.display = 'none';
        }
    });
};

window.addEventListener('scroll', handleScroll);

// Initial call to handleScroll to set initial states
handleScroll();