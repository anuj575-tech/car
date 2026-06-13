const canvas = document.getElementById('hero-lightpass');
const context = canvas.getContext('2d');

const frameCount = 300;
const currentFrame = index => (
    `frames/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`
);

const preloadImages = () => {
    for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
    }
};

const img = new Image();
img.src = currentFrame(1);
canvas.width = 1920; // Default width, will be updated when image loads
canvas.height = 1080; // Default height

img.onload = function() {
    canvas.width = img.width;
    canvas.height = img.height;
    context.drawImage(img, 0, 0);
}

const updateImage = index => {
    img.src = currentFrame(index);
    context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () => {  
    const scrollTop = document.documentElement.scrollTop;
    const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min(
        frameCount,
        Math.ceil(scrollFraction * frameCount)
    );
    
    // Make sure we don't request frame 0
    if (frameIndex > 0) {
        requestAnimationFrame(() => updateImage(frameIndex));
    }
});

preloadImages();
