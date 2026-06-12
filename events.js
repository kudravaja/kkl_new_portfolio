const scrollable = document.querySelector('.scrollable');
const content = document.querySelector('.content');
const imgSections = [...document.querySelectorAll('.img-section')];

if (!scrollable || !content || !imgSections.length) {
  throw new Error('Events carousel markup is missing.');
}

let target = 1;
let reverse = false;

let clonesWidth;
let contentWidth;
let clones = [];

let contentHover = false;
let req;
const images = [...document.querySelectorAll('.imgdiv')];

imgSections.forEach(item => {
  let clone = item.cloneNode(true);
  clone.classList.add('clone');
  content.appendChild(clone);
  clones.push(clone);
});

function init(){
    document.body.style.height = `${content.getBoundingClientRect().width}px`;
}
window.addEventListener('resize', init);


function getClonesWidth(){
    let width = 0;
    clones.forEach(clone => {
      width += clone.offsetWidth;
    });
    return width;
}

function scroll(){
    target = window.scrollY;

    if(!contentHover){
        if(target <= 0){
            target = (content.offsetWidth / 2) - 1;
            window.scrollTo(0, target);
        }else if( target >= content.offsetWidth / 2){
            target = 1;
            window.scrollTo(0, target);
        }
    }

    if(reverse){
        target --
    }else{
        target++
    }
    window.scrollTo(0, target);
    scrollable.style.transform = `translateX(-${target}px)`;
    req = requestAnimationFrame(scroll);
}

function onLoad(){
    cancelAnimationFrame(req);
    calculateDimensions();
    init();
    target = 1;
    scroll();
}

function calculateDimensions(){
    contentWidth = content.getBoundingClientRect().width;
    clonesWidth = getClonesWidth();
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        window.scrollTo(0, 1);
    }, 200);
    onLoad();
});
