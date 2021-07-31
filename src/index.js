var scrollTop = require('scrolltop');
var rafScroll = require('raf-scroll');

function scrollThing() {
    // rafScroll.init();
    rafScroll.add(reveal);
    // rafScroll.add(update);
}

console.log('raf scroll', rafScroll)

function reveal () {
    // var elmt = document.querySelector('.contact-info');
    // console.log('elmt', elmt)
    // console.log('scroll top', scrollTop())
    if (scrollTop() > 600) {
        var elmt = document.querySelector('.links')
        elmt.className = elmt.className.replace(/(?:^|\s)hidden(?!\S)/g , '')
        console.log('> 600')
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
