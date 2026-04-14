// Select all FAQ items
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {

        const isOpen = answer.style.display === 'block';

        // Close all
        faqItems.forEach(i => {
            i.querySelector('.faq-answer').style.display = 'none';
        });

        // Open only if it was previously closed
        if (!isOpen) {
            answer.style.display = 'block';
        }
    });
});