Monks Case | Landing Page

O Monks Case é uma landing page institucional responsiva desenvolvida como um estudo de caso de interface moderna para e-commerce. O foco principal é a aplicação de semântica HTML5, acessibilidade (WCAG) e programação orientada a objetos no front-end.

 Lógica do Algoritmo (JavaScript)
O projeto utiliza Vanilla JavaScript (ES6+) estruturado em classes para gerenciar o comportamento da interface:

Classe MobileMenu: Gerencia o estado do menu (Aria-expanded) e detecta cliques externos para fechamento automático.

Classe SecurityCaptcha: Gera números aleatórios entre 0 e 10 através do método Math.random() e valida o resultado da soma.

Classe ContactForm: Intercepta o evento submit, valida campos obrigatórios e integra a verificação do Captcha antes do envio.

   Funcionalidades
Menu Mobile Interativo: Sistema de navegação adaptável com suporte a acessibilidade via aria-labels.

Layout Dinâmico: Grid de produtos e categorias utilizando CSS Grid e Flexbox.

Validação com Captcha: Sistema customizado de verificação matemática contra bots.

Responsividade Total: Layout adaptado para Desktop, Tablet e Mobile via Media Queries.

Acessibilidade: Implementação de Skip Links e suporte a prefers-reduced-motion.

 Especificações Técnicas
Paleta de Cores (Figma)
Fundo (Bege): #DFDCD5

Header/Footer (Dark): #1A1A1A

Destaque (Purple): #7D26C9

Estrutura de Pastas
Bash

/
├── assets/  # Imagens, logos e ícones
├── css/     # style.css (Variáveis e Reset)
├── js/      # script.js (POO e Lógica)
└── index.html # Marcação Semântica
⚙️ Instalação e Execução
Para rodar o projeto localmente:

Clone o repositório:

Bash

git clone https://github.com/AndrezzaCoelho/monks-case-andrezza--1--monks.git
Entre na pasta:

Bash

cd monks-case-andrezza--1--monks
Execute o arquivo index.html em seu navegador.

👩‍💻 Autor
Desenvolvido por Andrezza Coelho.
