const gallery = document.querySelector('.gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const closeModal = document.querySelector('.modal__close');

gallery.addEventListener('click', function(event) {
    if (event.target.classList.contains('gallery__image')) {
        const fullSizeImage = event.target.getAttribute('data-source');
        modal.style.display = 'flex';
        modalImg.src = fullSizeImage;
    }
});

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});