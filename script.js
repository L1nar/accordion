let parent = document.querySelector('#parent');
let tabs = document.querySelectorAll('.tab');
let links = document.querySelectorAll('a');
let img = document.querySelectorAll('.text');

parent.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target;
    console.log(target);
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
        target.closest('.tab').classList.add('active');
    }
})      