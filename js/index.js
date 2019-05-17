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
        header.style.marginLeft = "30%";
        header.style.color = "orange";
    })
});

// 3. wheel event changes text background color and gives it a roundover and padding

const text = document.querySelectorAll("p");
const page = document.querySelector("html"); 

page.addEventListener('wheel', function(){
    text.forEach(function(para){
        para.style.backgroundColor = "orange";
        para.style.borderRadius = "8px"
        para.style.padding = "10px";
    })
});

//4. load event triggers alert that you really need a vacation

window.addEventListener('load', (event) => {
    alert('You REALLY need a vacation');
});



