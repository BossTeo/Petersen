document.addEventListener('DOMContentLoaded', function() {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    const images = ['IMG_4123.jpeg', 'IMG_4124.jpeg', 'IMG_4125.jpeg', 'IMG_4267.jpeg', 'IMG_4276.jpeg', 'IMG_4277.jpeg'];

    images.forEach(image => {
        const swiperSlide = document.createElement('div');
        swiperSlide.classList.add('swiper-slide');
        const imgElement = document.createElement('img');
        imgElement.src = 'BeforeAfterPhotos/' + image;
        swiperSlide.appendChild(imgElement);
        swiperWrapper.appendChild(swiperSlide);
    });
});