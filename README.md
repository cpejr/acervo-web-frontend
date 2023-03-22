# acervo-web-frontend
Frontend do projeto 
### Estrutura de Diretórios

    -> src
      -> assets
	    -> components
      -> hooks
      -> layouts
      -> pages
      -> services
        -> api
      -> stores
      -> styles
      -> utils

**-> src**
* Pasta onde ficará código criado por nós, sendo ele dividido da seguinte forma:

  **-> assets**
  * Pasta em que ficarão imagens e dados utilizados durante o processo de desenvolvimento, como imagens de teste ou arquivos, ou para o produto final, como a logo e outras imagens que não precisarão ser armazenadas em outro lugar (backend).

	**-> components**
	* Pasta em que ficarão os components da aplicação frontend, ou seja, tudo aquilo que a gente definiu como conteúdos das nossas páginas que de alguma forma possam ser reaproveitadas e consigam nos ajudar quanto à produtividade e organização. Exemplo de componentes são botões e caixas de texto que são usadas em mais de uma página, ajudando-nos assim a gerar um padrão.
	
	**-> hooks**
	* Pasta em que ficam funções simples que podemos reutilizar várias vezes.
    **-> query**
    * Pasta em que guardamos funções de comunicação com o backend

  **-> pages**
  * Pasta onde ficam todas as páginas do nossos sistema, sendo que cada pasta corresponde a uma página. Normalmente, dentro de cada pasta desta, encontram-se o código JavaScript da página, o arquivo de estilização específico deste primeiro e o arquivo **index.js** de exportação desta página para uso em outras partes do código.  
  
	**-> services**
  * Pasta em que intermediam a conversa do backend e do frontend, deixando tal de forma mais organizada. Tal processo é realizado com o auxílio das seguintes pastas:
    **-> api**
    * Pasta que possui a última etapa da requisição do backend.

	**-> Utils**
	* Pasta onde ficam arquivos utilitários dentro do sistema, como por exemplo códigos que contém de forma componentizada.
	
### Ferramentas utilizadas
* [ReactJS](https://pt-br.reactjs.org/ "ReactJS") -> Biblioteca JavaScript de código aberto que usamos para criação de interfaces de usuário em páginas web.

* [Vite](https://vitejs.dev/ "Vite") -> O Vite é uma ferramenta para o frontend JavaScript com a qual você pode gerar estrutura de código de vários frameworks como React, Vanilla, Vue, Svelte e outros.

* [ESLint](https://eslint.org/docs/user-guide/getting-started "ESLint") -> Ferramenta utilizada para padronização do código e do estilo aplicados.

* [Prettier](https://prettier.io/docs/en/index.html "Prettier") -> O prettier é um formatador de código que ajuda a padronizar o jeito que escrevemos o código.

* [Husky](https://typicode.github.io/husky/#/ "Husky") -> O husky serve para o usuário poder configurar hooks. Os hooks são scripts automatizados que executam comando quando é chamado algum comando no git.
