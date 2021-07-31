var scrollTop = require('scrolltop');
var rafScroll = require('raf-scroll');

function scrollThing() {
    // rafScroll.init();
    rafScroll.add(reveal);
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

(function setup() {
    scrollThing();
})();
