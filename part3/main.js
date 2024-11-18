
const socialIcons = document.querySelectorAll('.social-icon');

socialIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'scale(1.5)';
    });

    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'scale(1)';
    });
});

window.onload = function() {
    document.body.style.opacity = 0;
    let fadeEffect = setInterval(function() {
        if (!document.body.style.opacity) {
            document.body.style.opacity = 0;
        }
        if (document.body.style.opacity < 1) {
            document.body.style.opacity = parseFloat(document.body.style.opacity) + 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 100);
};


const jobTitles = document.querySelectorAll('.job h3');

jobTitles.forEach(title => {
    title.addEventListener('click', () => {
        title.style.fontSize = '30px';
        title.style.color = '#ff6347';
    });
});
