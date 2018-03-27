const group = document.getElementsByClassName('blocks')[0];
const grayBlock = document.querySelector('.block--gray');

const rockets = (event) => {
  // Move event target to top
  event.target.style.order = -1;

  // Set everything else to 0
  for (let i = 0; i < group.children.length; i++) {
    if (group.children[i] !== event.target){
      group.children[i].style.order = 0;
    } 
  }
}



for (let i = 0; i < group.children.length; i++) {
  group.children[i].addEventListener('click', rockets);
  group.children[i].addEventListener('mousedown', () => {
    group.children[i].style.marginLeft = '50px';
  });
  group.children[i].addEventListener('mouseup', () => {
    group.children[i].style.marginLeft = '10px';
  });
}



console.log(group.children);

