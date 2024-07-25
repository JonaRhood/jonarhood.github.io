// PROFESSIONAL EXPERIENCE APP
// Assignations
const bannerExp = ['bannerexp1', 'bannerexp2', 'bannerexp3', 'bannerexp4', 'bannerexp5'];
const banners = [];
bannerExp.forEach(function(element) {
    banners.push(document.getElementById(element));
});

// clicked Banner
let clickedBanner = banners[0];


// default color
const defaultColor = () => {
    clickedBanner.style.backgroundColor = '#740bdb';
}

// unclicked color
const unclickedColor = () => {
    clickedBanner.style.backgroundColor = '#430e79';
}

// change clicked Banner
const addToClickedBanner = banner => {
    //mouse track
    let selectedBanner = banner.target.className;
    console.log(selectedBanner);

    //quit color from old banner
    unclickedColor(clickedBanner);

    //change clickedBanner 
    let clickedBanner = 

    //add color to new banner
    console.log(clickedBanner);
    defaultColor(clickedBanner);
};

// color change
const changeColor = event => {
    event.target.style.backgroundColor = '#740bdb';
};

// event handler properties
let eventAssigment = banner => {
        banner.addEventListener('mousedown', addToClickedBanner);
};



// loop
defaultColor(clickedBanner);

banners.forEach(eventAssigment);


