let scoreBtn = document.getElementsByClassName('score-btn');
let submitBtn = document.querySelector('.submit-btn');
let ratingPage = document.querySelector('.rating-page');
let thankYouPage = document.querySelector('.thank-you-page');
let selectedRating = document.querySelector('.selected-rating');
let selectedNum;

for(let i = 0; i < scoreBtn.length; i++) {

    scoreBtn[i].addEventListener('click', (e) => {

        for(let j = 0; j < scoreBtn.length; j++) {
            scoreBtn[j].classList.remove('active');
        }

        scoreBtn[i].classList.add('active');

        selectedNum = e.target.innerText;

    }) 
};

submitBtn.addEventListener('click', () => {

    if(selectedNum === undefined) {
        alert('Please select a rating');
    } else {
        ratingPage.style.display = 'none';
        thankYouPage.style.display = 'grid';
    }

    document.querySelector('.rating-num').innerText = selectedNum;
});