let images = ['./img/pancake.jpeg', './img/prin.jpeg', './img/syu-cream.jpeg'];
let current = 0;
let pageNum = function() {
    document.getElementById('page').textContent = (current + 1) + '/' + images.length;
}


let changeImage = function(num){
    if (current + num >= 0 && current + num < images.length) {
        current += num;
        document.getElementById('main_image').src = images[current];
        pageNum(); //クリック後に表示させる
    }
};

pageNum(); //初期にページ数を表示させるための記述

document.getElementById('prev').onclick = function() {
    changeImage(-1);
};

document.getElementById('next').onclick = function() {
    changeImage(1);
};