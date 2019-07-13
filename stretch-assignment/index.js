// when a block is clicked it should go to the top of the stack

const blocks = document.querySelectorAll('.block');

// add evemt listener to each block
// on click, loop through all the blocks to check if that block was clicked. If it was, give it order of -1. 
// otherwise, blocks get order of 0
// blocks.forEach(block => block.addEventListener('click', function(event) {
//  blocks.forEach(block => {
//    if (block == event.target) {
//     event.target.style.order = "-1";
//    } else {
//     block.style.order = "0";
//    }
//   })
// }));

blocks.forEach(block => block.addEventListener('mousedown', (e) => {
  e.target.classList.add('animate');
  console.log("down");
}));

blocks.forEach(block => block.addEventListener('mouseup', (e) => {
  e.target.classList.remove('animate');
  console.log("down");
}));






