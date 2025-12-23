document.addEventListener('DOMContentLoaded', () => {
    console.log('✓ JavaScript carregado com sucesso!');

    class MobileMenu {
        constructor(toggleBtn, menu) {
            this.toggleBtn = toggleBtn;
            this.menu = menu;
            this.init();
        }

        init() {
            if (!this.toggleBtn || !this.menu) return;
            this.toggleBtn.addEventListener('click', () => this.toggle());
            document.addEventListener('click', (e) => this.handleOutsideClick(e));
        }

        toggle() {
            const isOpen = this.toggleBtn.getAttribute('aria-expanded') === 'true';
            this.setOpen(!isOpen);
        }

        setOpen(isOpen) {
            this.toggleBtn.setAttribute('aria-expanded', isOpen);
            this.toggleBtn.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
        }

        handleOutsideClick(e) {
            const isClickInside = this.menu.contains(e.target) || this.toggleBtn.contains(e.target);
            if (!isClickInside) this.setOpen(false);
        }
    }

    class SecurityCaptcha {
        constructor(displayEl, inputEl) {
            this.displayEl = displayEl;
            this.inputEl = inputEl;
            this.n1 = 0;
            this.n2 = 0;
            this.correctResult = 0;
            this.init();
        }

        init() {
            if (this.displayEl) this.generateNewChallenge();
        }

        generateNewChallenge() {
            this.n1 = Math.floor(Math.random() * 10);
            this.n2 = Math.floor(Math.random() * 10);
            this.correctResult = this.n1 + this.n2;
            this.displayEl.textContent = `${this.n1} + ${this.n2}`;
        }

        validate(userAnswer) {
            return parseInt(userAnswer, 10) === this.correctResult;
        }

        reset() {
            if (this.inputEl) this.inputEl.value = '';
            this.generateNewChallenge();
        }
    }

    class ContactForm {
        constructor(formEl, captcha) {
            this.form = formEl;
            this.captcha = captcha;
            this.feedback = document.getElementById('form-feedback');
            this.init();
        }

        init() {
            if (!this.form) return;
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }

        handleSubmit(e) {
            e.preventDefault();
            if (!this.validateForm()) {
                this.showFeedback('Por favor, preencha todos os campos obrigatórios.', 'error');
                return;
            }
            const captchaInput = document.getElementById('campoResposta');
            if (!this.captcha.validate(captchaInput.value)) {
                this.showFeedback('A resposta da verificação de segurança está incorreta.', 'error');
                this.captcha.reset();
                return;
            }
            this.showFeedback('Formulário enviado com sucesso!', 'success');
            this.form.reset();
            this.captcha.generateNewChallenge();
        }

        validateForm() {
            const inputs = this.form.querySelectorAll('input[required]');
            return Array.from(inputs).every((input) => input.value.trim() !== '');
        }

        showFeedback(message, type) {
            if (!this.feedback) return;
            this.feedback.textContent = message;
            this.feedback.className = `form-feedback ${type}`;
            setTimeout(() => {
                this.feedback.className = 'form-feedback';
            }, 5000);
        }
    }

    const mobileMenu = new MobileMenu(document.getElementById('btnMobile'), document.getElementById('menuPrincipal'));
    const captcha = new SecurityCaptcha(document.getElementById('displaySoma'), document.getElementById('campoResposta'));
    const contactForm = new ContactForm(document.getElementById('formularioContato'), captcha);
});