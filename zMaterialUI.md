# MaterialUI

## 1 - Instalação MaterialUI
  - componentes adaptaveis
  - mui.com/pt/material-ui

## 2 - Temas
  - padronizamos em um unico documento todo tema
  - configurando e personalizando o tema
    - exemplo

    import { createTheme } from '@mui/material'

    const theme = createTheme({
      palette: {
        primary: {
          main: '#ff0000'
        }
      }
    });

    export default theme

    - deve ser importado dentro do arquivo principal, geralmente app.js
  
  - themeProvider nos fornece acesso a todo o objeto na aplicação

## 3 - Styled Components
  - para estilizar o proprio elemento excluindo os elementos filhos deste compomenten, dentro do component styled, usamos o & (e comercial)