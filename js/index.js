// Your code goes here

// mouseover changes link color

// let navLinks = document.getElementsByClassName('nav-link');


// 1. Visited links change color
const navLinks = document.querySelectorAll(".nav-link");
console.log(navLinks);

// each element in the nodelist has to have an event listener attached to it
navLinks.forEach(function(link){
    link.addEventListener('click', function(){
        link.style.color = "orange";
    })
});

// 2. mouseover event centers h2 and makes them orange

const headers = document.querySelectorAll("h2");
console.log(headers);

headers.forEach(function(header){
    header.addEventListener('mouseover', function(){
        header.style.marginLeft = "20%";
        header.style.color = "orange";
    })
});

// headers.forEach(function(header){
//     header.addEventListener('mouseout', function(){
//         header.style.color = "orange";
//     })
// });


// paras.forEach(function(paragraph){
//     paragraph.addEventListener('select', function(){
//         paragraph.style.color = "pink";
//     })
// });




// when window is resized change background color

//  Selecting text 

// dblcliclk

//drag and drop

