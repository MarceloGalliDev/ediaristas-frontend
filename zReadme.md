# ediaristas-frontend

## 1 - Git Clone
  - https://github.com/treinaweb/treinaweb-multistack-react-materialui-aplicacao-base.git
  - npm install

## 2 - Next.js
  - padrão é server side rendering 
  - npx create-next-app {nome} {adicionais} start story-book
  - adicionar "rules": {} no eslint - usamos para poder colocar a tag img nas páginas static

## 3 - TS Config
  - adicionar baseUrl = "pasta raiz"
  - adicionar paths

## 4 - Material UI
  - instalar material ui
  - npm i @mui/material @emotion/react @emotion/styled  
  - configurar a inicialização pelo server side
    - copiar parte da configuração do site da UI Material
  - npm i --save @emotion/server @emotion/css
  - criando theme
  - modificando o theme padrão da aplicação, no site do material UI tem o default theme e os paramêtros padrões

## 5 - Storybook
  - npx storybook init
  - npx storybook@next upgrade --prerelease
  - npm install --save-dev css-loader
  - npm install --save-dev style-loader

  - adicionar arquivo .babelrc (copiar o código de dentro)
  - adicionar arquivo webpack.config.js (copiar o código de dentro)
  - adicionar no .eslintrc.json next/babel

  - usado para monitorar e fazer gestão dos componentes

  - por padrao o storybook, não possui a função theme, temos que instalar
  - npm i @storybook/theming

  - temos que instalar o package addons
  - npm i @storybook/addons

  - configurando o arquivo main.js do storybook
  - importar o css global dentro de preview.js
  - criamos o arquivo preview_head.html, e tem que ser com mesmo nome, para o storybook reconhecer o arquivo, ali colocaremos os links

