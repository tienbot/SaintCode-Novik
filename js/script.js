let burger = document.querySelector('.burger');
let close = document.querySelector('.close');

burger.onclick = function() {
    // console.log('ok');
    document.querySelector('.navigation').classList.add('navigation__open');
};

close.onclick = function() {
    // console.log('ko');
    document.querySelector('.navigation').classList.remove('navigation__open');
};