// функция подсчета объектов
function countPhotos() {
    const photos = document.querySelectorAll('.photo');
    const counter = document.getElementById('image-counter');
    
    if (counter) {
        counter.textContent = photos.length;
    }
}

// функция работы с лайками
function setupLikes() {
    const likeButtons = document.querySelectorAll('.like-btn');
    const totalLikesElement = document.getElementById('total-likes');
    let totalLikes = 0;

    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const likesSpan = this.querySelector('.like-count');
            let currentLikes = parseInt(likesSpan.textContent);

            if (this.classList.contains('liked')) {
                currentLikes--;
                totalLikes--;
                this.classList.remove('liked');
                this.querySelector('i').classList.replace('fas', 'far'); // пустое сердце
            } else {
                currentLikes++;
                totalLikes++;
                this.classList.add('liked');
                this.querySelector('i').classList.replace('far', 'fas'); // залитое сердце
            }

            likesSpan.textContent = currentLikes;
            if (totalLikesElement) {
                totalLikesElement.textContent = totalLikes;
            }

            // Микроанимация клика
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
}

// инициализация скриптов
document.addEventListener('DOMContentLoaded', () => {
    countPhotos();
    setupLikes();
    console.log("BLACKWOOD System Initialized.");
});