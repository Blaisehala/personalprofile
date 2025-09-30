// Add smooth animations and interactions
document.addEventListener('DOMContentLoaded', function() {
    // Animate sections on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = '0.2s';
                entry.target.style.animationFillMode = 'both';
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.section, .profile-section').forEach(section => {
        observer.observe(section);
    });

    // Add click effects to skill tags
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-2px)';
            }, 150);
        });
    });

    // Profile image hover effect
    const profileImg = document.getElementById('profileImg');
    profileImg.addEventListener('mouseenter', function() {
        this.style.filter = 'brightness(1.1)';
    });
    
    profileImg.addEventListener('mouseleave', function() {
        this.style.filter = 'brightness(1)';
    });
});

function showHireAlert() {
    alert('Contact page coming soon.');
}

function toggleSection(sectionId) {
    const content = document.getElementById(sectionId);
    const icon = document.getElementById(sectionId + '-icon');
    
    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        icon.classList.remove('expanded');
        icon.textContent = '▼';
    } else {
        content.classList.add('expanded');
        icon.classList.add('expanded');
        icon.textContent = '▲';
    }
}

// Add some interactive features
let skillClickCount = 0;
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('click', function() {
        skillClickCount++;
        if (skillClickCount ===5) {
            const newSkill = document.createElement('span');
            newSkill.className = 'skill-tag';
            newSkill.textContent = 'Easter Egg Found! 🎉';
            newSkill.style.background = '#fbbf24';
            newSkill.style.color = '#92400e';
            document.querySelector('.skills-container').appendChild(newSkill);
            skillClickCount = 0;
        }
    });
});


// Visitor counter 
async function updateVisitorCounter() {
    try {
        const response = await fetch('https://your-api-url/visitor-count', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json();
        document.getElementById('visitor-count').textContent = data.count;
    } catch (error) {
        console.error('Error updating visitor counter:', error);
    }
}

// Call when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Your existing code...
    updateVisitorCounter();
});