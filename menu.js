// menu
const menuTog = document.querySelector('.menu-tog');
const menu = document.querySelector('.menu');
const menuWraps = [...document.querySelectorAll('.menu-wrap')];

if (menuTog && menu) {
    menuTog.addEventListener('click', toggleMenu);
}

function toggleMenu(){
    if(menu.classList.contains('active')){
        menuTog.classList.remove('active');
        toggleMenuWraps(false);
        setTimeout(() => {
            menu.classList.remove('active');
        }, 300)
    }else{
        menuTog.classList.add('active');
        setTimeout(() => {
            menu.classList.add('active');
        }, 300)
        setTimeout(() => {
            toggleMenuWraps(true);
        }, 300)
    }
}

function toggleMenuWraps(active){
    menuWraps.forEach(wrap => {
        toggleWrap(wrap, active);
    });
}

function toggleWrap(wrap, active){
    setTimeout(() => {
        if(active){
            wrap.classList.add('active');
        }else{
            wrap.classList.remove('active');
        }
    });
}


const cursor = document.querySelector('.cursor');
// document.addEventListener('mousemove', (e) => {
//   cursor.style.left = e.pageX + 'px';
//   cursor.style.top = e.pageY + 'px';
// })

if (cursor && window.jQuery) {
  $(document).on('mousemove', function(event) {
    const y = event.pageY - $(window).scrollTop();
    $(cursor).css('left', event.pageX);
    $(cursor).css('top', `${y}px`);
  });

  $('#exc').hover(function() {
    $('.cursor').css({
      backgroundImage: 'url(images/cursorRed.svg)',
      transform: 'scale(2.5) translate(31%, 31%)',
    });
  });
  $('#wrk').hover(function() {
    $('.cursor').css({
      backgroundImage: 'url(images/cursorOrange.svg)',
      transform: 'scale(2.5) translate(31%, 31%)',
    });
  });
  $('#evn').hover(function() {
    $('.cursor').css({
      backgroundImage: 'url(images/cursorBlue.svg)',
      transform: 'scale(2.5) translate(31%, 31%)',
    });
  });
  $('#shp').hover(function() {
    $('.cursor').css({
      backgroundImage: 'url(images/cursorYellow.svg)',
      transform: 'scale(2.5) translate(31%, 31%)',
    });
  });
  $('.title, #gallery, .bc').hover(function() {
    $('.cursor').css({
      backgroundImage: 'url(images/cursorBlack.svg)',
      transform: 'scale(1) translate(31%, 31%)',
    });
  });
  $('.black, .blackbg, .redMenu, .orgMenu, .blueMenu, .yelMenu').hover(function() {
    $('.cursor').css({
      backgroundImage: 'url(images/cursorWhite.svg)',
      transform: 'scale(1) translate(10%, 10%)',
    });
  });
  $('.step').hover(function() {
    $('.cursor').css({
      backgroundImage: 'url(images/cursorScroll.svg)',
      transform: 'scale(2.5) translate(31%, 31%)',
    });
  });
}
