var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectNoButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var selectPlanButtons = document.querySelectorAll('.plan button');



// console.dir(selectPlanButtons);

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        modal.classList.add('open')
        backdrop.classList.add('open')
        });
}
backdrop.addEventListener('click', function() {
    // mobileNav.style.display = 'none';
    // backdrop.style.display = 'none';    
    // modal.style.display = 'none';  
    mobileNav.classList.remove('open');
    backdrop.classList.remove('open');
    if (modal) {
        modal.classList.remove('open');
    }
    
    });

if(selectNoButton) {
    selectNoButton.addEventListener('click', function() {
    // backdrop.style.display = 'none';    
    // modal.style.display = 'none';
    backdrop.classList.remove('open'); 
    modal.classList.remove('open'); 
    });
}
    

toggleButton.addEventListener('click', function() {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
})
