document.addEventListener('DOMContentLoaded', () => {
    const featuresWrapper = document.querySelector('.features-wrapper');

    for (let i = 0; i < 40; i++) {
        const blob = document.createElement('div');
        blob.classList.add('blob');
        blob.style.top = `${Math.random() * 100}%`;
        blob.style.left = `${Math.random() * 100}%`;
        blob.style.width = `${50 + Math.random() * 300}px`;
        blob.style.height = `${50 + Math.random() * 300}px`;
        blob.style.animationDuration = `${2 + Math.random() * 20}s`;
        blob.style.opacity = `${0.3 + Math.random() * 0.7}`;
        featuresWrapper.appendChild(blob);
    }
});