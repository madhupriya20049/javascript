// Keep existing JavaScript and add these new functions

document.addEventListener('DOMContentLoaded', () => {
    // Previous event listeners
    handleNavigation();
    
    // Add hover effect to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    });

    
    let demo = document.getElementById("demo");
    if (demo) {
        demo.addEventListener("mouseover", () => {
            let model = document.getElementById("model");
            if (model) {
                model.style.display = "block";
            }
        });

        demo.addEventListener("mouseleave", () => {
            let model = document.getElementById("model");
            if (model) {
                model.style.display = "none";
            }
        });
    }
    
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            
            question.classList.toggle('active');
            
            
            const answer = question.nextElementSibling;
            if (question.classList.contains('active')) {
                answer.classList.add('active');
            } else {
                answer.classList.remove('active');
            }
            
           
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    otherQuestion.classList.remove('active');
                    otherQuestion.nextElementSibling.classList.remove('active');
                }
            });
        });
    });
});

function handleNavigation() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            
            if (targetId === 'support') {
                window.location.href = "https://support.spotify.com/in-en/";
            }
            if(targetId === 'download') {
                window.location.href = "https://www.spotify.com/in-en/download/windows/";
            }
            if(targetId === 'signup') {
                window.location.href = "https://www.spotify.com/in-en/signup";
            }
            if(targetId === 'login') {
                window.location.href = "https://accounts.spotify.com/en/login?continue=https%3A%2F%2Fopen.spotify.com%2F";
            }
        });
    });
}