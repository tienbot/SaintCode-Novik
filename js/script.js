let burger = document.querySelector('.burger');
let close = document.querySelector('.close');
let navigation = document.querySelector('.navigation');

burger.onclick = function() {
    document.querySelector('.navigation').classList.add('navigation__open');
};

close.onclick = function() {
    document.querySelector('.navigation').classList.remove('navigation__open');
};

navigation.onclick = function() {
    document.querySelector('.navigation').classList.remove('navigation__open');
};

