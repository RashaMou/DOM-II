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

// window.addEventListener('load', (event) => {
//     alert('You REALLY need a vacation');
// });

//5. double clicking an image in content area hides it and text fills full width

const images = document.querySelectorAll(".img-content");
const contentBox = document.querySelectorAll(".text-content");
console.log(contentBox);

images.forEach(function(image){
    image.addEventListener('dblclick', function(){
        image.style.display = "none";
        contentBox.forEach(function(box){
            box.style.width = "100%";
        })
    })
});

// 6. resize event console logs the new window size

const width = document.documentElement.clientWidth;
const height = document.documentElement.clientHeight;

window.addEventListener("resize", function(){
    console.log(`Width: ${width}\nHeight: ${height}`)
});

// 7.8.9. input field background turns orange on focus and back to white on blur. Prevent page refresh default behavior for form

// create form
const form = document.createElement("form");

// create input field
const input = document.createElement("input");
input.setAttribute("type", "email");

// create submit button
const submitBtn = document.createElement("button");
submitBtn.setAttribute("class", "submit-btn");
submitBtn.textContent = "Submit";
console.log(submitBtn.textContent);

// append to end of page
const lastSection = document.querySelector('.content-pick');
console.log(lastSection);

const emailDiv = document.createElement("div");
form.appendChild(emailDiv);
lastSection.appendChild(form);


// layout and styling
lastSection.style.flexWrap = "wrap";
emailDiv.appendChild(input);
emailDiv.appendChild(submitBtn);
form.style.margin = "auto";
input.style.marginRight = "10px";
input.style.marginBottom = "20px";

form.addEventListener('click', function(event){
    event.preventDefault();
})

input.addEventListener('focus', function(){
    input.style.backgroundColor = "orange";
})

input.addEventListener('blur', function(){
    input.style.backgroundColor = "white";
})

















