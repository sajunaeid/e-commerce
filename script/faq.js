// script used for FAQs section start
const faqItems = document.querySelectorAll('.faq-item');

function closeAllFaqs() {
    faqItems.forEach(item => {
        item.classList.remove('active');
    });
}

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', (event) => {
        if (!item.classList.contains('active')) {
            closeAllFaqs();
        }
        item.classList.toggle('active');
    });
});

document.addEventListener('click', (event) => {
    const isClickInsideFaq = event.target.closest('.faq-item');
    if (!isClickInsideFaq) {
        closeAllFaqs();
    }
});
// script used for FAQs section end
