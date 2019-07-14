// when a block is clicked it should go to the top of the stack

// create block class




//add evemt listener to each block
//on click, loop through all the blocks to check if that block was clicked. If it was, give it order of -1. 
//otherwise, blocks get order of 0

// let blocks = document.querySelectorAll('.block');
// blocks.forEach(block => block.addEventListener('click', function(event) {
//   blocks.forEach(block => {
//     if (block == event.target) {
//      event.target.style.order = "-1";
//     } else {
//      block.style.order = "0";
//     }
//    })
//  }));

class Block {
  constructor (block) {
    this.block = block;
    this.blocks = document.querySelectorAll('.block');
    this.blocks.addEventListener('click', this.rocket.bind(this));
  }

  rocket() {
    this.block.forEach(block => {
      if (block == event.target) {
         event.target.style.order = "-1";
      } else {
        this.block.style.order = "0";
      }
    })
  } 
}

const blocks = document.querySelectorAll('.block');
blocks.forEach(block => new Block(block));