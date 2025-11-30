// Student Name: Jakub
// Date: 12/03/2025
// File Name: script.js

document.addEventListener('DOMContentLoaded', function() {

    const articles = document.querySelectorAll('.clickable-article');
    articles.forEach((article, index) => {
        const titleButton = article.querySelector('.article-title');
        const contentPanel = article.querySelector('.article-content');
        const panelId = `article-content-${index}`;

        if (titleButton && contentPanel) {
             contentPanel.id = panelId;
            titleButton.setAttribute('aria-controls', panelId); titleButton.setAttribute('aria-expanded', 'false');
            if (contentPanel.classList.contains('active')) {
                contentPanel.style.maxHeight = contentPanel.scrollHeight + "px"; titleButton.setAttribute('aria-expanded', 'true');
            } else {
                contentPanel.style.maxHeight = null; }

            titleButton.addEventListener('click', () => {
                const isActive = contentPanel.classList.contains('active');

                articles.forEach(otherArticle => {
                    if (otherArticle !== article) {
                         const otherContent = otherArticle.querySelector('.article-content');
                        const otherTitle = otherArticle.querySelector('.article-title');
                        if (otherContent && otherContent.classList.contains('active')) {
                            otherContent.classList.remove('active');
                             otherContent.style.maxHeight = null;
                            if (otherTitle) {
                                otherTitle.classList.remove('active');
                                 otherTitle.setAttribute('aria-expanded', 'false');
                            }
                            otherArticle.classList.remove('active');
                        }
                     }
                }); article.classList.toggle('active', !isActive);
                titleButton.classList.toggle('active', !isActive);
                titleButton.setAttribute('aria-expanded', !isActive);
                contentPanel.classList.toggle('active', !isActive);

                if (!isActive) {
                    contentPanel.style.maxHeight = contentPanel.scrollHeight + "px"; } else {
                    contentPanel.style.maxHeight = null; }
            });
        }
    });
    const faqItems = document.querySelectorAll('.faq-item'); faqItems.forEach((item, index) => {
        const questionButton = item.querySelector('.faq-question');
        const answerDiv = item.querySelector('.faq-answer');
        const panelId = `faq-answer-${index}`;

        if (questionButton && answerDiv) {
            answerDiv.id = panelId;
            questionButton.setAttribute('aria-controls', panelId);


             const isInitiallyActive = answerDiv.classList.contains('active');
            questionButton.setAttribute('aria-expanded', isInitiallyActive.toString());
            if (isInitiallyActive) {
                answerDiv.style.padding = '15px 20px';
                answerDiv.style.maxHeight = answerDiv.scrollHeight + "px";
            } else {
                 answerDiv.style.maxHeight = null;
                answerDiv.style.padding = '0 20px';
            }

            questionButton.addEventListener('click', () => {
                const isActive = answerDiv.classList.contains('active');
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        const otherQuestion = otherItem.querySelector('.faq-question');
                        if (otherAnswer && otherAnswer.classList.contains('active')) {
                            otherAnswer.classList.remove('active');
                            otherAnswer.style.maxHeight = null;
                             otherAnswer.style.padding = '0 20px';
                            if (otherQuestion) {
                                otherQuestion.classList.remove('active');
                                 otherQuestion.setAttribute('aria-expanded', 'false');
                            }
                        }
                    }
                 });

                questionButton.classList.toggle('active', !isActive); questionButton.setAttribute('aria-expanded', !isActive);
                answerDiv.classList.toggle('active', !isActive);

                if (!isActive) {
                    answerDiv.style.padding = '15px 20px';
                    answerDiv.style.maxHeight = answerDiv.scrollHeight + "px";
                } else {
                    answerDiv.style.maxHeight = null;
                    setTimeout(() => {
                        if (!answerDiv.classList.contains('active')) {
                            answerDiv.style.padding = '0 20px';
                         }
                    }, 400);
                }
            }); }
    });


    const extraItems = document.querySelectorAll('.extra-item'); extraItems.forEach((item, index) => {
        const requirementButton = item.querySelector('.extra-requirement');
        const answerDiv = item.querySelector('.extra-answer');
        const panelId = `extra-answer-${index}`;

        if (requirementButton && answerDiv) {
            answerDiv.id = panelId;
            requirementButton.setAttribute('aria-controls', panelId);


             const isInitiallyActive = answerDiv.classList.contains('active');
            requirementButton.setAttribute('aria-expanded', isInitiallyActive.toString());
            if (isInitiallyActive) {
                answerDiv.style.padding = '15px 20px';
                answerDiv.style.maxHeight = answerDiv.scrollHeight + "px";
            } else {
                 answerDiv.style.maxHeight = null;
                answerDiv.style.padding = '0 20px';
            }

            requirementButton.addEventListener('click', () => {
                const isActive = answerDiv.classList.contains('active');
                extraItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        const otherAnswer = otherItem.querySelector('.extra-answer');
                        const otherRequirement = otherItem.querySelector('.extra-requirement');
                        if (otherAnswer && otherAnswer.classList.contains('active')) {
                            otherAnswer.classList.remove('active');
                            otherAnswer.style.maxHeight = null;
                             otherAnswer.style.padding = '0 20px';
                            if (otherRequirement) {
                                otherRequirement.classList.remove('active');
                                 otherRequirement.setAttribute('aria-expanded', 'false');
                            }
                        }
                    }
                 });

                requirementButton.classList.toggle('active', !isActive); requirementButton.setAttribute('aria-expanded', !isActive);
                answerDiv.classList.toggle('active', !isActive);

                if (!isActive) {
                    answerDiv.style.padding = '15px 20px';
                    answerDiv.style.maxHeight = answerDiv.scrollHeight + "px";
                } else {
                    answerDiv.style.maxHeight = null;
                    setTimeout(() => {
                        if (!answerDiv.classList.contains('active')) {
                            answerDiv.style.padding = '0 20px';
                         }
                    }, 400);
                }
            }); }
    });


    const contactForm = document.getElementById('contact-form'); const thankYouMessage = document.getElementById('form-thank-you');
    if (contactForm && thankYouMessage) {
        contactForm.addEventListener('submit', function(event) {
            let isValid = true;
            const requiredInputs = contactForm.querySelectorAll('[required]');

            requiredInputs.forEach(input => {
                if (!input.value.trim()) {
                     isValid = false;
                    input.style.borderColor = 'red';
                } else {
                    input.style.borderColor = '';

                     }
            });


            const emailInput = contactForm.querySelector('input[type="email"][required]');
            if (emailInput && emailInput.value.trim() && !/^\S+@\S+\.\S+$/.test(emailInput.value)) {
                isValid = false;
                 emailInput.style.borderColor = 'red';
            }

            if (isValid) {
                setTimeout(() => {
                    contactForm.style.display = 'none'; thankYouMessage.style.display = 'block';
                    thankYouMessage.setAttribute('tabindex', '-1');
                    thankYouMessage.focus();
                }, 100);
            } else {
                event.preventDefault();
                const firstInvalid = contactForm.querySelector('[style*="border-color: red"]'); if (firstInvalid) {
                    firstInvalid.focus(); }
            }
        }); }
});