const containerModal = document.querySelector('.container-modal')

containerModal.addEventListener('click', (e) => {
    console.log(e.target.classList.contains('container-modal'));
})