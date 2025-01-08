document.querySelectorAll('.faq-question').forEach((question, index) => {
    question.addEventListener('click', () => {
        console.log(`FAQ ${index + 1} clicked`);
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});
