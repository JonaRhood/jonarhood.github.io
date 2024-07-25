// PROFESSIONAL EXPERIENCE APP
// Assignations
const bannerExp = ['bannerexp1', 'bannerexp2', 'bannerexp3', 'bannerexp4', 'bannerexp5'];
const banners = [];
bannerExp.forEach(function(element) {
    banners.push(document.getElementById(element));
});

// clicked Banner
let clickedBanner = banners[0];
console.log(banners)
console.log(clickedBanner)


// default color
const clickedColor = () => {
    clickedBanner.style.backgroundColor = '#740bdb';
}

// unclicked color
const unclickedColor = () => {
    clickedBanner.style.backgroundColor = '#430e79';
}

// change clicked Banner
const addToClickedBanner = banner => {
    //mouse track
    let selectedBanner = [];
    selectedBanner.push(banner.target.className);
    console.log(selectedBanner);

    //quit color from old banner
       unclickedColor(clickedBanner);

    // sort the numbers
    for (let i = 0; i < selectedBanner.length; i++) {
       if (selectedBanner[i].includes('1')) {
        clickedBanner = banners[0];
        clickedColor(clickedBanner);
       }  else if (selectedBanner[i].includes('2')) {
        clickedBanner = banners[1];
        clickedColor(clickedBanner);
       }  else if (selectedBanner[i].includes('3')) {
        clickedBanner = banners[2];
        clickedColor(clickedBanner);
       }  else if (selectedBanner[i].includes('4')) {
        clickedBanner = banners[3];
        clickedColor(clickedBanner);
       }  else if (selectedBanner[i].includes('5')) {
        clickedBanner = banners[4];
        clickedColor(clickedBanner);
       }


       
    };

    console.log(selectedBanner);
    console.log(clickedBanner);



 

    // //change clickedBanner 
    // let clickedBanner = 

    // //add color to new banner
    // console.log(clickedBanner);
    // defaultColor(clickedBanner);
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
clickedColor(clickedBanner);

banners.forEach(eventAssigment);


