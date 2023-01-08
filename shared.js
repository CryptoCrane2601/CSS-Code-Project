var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var selectNoButton = document.querySelectorAll('.modal__action--negative');


// console.dir(selectPlanButtons);

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
        });
}

for (var i =0; i < selectNoButton.length; i++) {
    selectNoButton[i].addEventListener('click', function() {
        modal.style.display = 'none';
        backdrop.style.display = 'none';
    });
}

