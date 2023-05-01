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
  - npm i @storybook/theming -D

  - temos que instalar o package addons
  - npm i @storybook/addons -D

  - configurando o arquivo main.js do storybook
  - importar o css global dentro de preview.js
  - criamos o arquivo preview_head.html, e tem que ser com mesmo nome, para o storybook reconhecer o arquivo, ali colocaremos os links

## 6 - Jest Test
  - npm i -D jest
  - criamos um arquivo teste
  - função de teste , test(Função_a_ser_testada_nome, () => {aqui dentro executamos a função})
  - dentro da função executamos com o expect e depois o .toBe(aqui é o resultado esperado)
  - criamos o arquivo de config.jest
  - instalamos o npm i -D babel-jest
  - instalamos também npm i -D @babel/core
  - criamos o arquivo de config .babelrc e indicamos uma config dentro
  - importamos no arquivo de teste o React
  - o jest so executa funções java script (expect*)

  - para executar teste em componentes precisamos de ferramentas adicionais
    - como a npm i -D @testing-library/react
    - como o teste ele executa do lado do navegador é necessário que indicamos isso no config do Jest
    - para executarmos um teste em componentes usaremos 
      - npm i -D @testing-library/jest-dom
      - npm i jest-environment-jsdom 
      - toBeVisible() exemplo de função para verificar se está visível
      - setupTeste.js é para deixar padrao os imports
  
  - instalando PLOP, para criar testes automatizados
    - TextFieldProps

## 7 - Criando componente Mask
  - instalamos a biblioteca npm i react-input-maks
  - instalamos os types npm i --save-dev @types/react-input-mask

## 8 - Criando componentes de buscar profissional

## 9 - Criando lógica de buscar de cep

## 10 - Instalando Axios
  - npm install axios
  - const [cep, setCep] = useState(""),
      [error, setError] = useState(""),
      [buscaFeita, setBuscaFeita] = useState(false),
      [carregando, setCarregando] = useState(false),
      [diaristas, setDiaristas] = useState<UserShortInformationInterface[]>([]),
      [diaristasRestantes, setDiaristasRestantes] = useState(0),
      cepValidado = ValidationService.cep(cep);
      Quando montamos nesse formato, se ocorrer um erro em alguma linha, toda constante é executada novamente.
  
  - useMemo(() => {}, []), essa função ela é tida para armazenamento em cache de determinado dado, o array de dependencias é usado para ser executado quando tive alteração naquele dado, similar a useEffect()

  - try {
      const { data } = await ApiService.get<BuscaCepResponse>(`/api/diaristas/localidades?cep=${cep.replace(/\D/g, "")}`); 

      setBuscaFeita(true);
      setDiaristas(data.diaristas);
      setDiaristasRestantes(data.quantidade_diaristas);
    } catch (error) {
      setError('CEP não encontrado!');
    } finally {
      setCarregando(false);
    };
    - aqui fazemos o tratamento de busca, usando o finally que tem a função de executar mesmo que de um erro, ou que foi capturado um erro na aplicação

## 10 - Testes com Cypress
  - teste em tempo real
  - npm i -D cypress