# NEXT.JS
- npx create-next-app e-diariastas --ts
## 1 - Estrutura
  - Pasta Pages, é tida como arquivo HTML, logo se for necessário criar outra página, basta criar um arquivo com nome que deseja .js, e pronto, você terá sua página html com nome desejado.
  - Quando adicionamos o underline (_) antes do nome do arquivo, traduzimos para a estrutura não ler como página HTML.
  - Pasta Public, fica os arquivos estáticos.
  - eslint é um arquivo de padronização

## 2 - Criando API
  - dentro da pasta Api, necessário para criar um endpoint
  - para o arquivo poder receber uma propriedade, e de forma que o next.js entenda, colocamos o nome do arquivo dentro de [], assim o tornamos uma variável
  - exemplo

  const meusCursos = [
    {id:1, nome: 'React.js'},
    {id:2, nome: 'Next.js'}
  ]

  export default function Cursos(request, response) {
    const id = request.query.cursoId  //aqui é o nome do arquivo dentro da pasta api com []

    const curso = meusCursos.find(curso => curso.id == id) //aqui usamos o find para buscar o id na query seja retornado true em caso que seja correspondente
    if(curso){
      response.status(200).json(curso)
    } else {
      response.status(404).json({message: "Curso não encontrado!"})
    }
  }

## 3 - Criando páginas
  - so de criar um arquivo com nome dentro da pasta pages, ele já é acessível no endpoint
  - é necessário ter um componente react sendo exportado por default
  - para criar uma query dinâmica, é so colocar dentro de um colchete []
  - aninhando a URL, so criar uma pasta com nome desejado e arrastar o arquivo la dentro
  > useRouter
    - usamos esse hook para poder trabalhar a questão da query dinâmica
    - aqui temos o:
      - asPath = que contém o caminho após a url padrão
      - query = que armazena o ID por exemplo
      - e muitas outras funcionalidades

## 4 - ServerSide
  - Utilizamos a função com nome de getServerSideProps()
  - utilizamos o contexto para receber a props, query

## 5 - Page Static
  - Utilizamos a função getStaticProps() e getStaticPaths()
    - getStaticPaths() - responsável pela mapeamento de objetos da static
    - getStaticProps() - responsável pela requisição
