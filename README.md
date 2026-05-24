# Compêndio de Monstros — Old Dragon 2

Site pessoal para registrar os monstros já enfrentados na campanha de Old Dragon 2.

## Desenvolvimento local

```bash
cd compendio
npm install
npm run dev
```

Abra `http://localhost:5173`.

## Adicionar monstros

Edite `src/data/monstros.json` e coloque as imagens em `public/images/`.

Campos principais:

- `pv` — pontos de vida
- `fraquezas`, `habilidades`, `onde_encontrar`, `combate`
- `notas_jogador` — suas anotações de campanha

Depois rode `npm run build` para validar.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub (ex.: `od2-compendio-monstros`).
2. Envie este projeto para a branch `main`.
3. Em **Settings → Pages**, escolha **GitHub Actions** como source.
4. O workflow `.github/workflows/deploy.yml` publica automaticamente a cada push.

A URL ficará em:

`https://SEU_USUARIO.github.io/NOME_DO_REPOSITORIO/`

## Build manual

```bash
npm run build
npm run preview
```

Para simular o path do GitHub Pages:

```bash
VITE_BASE_PATH=/nome-do-repo/ npm run build
```
