const overlayLost = document.getElementById('overlay-lost');
const overlayWon = document.getElementById('overlay-won');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const drawCard = document.getElementById('draw-card');
const toatlPoints = document.getElementById('total-points');
const playAgainWon = document.getElementById('play-again-won');
const playAgainLost = document.getElementById('play-again-lost');

playAgainWon.addEventListener('click', () => {
    window.location.reload();
});
playAgainLost.addEventListener('click', () => {
    window.location.reload();
});

let randomNumber = 0;

function getRandomNumber() {
    randomNumber = Math.ceil(Math.random() * 13) ;
    return randomNumber;
}

function checkWin() {
    if (totalCount >= 21) {
        overlayWon.style.display = 'block';
    }
}

function checkLost() {
    if( image1Clicked === true && image2Clicked === true && image3Clicked === true) {
        if (totalCount < 21) {
        overlayLost.style.display = 'block';
    }
}
}

let image1Clicked = false;
let image2Clicked = false;
let image3Clicked = false;

let totalCount = 0;

image1.addEventListener('click', () => {
    if (image1Clicked === false) {
        image1Clicked = true;
    randomNumber = getRandomNumber();
    switch (randomNumber) {
        case 1:
            image1.src = 'images/1.png';
            totalCount += 1;
            toatlPoints.innerHTML = totalCount;
            checkWin();
            checkLost();
            break;
        case 2:
            image1.src = 'images/2.png';
            totalCount += 2;
            toatlPoints.innerHTML = totalCount;
            checkWin();
            checkLost();
            break;
        case 3:
            image1.src = 'images/3.png';
            totalCount += 3;
            toatlPoints.innerHTML = totalCount;
            checkWin();
            checkLost();
            break;
        case 4:
            image1.src = 'images/4.png';
            totalCount += 4;
            toatlPoints.innerHTML = totalCount;
            checkWin();
            checkLost();
            break;
        case 5:
            image1.src = 'images/5.png';
            totalCount += 5;
            toatlPoints.innerHTML = totalCount;
            checkWin();
            checkLost();
            break;
        case 6:
            image1.src = 'images/6.png';
            totalCount += 6;
            toatlPoints.innerHTML = totalCount;
            checkWin();
            checkLost();
            break;
        case 7:
            image1.src = 'images/7.png';
            totalCount += 7;
            toatlPoints.innerHTML = totalCount;
            checkWin();
            checkLost();
            break;
        case 8:
            image1.src = 'images/8.png';
            totalCount += 8;
            toatlPoints.innerHTML = totalCount;
            checkWin();
            checkLost();
            break;
        case 9:
            image1.src = 'images/9.png';
            totalCount += 9;
            toatlPoints.innerHTML = totalCount;
            checkWin();
            checkLost();
            break;
        case 10:
            image1.src = 'images/10.png';
            totalCount += 10;
            toatlPoints.innerHTML = totalCount;
            checkWin();
            checkLost();
            break;
        case 11:
            image1.src = 'images/11.png';
            totalCount += 11;
            toatlPoints.innerHTML = totalCount;
            checkWin();
            checkLost();
            break;
        case 12:
            image1.src = 'images/12.png';
            totalCount += 12;
            toatlPoints.innerHTML = totalCount;
            checkWin();
            checkLost();
            break;
        case 13:
            image1.src = 'images/13.png';
            totalCount += 13
            toatlPoints.innerHTML = totalCount;
            checkWin();
            checkLost();
            break;
        

        
    }
}
   
});

