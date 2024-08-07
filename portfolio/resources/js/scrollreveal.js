'use strict'

const sr = ScrollReveal({
    origin: "top",
    distance: "2rem",
    rotate: {x: 0, y:0, z:5},
    duration: 1200,
    reset: true
})


//Titles
sr.reveal(".divsubtext", {origin:"bottom", rotate:0, distance:"3rem", duration:3000});
sr.reveal(".titlesweb", {origin:"top", rotate:0, distance:"1rem"});

//Down-Logo
sr.reveal(".fa-angles-down", {origin:"bottom", rotate:0, distance:"5rem", duration:2000, delay:2000, scale:0, reset:false});

// Expertise Boxes
sr.reveal('.box-expertise-3', {delay:100});
sr.reveal('.box-expertise-2', {delay:150});
sr.reveal('.box-expertise-1', {delay:200});

sr.reveal('.transparentbckgcoding', {delay:300, rotate:0, origin:"top", scale:0.8});

// Project Boxes
sr.reveal('.project-section', {delay:0, rotate:0, position:"4rem"});
sr.reveal('.box-project-1', {delay:0, rotate:0, position:"4rem", scale:0.9});
sr.reveal('.box-project-2', {delay:50, rotate:0, position:"4rem", scale:0.9});
sr.reveal('.box-project-3', {delay:100, rotate:0, position:"4rem", scale:0.9});
sr.reveal('.box-project-4', {delay:150, rotate:0, position:"4rem", scale:0.9});
sr.reveal('.box-project-5', {delay:200, rotate:0, position:"4rem", scale:0.9});

// Proffesional Experience
sr.reveal('.section-experience', {delay:500, rotate:0, distance:"2rem"});
sr.reveal('.plus-link', {delay:500, rotate:0, origin: "left", scale:0.1, duration:2000});
