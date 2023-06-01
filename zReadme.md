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
- o jest so executa funções java script (expect\*)

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

## 11 - Testes com Cypress
- teste em tempo real
- npm i -D cypress

## 12 - Arquivos .ENV
- arquivos criados com .env.local sera ignorado ao subir pro build e tbm no git
- podemos criar 3 tipos e todos pode ser colocado .local
- .env
- .env.development
- .env.production

## 13 - Prettier
  - npm i -D prettier
  - npm i -D eslint-config-prettier
  - npm i -D eslint-plugin-prettier

  - façamos todas as configurações e integração com o eslint
  - instalaremos a extensão editorconfig
    - com botão direito na raiz do projeto criaremos o arquivo .editorconfig

## 14 - Criando componentes de formulário
- componentes de serviços disponibilizados
- componentes de dados pessoais

## 15 - Instalando UuID
- biblioteca para geração de id's universais únicos
- npm i uuid
- npm i --save-dev @types/uuid
- vamos usar a função uuid dentro de um useEffect pelo fato que se eu não fizer dessa maneira no NEXT.JS ele vai acabar executando duas vezes, um vez no server side e outra na client side
- esse if window é para verificação se a janela esta aberta sem uma seleção no botão

## 16 - Verificação de password, strenght
- npm i check-password-strength
  - Property	Desc.
    id	0 = Too weak, 1 = Weak & 2 = Medium, 3 = Strong
    value	Too weak, Weak, Medium & Strong
    contains	lowercase, uppercase, symbol and/or number
    length	length of the password

## 17 - Criação de componente de side
- Quando criamos um map dentro de outro map, podemos utilizar o mesmo nome de index e variaveis desde que esteja em escopos diferentes

## 18 - React Hook Form
- npm i react-hook-form
- utilizamos o hook:
  - useForm() 
    - cria o formulário, o contexto
    - register = nos retorna um value, onChange, onBlur
      - value = valor do botão
      - onChange = acontece quando eu digito
      - onBlur = quando eu tiro o foco do botão (target)
      - {...register('nameProduto', {required: true})}
    - button = quando usamos um button, e usamos o enviar, acionamos a função onSubmit={handleSubmit(nameFunction)}
    exemplo:
      const {register, handleSubmit} = useForm();
  - formState()
    - fica observando as validações do formulário
  - useFormContext
    - não temos o resolver nesse hook
    - é usado para recuperar o useForm()
    - função watch, fica observando mudanças de dados

- usando o yup
  - npm i yup
  - shape() = corpo do objeto
    - produto: yup.object().shape()
    - tenho que definir o tipo da propriedade

- para fazer a ligação do yup com hook
  - npm i @hookform/resolvers
  - método yupResolver
  - useForm() possui uma função para junção, resolver: yupResolver(campo ou item)
  - quando foi renderizar um elemento na confirmação dentro de outro elemento, temos que usar o controller

- plataforma de pagamento
- npm i pagarme
- defined() é um método que verifica se tudo está preenchido conforme proposto

- componente de UserForm

# 19 - Formulário de contratação

# 20 - Criando contexto
  - criamos a pasta
  - criamos a função provider

  - criando REDUCER
    - instalando IMMER
  
  - userReducer do React
    - é bem parecido com useState, so que ele permite alterar campos especificos