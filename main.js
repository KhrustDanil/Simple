
document.querySelector('.navbar__btn').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.navbar__list').classList.toggle('open');
})