image2.addEventListener('click', () => {
    if (image2Clicked === false) {
        image2Clicked = true;
    randomNumber = getRandomNumber();
    switch (randomNumber) {
        case 1:
            image2.src = 'images/1.png';
            totalCount += 1;
            toatlPoints.innerHTML = totalCount;
            checkWin();
            checkLost();
            break;
        case 2:
            image2.src = 'images/2.png';
            totalCount += 2;
            toatlPoints.innerHTML = totalCount;
            checkWin();
            checkLost();
            break;
        case 3:
            image2.src = 'images/3.png';
            totalCount += 3;
            toatlPoints.innerHTML = totalCount;
            checkWin();
            checkLost();
            break;
        case 4:
            image2.src = 'images/4.png';
            totalCount += 4;
            toatlPoints.innerHTML = totalCount;
            checkWin();
            checkLost();
            break;
        case 5:
            image2.src = 'images/5.png';
            totalCount += 5;
            toatlPoints.innerHTML = totalCount;
            checkWin();
            checkLost();
            break;
        case 6:
            image2.src = 'images/6.png';
            totalCount += 6;
            toatlPoints.innerHTML = totalCount;
            checkWin();
            checkLost();
            break;
        case 7:
            image2.src = 'images/7.png';
            totalCount += 7;
            toatlPoints.innerHTML = totalCount;
            checkWin();
            checkLost();
            break;
        case 8:
            image2.src = 'images/8.png';
            totalCount += 8;
            toatlPoints.innerHTML = totalCount;
            checkWin();
            checkLost();
            break;
        case 9:
            image2.src = 'images/9.png';
            totalCount += 9;
            toatlPoints.innerHTML = totalCount;
            checkWin();
            checkLost();
            break;
        case 10:
            image2.src = 'images/10.png';
            totalCount += 10;
            toatlPoints.innerHTML = totalCount;
            checkWin();
            checkLost();
            break;
        case 11:
            image2.src = 'images/11.png';
            totalCount += 11;
            toatlPoints.innerHTML = totalCount;
            checkWin();
            checkLost();
            break;
        case 12:
            image2.src = 'images/12.png';
            totalCount += 12;
            toatlPoints.innerHTML = totalCount;
            checkWin();
            checkLost();
            break;
        case 13:
            image2.src = 'images/13.png';
            totalCount += 13
            toatlPoints.innerHTML = totalCount;
            checkWin();
            checkLost();
            break;

    }
}
});

image3.addEventListener('click', () => {

    if (image3Clicked === false) {
        image3Clicked = true;
    randomNumber = getRandomNumber();
    switch (randomNumber) {
        case 1:
            image3.src = 'images/1.png';
            totalCount += 1;
            toatlPoints.innerHTML = totalCount;
            checkWin();
            checkLost();
            break;
        case 2:
            image3.src = 'images/2.png';
            totalCount += 2;
            toatlPoints.innerHTML = totalCount;
            checkWin();
            checkLost();
            break;
        case 3:
            image3.src = 'images/3.png';
            totalCount += 3;
            toatlPoints.innerHTML = totalCount;
            checkWin();
            checkLost();
            break;
        case 4:
            image3.src = 'images/4.png';
            totalCount += 4;
            toatlPoints.innerHTML = totalCount;
            checkWin();
            checkLost();
            break;
        case 5:
            image3.src = 'images/5.png';
            totalCount += 5;
            toatlPoints.innerHTML = totalCount;
            checkWin();
            checkLost();
            break;
        case 6:
            image3.src = 'images/6.png';
            totalCount += 6;
            toatlPoints.innerHTML = totalCount;
            checkWin();
            checkLost();
            break;
        case 7:
            image3.src = 'images/7.png';
            totalCount += 7;
            toatlPoints.innerHTML = totalCount;
            checkWin();
            checkLost();
            break;
        case 8:
            image3.src = 'images/8.png';
            totalCount += 8;
            toatlPoints.innerHTML = totalCount;
            checkWin();
            checkLost();
            break;
        case 9:
            image3.src = 'images/9.png';
            totalCount += 9;
            toatlPoints.innerHTML = totalCount;
            checkWin();
            checkLost();
            break;
        case 10:
            image3.src = 'images/10.png';
            totalCount += 10;
            toatlPoints.innerHTML = totalCount;
            checkWin();
            checkLost();
            break;
        case 11:
            image3.src = 'images/11.png';
            totalCount += 11;
            toatlPoints.innerHTML = totalCount;
            checkWin();
            checkLost();
            break;
        case 12:
            image3.src = 'images/12.png';
            totalCount += 12;
            toatlPoints.innerHTML = totalCount;
            checkWin();
            checkLost();
            break;
        case 13:
            image3.src = 'images/13.png';
            totalCount += 13
            toatlPoints.innerHTML = totalCount;
            checkWin();
            checkLost();
            break;

    }
}
});


