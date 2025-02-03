let noSize = 1.5;
let yesSize = 1.5;

function shrinkNo() {
    let noButton = document.querySelector('.no');
    let yesButton = document.querySelector('.yes');

    noSize *= 0.8;
    yesSize *= 1.2;

    noButton.style.fontSize = `${noSize}rem`;
    yesButton.style.fontSize = `${yesSize}rem`;
}


