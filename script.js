// Add smooth scrolling to nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add simple animation to project cards
const projects = document.querySelectorAll('.project');

projects.forEach(project => {
    project.addEventListener('mouseover', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.transition = 'transform 0.3s ease';
    });

    project.addEventListener('mouseout', function() {
        this.style.transform = 'translateY(0)';
    });
});