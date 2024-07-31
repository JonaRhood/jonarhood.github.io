// PROFESSIONAL EXPERIENCE APP
// Assignations
const bannerExp = ['bannerexp1', 'bannerexp2', 'bannerexp3', 'bannerexp4', 'bannerexp5'];
const banners = [];
bannerExp.forEach(function (element) {
    banners.push(document.getElementById(element));
});

// clicked Banner
let clickedBanner = banners[0];
// console.log(clickedBanner)


// default color and "-"
const clickedColor = () => {
    clickedBanner.style.backgroundColor = '#740bdb';
}

const clickedMinus = id => {
    document.getElementById(id).innerHTML = '-';
    document.getElementById(id).style.color = '#00efff';
}

// unclicked color and "-"
const unclickedColor = () => {
    clickedBanner.style.backgroundColor = '#430e79';
}

const unclickedMinus = id => {
    document.getElementById(id).innerHTML = '+';
    document.getElementById(id).style.color = 'white';
}

// change clicked Banner
const addToClickedBanner = banner => {

    //mouse track
    let selectedBanner = [];
    selectedBanner.push(banner.target.className);
    console.log(selectedBanner);

    //quit color from old banner
    unclickedColor(clickedBanner);


    // sort the numbers and apply the changes
    for (let i = 0; i < selectedBanner.length; i++) {
        if (selectedBanner[i].includes('1')) {
            clickedBanner = banners[0];
            clickedColor(clickedBanner);
            clickedMinus('signbanner1');
            unclickedMinus('signbanner2');
            unclickedMinus('signbanner3');
            unclickedMinus('signbanner4');
            unclickedMinus('signbanner5');
            // show smoothly and hide others
            document.getElementById('hiddenbanner1').style.display = 'flex';
            document.getElementById('hiddenbanner2').style.display = 'none';
            document.getElementById('hiddenbanner3').style.display = 'none';
            document.getElementById('hiddenbanner4').style.display = 'none';
            document.getElementById('hiddenbanner5').style.display = 'none';
        } else if (selectedBanner[i].includes('2')) {
            clickedBanner = banners[1];
            clickedColor(clickedBanner);
            clickedMinus('signbanner2');
            unclickedMinus('signbanner1');
            unclickedMinus('signbanner3');
            unclickedMinus('signbanner4');
            unclickedMinus('signbanner5');
            document.getElementById('hiddenbanner2').style.display = 'flex';
            document.getElementById('hiddenbanner1').style.display = 'none';
            document.getElementById('hiddenbanner3').style.display = 'none';
            document.getElementById('hiddenbanner4').style.display = 'none';
            document.getElementById('hiddenbanner5').style.display = 'none';
        } else if (selectedBanner[i].includes('3')) {
            clickedBanner = banners[2];
            clickedColor(clickedBanner);
            clickedMinus('signbanner3');
            unclickedMinus('signbanner1');
            unclickedMinus('signbanner2');
            unclickedMinus('signbanner4');
            unclickedMinus('signbanner5');
            document.getElementById('hiddenbanner3').style.display = 'flex';
            document.getElementById('hiddenbanner1').style.display = 'none';
            document.getElementById('hiddenbanner2').style.display = 'none';
            document.getElementById('hiddenbanner4').style.display = 'none';
            document.getElementById('hiddenbanner5').style.display = 'none';
        } else if (selectedBanner[i].includes('4')) {
            clickedBanner = banners[3];
            clickedColor(clickedBanner);
            clickedMinus('signbanner4');
            unclickedMinus('signbanner1');
            unclickedMinus('signbanner2');
            unclickedMinus('signbanner3');
            unclickedMinus('signbanner5');
            document.getElementById('hiddenbanner4').style.display = 'flex';
            document.getElementById('hiddenbanner1').style.display = 'none';
            document.getElementById('hiddenbanner2').style.display = 'none';
            document.getElementById('hiddenbanner3').style.display = 'none';
            document.getElementById('hiddenbanner5').style.display = 'none';
        } else if (selectedBanner[i].includes('5')) {
            clickedBanner = banners[4];
            clickedColor(clickedBanner);
            clickedMinus('signbanner5');
            unclickedMinus('signbanner1');
            unclickedMinus('signbanner2');
            unclickedMinus('signbanner3');
            unclickedMinus('signbanner4');
            document.getElementById('hiddenbanner5').style.display = 'flex';
            document.getElementById('hiddenbanner1').style.display = 'none';
            document.getElementById('hiddenbanner2').style.display = 'none';
            document.getElementById('hiddenbanner3').style.display = 'none';
            document.getElementById('hiddenbanner4').style.display = 'none';
        }
    };
};



// event handler properties
let checkOpenedBanner = banner => {
    banner.addEventListener('mousedown', bannerHideClicked);
};

let eventAssigment = banner => {
    banner.addEventListener('mousedown', addToClickedBanner);
};


// loop
clickedColor(clickedBanner);
// clickedMinus(clickedBanner);

banners.forEach(eventAssigment);


