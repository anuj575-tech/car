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

let targetFrameIndex = 1;
let currentRenderedFrame = 1;
const ease = 0.05; // Smoother tracking

window.addEventListener('scroll', () => {  
    const scrollTop = document.documentElement.scrollTop;
    const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    targetFrameIndex = Math.min(
        frameCount,
        Math.max(1, Math.ceil(scrollFraction * frameCount))
    );
});

const renderLoop = () => {
    if (Math.abs(targetFrameIndex - currentRenderedFrame) > 0.1) {
        currentRenderedFrame += (targetFrameIndex - currentRenderedFrame) * ease;
        updateImage(Math.round(currentRenderedFrame));
    }
    requestAnimationFrame(renderLoop);
};
renderLoop();

preloadImages();
