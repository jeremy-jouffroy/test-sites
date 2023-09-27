function toggleMenu() {
    const menuContent = document.querySelector('.burger-menu .menu-content');
    menuContent.style.display = menuContent.style.display === 'none' ? 'block' : 'none';
}

function openModal(product) {
    const modal = document.getElementById('product-modal');
    const modalImage = document.getElementById('modal-image');
    modalImage.src = product + '.jpg';
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('product-modal');
    modal.style.display = 'none';
}

// Click outside of modal to close it
window.onclick = function(event) {
    const modal = document.getElementById('product-modal');
    if (event.target === modal) {
        closeModal();
    }
}
