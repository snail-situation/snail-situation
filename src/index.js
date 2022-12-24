var scrollTop = require('scrolltop');
var rafScroll = require('raf-scroll');

function scrollThing() {
    rafScroll.add(Reveal());
    rafScroll.add(CssVar());
}

function CssVar () {
    var oldScr = scrollTop();
    return function setCssVar () {
        var scr = scrollTop()
        if (oldScr === scr) return
        oldScr = scr;
        var offset = (window.pageYOffset /
            (document.body.offsetHeight - window.innerHeight));
        document.body.style.setProperty('--scroll', offset);
    }
}

function Reveal () {
    var oldScr = scrollTop();
    return function reveal () {
        var scr = scrollTop()
        if (oldScr === scr) return
        oldScr = scr;
        if (scr > 500) {
            var elmts = [
                document.querySelector('.links'),
                document.querySelector('h1')
            ]
            elmts.forEach(elmt => {
                elmt.className = (elmt.className.replace('hidden' , ''))
            })
        }
    }
}

(function setup() {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0)
    }

    scrollThing()
})()
