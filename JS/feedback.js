let acco = document.querySelector('#acco');

team.addEventListener('click', function (e) {
    e.preventDefault();
    let target = e.target;
    let currentTarget = target.nextElementSibling;
    function clear() {
        let activeContent = document.querySelector('.team__text.active');
        if(activeContent) {
            activeContent.classList.remove('active');
        }
    }
    if (target.classList.contains('team__name')) {
        if (currentTarget.classList.contains('active')) {
            currentTarget.classList.remove('active');
        } else {
            currentTarget.classList.add('active');
        }
    }
})