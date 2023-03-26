# REACT

## 1 - React DOM
  - recebe os elementos react e transforma em linguagem html e javascript
  
  - exemplo
    - .html
    <div id='app'>

    </div>

    - .jsx
    const container = document.getElementById('app');
    const element = React.createElement('h1', {title:'exemplo'}, 'Conteúdo');

    ReactDOM.render(element, container)

## 2 - JSX
  - É o formato de renderização do HTML, onde podemos fazer dentro do arquivo de render() no formato HTML
  - a palavra reservada class se torna className="" no arquivo JSX

## 3 - Comandos
  - no terminal do navegador, usamos navigator.onLine para verificar se o user está online