let burger = document.querySelector('.burger');
let close = document.querySelector('.close');

burger.onclick = function() {
    document.querySelector('.navigation').classList.add('navigation__open');
};

close.onclick = function() {
    document.querySelector('.navigation').classList.remove('navigation__open');
};