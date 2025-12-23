#  Monks Case | Landing Page

O **Monks Case** é uma landing page institucional responsiva desenvolvida como um estudo de caso de interface moderna para e-commerce. O foco principal é a aplicação de semântica HTML5, acessibilidade (WCAG) e programação orientada a objetos no front-end.

##  Lógica do Algoritmo (JavaScript)
O projeto utiliza Vanilla JavaScriptestruturado em classes para gerenciar o comportamento da interface:

* **Classe MobileMenu**: Gerencia o estado do menu (Aria-expanded) e detecta cliques externos para fechamento automático.
* **Classe SecurityCaptcha**: Gera números aleatórios entre 0 e 10 através do método `Math.random()` e valida o resultado da soma.
* **Classe ContactForm**: Intercepta o evento `submit`, valida campos obrigatórios e integra a verificação do Captcha antes do envio.

##  Funcionalidades
* **Menu Mobile Interativo**: Sistema de navegação adaptável com suporte a acessibilidade via aria-labels.
* **Layout Dinâmico**: Grid de produtos e categorias utilizando CSS Grid e Flexbox.
* **Validação com Captcha**: Sistema customizado de verificação matemática contra bots.
* **Responsividade Total**: Layout adaptado para Desktop, Tablet e Mobile via Media Queries.
* **Acessibilidade**: Implementação de Skip Links e suporte a `prefers-reduced-motion`.

##  Especificações Técnicas e Design
### Fidelidade ao Design (Pixel Perfect)
O projeto foi desenvolvido com foco total na fidelidade ao protótipo do Figma. Foram aplicadas as cores hexadecimais exatas e mantido o contraste de acessibilidade planejado, garantindo que a identidade visual seja preservada independente das configurações de tema do sistema operacional do usuário.

**Paleta de Cores (Figma):**
* **Fundo (Bege):** `#DFDCD5`
* **Header/Footer (Dark):** `#1A1A1A`
* **Destaque (Purple):** `#7D26C9`

## 📁 Estrutura de Pastas
```bash
/
├── assets/     # Imagens, logos e ícones
├── css/        # style.css (Variáveis, Reset e Media Queries)
├── js/         # script.js (POO e Lógica)
└── index.html  # Marcação Semântica HTML5
⚙️ Instalação e Execução
Para rodar o projeto localmente:

Clone o repositório:

Bash

git clone [https://github.com/AndrezzaCoelho/monks-case-andrezza--1--monks.git](https://github.com/AndrezzaCoelho/monks-case-andrezza--1--monks.git)
Entre na pasta:

Bash

cd monks-case-andrezza--1--monks
Execute o arquivo index.html em seu navegador.

👩‍💻 Desenvolvido por Andrezza Coelho.


### Como salvar essa versão final:
1. Abra o arquivo `README.md` no seu VS Code.
2. Apague tudo e cole o texto acima.
3. No terminal, envie a atualização final para o GitHub:
   ```bash
   git add README.md
   git commit -m "Docs: Adiciona detalhamento de design e fidelidade ao Figma"
   git push origin main
