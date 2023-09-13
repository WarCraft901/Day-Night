const togle = document.querySelector('.toggle');
const wave = document.querySelector('.wave');
const tittle = document.querySelector('.tittle')
togle.addEventListener('click', function(){
    this.classList.add('animate');
    setTimeout(() => {
        this.classList.toggle('active');
        wave.classList.toggle('active');
        tittle.classList.toggle('active');
    },150);

    setTimeout(() =>{this.classList.remove('animate')},300)
})