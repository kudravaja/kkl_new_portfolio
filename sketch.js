function init() {
  let current = 0;
  let directionForward = true;
  let items = document.querySelectorAll(".card-slider .items .item");
  let nextBtn = document.querySelector(".card-slider .next");
  let prevBtn = document.querySelector(".card-slider .prev");

  if (!items.length || !nextBtn || !prevBtn || !window.anime) {
    return;
  }

  let getCard = (item) => {
    return item.querySelector(".card");
  };

  let getTitle = (item) => {
    return item.querySelector(".title span");
  };

  let setItems = () => {
    items.forEach((item, index) => {
      const title = getTitle(item);
      if (!title) return;

      title.innerHTML = title.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      if (index === current) return;

      anime.set(getCard(item), {
        translateX: "100vw",
      });

      anime.set(title.querySelectorAll(".letter"), {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      });
    });
  };

  let animate = {
    in(item) {
      let card = getCard(item);
      let title = getTitle(item);

      let timeline = anime.timeline({
        duration: 1000,
        easing: "easeOutExpo",
      });

      timeline.add({
        targets: card,
        translateX: directionForward ? ["100vw", 0] : ["-100vw", 0],
        rotate: [40, 0],
      }).add(
        {
          targets: title.querySelectorAll(".letter"),
          clipPath: [
            "polygon(0 0, 100% 0, 100% 0, 0 0)",
            "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          ],
          translateY: directionForward ? ["1em", 0] : ["-1em", 0],
          delay: anime.stagger(40),
        },
        "-=1000"
      );

      return timeline;
    },

    out(item) {
      let card = getCard(item);
      let title = getTitle(item);

      let timeline = anime.timeline({
        duration: 1000,
        easing: "cubicBezier(0.86,0,0.07,1);",
      });

      timeline.add({
        targets: card,
        translateX: directionForward ? [0, "-100vw"] : [0, "100vw"],
        rotate: [0, -40],
      }).add(
        {
          targets: title.querySelectorAll(".letter"),
          clipPath: [
            "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
            "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
          ],
          translateY: directionForward ? [0, "-1em"] : [0, "1em"],
          delay: anime.stagger(40),
        },
        "-=1000"
      );

      return timeline;
    },
  };

  function next() {
    if (!directionForward) {
      directionForward = !directionForward;
    }
    animate.out(items[current]);

    current = (current + 1) % items.length;
    setTimeout(function () {
      animate.in(items[current]);
    }, 550);
  }
  function prev() {
    if (directionForward) {
      directionForward = !directionForward;
    }
    animate.out(items[current]);
    current = (current - 1 + items.length) % items.length;
    setTimeout(function () {
      animate.in(items[current]);
    }, 550);
  }

  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);

  setItems();
}

document.addEventListener("DOMContentLoaded", init);

if (window.jQuery) {
  $('#item1').hover(function() {
    $('.cursor').css({
      backgroundImage: 'url(images/cursorRed.svg)',
      transform: 'scale(2.5) translate(31%, 31%)',
    });
  });
  $('#item2').hover(function() {
    $('.cursor').css({
      backgroundImage: 'url(images/cursorOrange.svg)',
      transform: 'scale(2.5) translate(31%, 31%)',
    });
  });
  $('#item3').hover(function() {
    $('.cursor').css({
      backgroundImage: 'url(images/cursorBlue.svg)',
      transform: 'scale(2.5) translate(31%, 31%)',
    });
  });
  $('#item4').hover(function() {
    $('.cursor').css({
      backgroundImage: 'url(images/cursorYellow.svg)',
      transform: 'scale(2.5) translate(31%, 31%)',
    });
  });
  $('.title').hover(function() {
    $('.cursor').css({
      backgroundImage: 'url(images/cursorBlack.svg)',
      transform: 'scale(1)',
    });
  });
}

if (window.gsap && window.Expo) {
  gsap.from(".card", 1, {
    bottom: "-1000%",
    opacity: 0,
    ease: Expo.easeInOut,
  });
  gsap.from(".name", 1, {
    opacity: 0,
    ease: Expo.easeInOut,
    delay: 1,
  });
  gsap.from(".nav", 2, {
    opacity: 0,
    ease: Expo.easeInOut,
    delay: 1,
  });
  gsap.from(".title", 1, {
    opacity: 0,
    ease: Expo.easeInOut,
    delay: 0.5,
  });
}

$(document).ready( function() {
  $("#chick").on("click",function() {
    $("#chick").css("display", "none");
  });
});
$(document).ready( function() {
  $("#chick2").on("click",function() {
    $("#chick2").css("display", "none");
  });
});
$(document).ready( function() {
  $("#chick3").on("click",function() {
    $("#chick3").css("display", "none");
  });
});
$(document).ready( function() {
  $("#chick4").on("click",function() {
    $("#chick4").css("display", "none");
  });
});
let clickCounter = 0;
$(document).ready(function() {
  $("#chick5").on("click", function() {
    clickCounter++;
    if (clickCounter === 2) {
     $(".hurray").css('display', 'block');
    }
    $("#chick5").css('background-image', 'url(./images/chickens/chicken.svg)');
  });
});

$(document).ready( function() {
  $("#chick6").on("click",function() {
    $("#chick6").css("display", "none");
  });
});
$(document).ready( function() {
  $("#chick7").on("click",function() {
    $("#chick7").css("display", "none");
  });
});
$(document).ready( function() {
  $("#chick8").on("click",function() {
    $("#chick8").css("display", "none");
  });
});
$(document).ready( function() {
  $("#chick9").on("click",function() {
    $("#chick9").css("display", "none");
  });
});
$(document).ready( function() {
  $("#chick10").on("click",function() {
    $("#chick10").css("display", "none");
  });
});
$(document).ready( function() {
  $("#chick11").on("click",function() {
    $("#chick11").css("display", "none");
  });
});
$(document).ready( function() {
  $("#chick12").on("click",function() {
    $("#chick12").css("display", "none");
  });
});
$(document).ready( function() {
  $("#chick13").on("click",function() {
    $("#chick13").css("display", "none");
  });
});
$(document).ready( function() {
  $("#chick14").on("click",function() {
    $("#chick14").css("display", "none");
  });
});
$(document).ready( function() {
  $("#chick15").on("click",function() {
    $("#chick15").css("display", "none");
  });
});

let conTog = document.querySelector('.contacts-tog');
let con = document.querySelector('.contacts');
let conCov = [...document.querySelectorAll('.contacts-cover')];

if (conTog && con) {
    conTog.addEventListener('click', toggleCon);
}

function toggleCon(){
    if(con.classList.contains('active')){
        conTog.classList.remove('active');
        toggleConWraps(false);
        setTimeout(() => {
            con.classList.remove('active');
        }, 300)
    }else{
        conTog.classList.add('active');
        setTimeout(() => {
            con.classList.add('active');
        }, 300)
        setTimeout(() => {
            toggleConWraps(true);
        }, 300)
    }
}

function toggleConWraps(active){
    conCov.forEach(cover => {
        toggleCover(cover, active);
    })
}

function toggleCover(cover, active){
    setTimeout(() => {
        if(active){
            cover.classList.add('active');
        }else{
            cover.classList.remove('active');
        }
    })
}
