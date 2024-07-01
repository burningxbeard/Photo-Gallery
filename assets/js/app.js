const el = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');

const imageIndexes = [7,8,9,10,1,2,3,4,5,6,];
const selectedIndex = null;

imageIndexes.forEach(i => {
    const image = document.createElement('img');
    image.src = `./assets/images/image${i}.jpg`;
    image.alt = `Image from something`;
    image.classList.add('galleryImg');

    image.addEventListener('click', () => {
        popup.style.transform = `translateY(0)`;
        selectedImage.src = `./assets/images/image${i}.jpg`;
        selectedImage.alt = `Image from something`;
    })

    gallery.appendChild(image);
})

popup.addEventListener('click', () => {
    popup.style.transform = `translateY(-100%)`
    popup.src = '';
    popup.alt = '';
})