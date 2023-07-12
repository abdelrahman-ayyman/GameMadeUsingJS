var playMode,
    o = 0,
    f = 0,
    pass = document.getElementById("pass"),
    sound = document.getElementById("sound"),
    parents = document.getElementsByClassName('parent');
function start() {
    "use strict";
    var t = setInterval(function() {
        sound.src = "sounds/back.mp3";
    },23000);
    sound.src = "sounds/back.mp3";
    $("#enter").css({display: "none"});
    var num = 0,
        num2 = 1,
        par = document.getElementsByClassName('items')[0];
    var clear;
    for (var i = 0; i < 100;i++) {
        var parent = document.createElement('div'),
            cre = document.createElement('div'),
            s = document.createElement('div'),
            lvl = document.createElement('div'),
            rand = Math.floor(Math.random() * 75) + 1;
        parent.className = "parent";
        cre.className = "item";
        s.className = "item";
        if (i % 5 === 0) {
            num = num + 1;
            lvl.innerText = "Level " + num;
            lvl.className = "lvl";
            par.appendChild(lvl);
        }
        par.appendChild(parent);
        parent.appendChild(cre);
        parent.appendChild(s);
        cre.style.width = rand + "%";
        s.style.width = 75 - rand + "%";
    }

    clear = setInterval(function () {
        var child1 = parents[o].getElementsByTagName("div")[0],
            child2 = parents[o].getElementsByTagName("div")[1];
        if (
            $(".lvl")[0].offsetTop === Math.round(-(f)) ||
            $(".lvl")[1].offsetTop === Math.round(-(f)) ||
            $(".lvl")[2].offsetTop === Math.round(-(f)) ||
            $(".lvl")[3].offsetTop === (Math.round(-(f)) + 1) ||
            $(".lvl")[4].offsetTop === (Math.round(-(f)) + 4) ||
            $(".lvl")[5].offsetTop === Math.round(-(f)) ||
            $(".lvl")[6].offsetTop === (Math.round(-(f)) + 2) ||
            $(".lvl")[7].offsetTop === (Math.round(-(f)) + 1) ||
            $(".lvl")[8].offsetTop === (Math.round(-(f))) ||
            $(".lvl")[9].offsetTop === (Math.round(-(f)) + 2) ||
            $(".lvl")[10].offsetTop === Math.round(-(f) + 2) ||
            $(".lvl")[11].offsetTop === Math.round(-(f) + 2) ||
            $(".lvl")[12].offsetTop === Math.round(-(f) + 5) ||
            $(".lvl")[13].offsetTop === Math.round(-(f) + 6) ||
            $(".lvl")[14].offsetTop === Math.round(-(f)) ||
            $(".lvl")[15].offsetTop === Math.round(-(f))
            ) {
            num2 = num2 + 0.5;
            f -= num2;
            $(par).css({top: f});
            $(child1).css({
                top: f
            });
            $(child2).css({
                top: f
            });
            $('code').text("SCORE: " + (Math.round(-f)));
        } else {
            f -= num2;
           $(par).css({top: f});
            $(child1).css({
                top: f
            });
            $(child2).css({
                top: f
            });
            $('code').text("SCORE: " + (Math.round(-f)));
            if ($(".lvl")[4].offsetTop < Math.round(-(f))) {
                par.style = "-webkit-filter: contrast(1.25) brightness(1.25);" + "top: " + f + "px";
            }
            if ($(".lvl")[9].offsetTop < Math.round(-(f))) {
                par.style = "-webkit-filter: hue-rotate(35deg) contrast(1.25) brightness(1.25);" + "top: " + f + "px";
            }
            if ($(".lvl")[14].offsetTop < Math.round(-(f))) {
                par.style = "-webkit-filter: contrast(1.25) brightness(1.25);" + "top: " + f + "px";
            }
        }
        if ((parents[o].offsetTop + f) < -200) {
            if (o === parents.length - 1) {
                return false;
            } else {
                o++;
            }
        }
        if (o % 5 === 0) {
            pass.src = "sounds/cross.mp3";
        }
        if ((-f) >= (par.scrollHeight - 900)) {
            $('.result').css({
                display: "block",
                opacity: 0
            });
            $('code').css({
                display: "none"
            });
            $('.result h1:first-of-type').text(Math.round(-f));
            $('html').css({
                cursor: "auto"
            });
            $('.result h1:last-of-type').text("You Won!!");
            $('#cursor').animate({"opacity": "0"}, 600);
            clearInterval(clear);
            clearInterval(t);
        }
        if (
            child2.offsetLeft <= $('#cursor').offset().left &&
            (Math.round($('#cursor').offset().top) === Math.round($(child2).offset().top) ||
            Math.round($('#cursor').offset().top) === Math.round($(child2).offset().top) + 1 ||
            Math.round($('#cursor').offset().top) === Math.round($(child2).offset().top) + 2 ||
            Math.round($('#cursor').offset().top) === Math.round($(child2).offset().top) + 3 ||
            Math.round($('#cursor').offset().top) === Math.round($(child2).offset().top) - 1 ||
            Math.round($('#cursor').offset().top) === Math.round($(child2).offset().top) - 2 ||
            Math.round($('#cursor').offset().top) === Math.round($(child2).offset().top) - 3)) {
            $('html').css({
                cursor: "auto"
            });
            $(document).off('mousemove');
            $('#cursor').css({
                left: $('#cursor').offset().left + "px",
                top: $('#cursor').offset().top + "px",
                "background-image": "url(imgs/explosion.gif)"
            });
            sound.src = "sounds/explosion.mp3";
            $('#cursor').animate({
                opacity: 0
            },1750);
            $('.result').css({
                display: "block",
                opacity: 0
            });
            $('code').css({
                display: "none"
            });
            $('.result h1:first-of-type').text(Math.round(-f));
            clearInterval(clear);
            clearInterval(t);
        }
        if (
            ($(window).width() - ($(child1).offset().left + $(child1).outerWidth())) <= ($(window).width() - ($("#cursor").offset().left + $("#cursor").outerWidth())) &&(Math.round($('#cursor').offset().top) === Math.round($(child1).offset().top) ||
            Math.round($('#cursor').offset().top) === Math.round($(child1).offset().top) + 1 ||
            Math.round($('#cursor').offset().top) === Math.round($(child1).offset().top) + 2 ||
            Math.round($('#cursor').offset().top) === Math.round($(child1).offset().top) + 3 ||
            Math.round($('#cursor').offset().top) === Math.round($(child1).offset().top) - 1 ||
            Math.round($('#cursor').offset().top) === Math.round($(child1).offset().top) - 2 ||
            Math.round($('#cursor').offset().top) === Math.round($(child1).offset().top) - 3)) {
            $('html').css({
                cursor: "auto"
            });
            $(document).off('mousemove');
            $('#cursor').css({
                left: $('#cursor').offset().left + "px",
                top: $('#cursor').offset().top + "px",
                "background-image": "url(imgs/explosion.gif)"
            });
            sound.src = "sounds/explosion.mp3";
            $('#cursor').animate({
                opacity: 0
            },1750);
            $('.result').css({
                display: "block",
                opacity: 0
            });
            $('code').css({
                display: "none"
            });
            $('.result h1:first-of-type').text(Math.round(-f));
            clearInterval(clear);
            clearInterval(t);
        }
    },8);
    if (playMode === "mouse") {
        $("html").css({cursor:"none"});
        $(".item").mouseover(function () {
            sound.src = "sounds/explosion.mp3";
            $('html').css({
                cursor: "auto"
            });
            $(document).off('mousemove');
            $('#cursor').css({
                left: $('#cursor').offset().left + "px",
                top: $('#cursor').offset().top + "px",
                "background-image": "url(imgs/explosion.gif)"
            });
            $('#cursor').animate({
                opacity: 0
            },1750);
            $('.result').css({
                display: "block",
                opacity: 0
            });
            $('code').css({
                display: "none"
            });
            $('.result h1:first-of-type').text(Math.round(-f));
            clearInterval(clear);
            clearInterval(t);
        });
    }

    var parente = document.createElement('div');
        parente.className = 'moon';
    par.appendChild(parente);
}

function selectMouse() {
    "use strict";
    playMode = "mouse";
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        window.addEventListener('touchmove', function (e) {
            $('#cursor').css({
                left: e.touches[0].clientX - 35,
                top: e.touches[0].clientY - 35
            });
        });
    } else {
        $(document).on('mousemove', function (e) {
            $('#cursor').css({
                left: e.pageX - 85,
                top: e.pageY - 175
            });
        });
    }
}