## Currículo profissional (site estático)

Visualização:
https://mhenrique94.github.io/resume/

Este projeto agora usa apenas HTML, CSS e JavaScript.

### Rodar localmente

1. Acesse a raiz do projeto.
2. Rode:

```bash
python3 -m http.server 8000
```

3. Abra no navegador:
http://localhost:8000

### Estrutura

- `index.html`: conteúdo principal do currículo bilíngue (PT/EN)
- `styles.css`: layout e estilo minimalista
- `script.js`: alternância de idioma com persistência no navegador

### Deploy

O deploy é feito via GitHub Actions para GitHub Pages, sem etapa de build.
