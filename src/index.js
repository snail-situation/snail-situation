var scrollTop = require('scrolltop');
var rafScroll = require('raf-scroll');

function scrollThing() {
    rafScroll.add(Reveal());
    rafScroll.add(CssVar());
    // rafScroll.add(update);
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
        if (scr > 600) {
            var elmts = [
                document.querySelector('.links'),
                document.querySelector('h1')
            ]
            elmts.forEach(elmt => {
                elmt.className = (elmt.className
                    .replace(/(?:^|\s)hidden(?!\S)/g , ''))
            })
        }
    }
}



// var offset = el.offsetTop;
// var oldScr = scrolltop();

// function update () {
    // var scr = scrolltop();
    // if (oldScr === scr) return;
    // oldScr = scr;
    // el.style.top = (offset - (scr * 0.3)) + 'px';
// }


(function setup() {
    scrollThing();
})();
