
# App de Receitas

#### Este foi o projeto final do módulo de Front-End da **Trybe**, O projeto foi desenvolvido em grupo, onde tinhamos que acessar uma api de receitas, e criar uma aplicação onde o usuário poderia pesquisar por diversas receitas, favoritas suas receitas favoritas, sejam de comidas ou bebidas, marcar as etapas da receita escolhida que já foram concluídas e muitos mais. Ele foi projetado para a resolução mobile. testamos nossos conhecimentos  em **React**, **Javascript**, **CSS**, **manipulação de componentes**, **Manipulação de estado através do context API**, **Manipulação do local storage**, **Manipulação de rotas** e **Desenvolver um código em grupo**. 

---
<br>

Este projeto foi importante pois nele tivemos que testar diversas funcionalidades, desde a criação de rotas, tela de login, histórico de receitas, botão de favoritar as receitas, menu sugestível que fica deslizando as opções de receitas, colocamos o player de vídeo na receita, além de fazer um projeto em grupo. Utilizamos a metodologia ágil Kanban, e trabalhamos em pair programming, desta maneira pudemos compartilhar conhecimentos entre o grupo, ajudar a tirar dúvidas e assim aprender bastante durante o desenvolvimento.

<br>

**OBS**: ele foi desenvolvido para resolução mobile (360 x 640), caso queira ver ele em seu navegador, mude a resolução da tela, no google chrome, apertando a **tecla F12**, vai abrir o **modo inspecionar**, após isso aperte as teclas **CTRL + SHIFT + M**, o navegador vai pro modo responsivo, onde no topo da tela, é possível por a resolução desejada.

### **Algumas das Tecnologias utilizadas**
---
---

<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"></img>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"></img>
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"></img>
<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"></img>
<img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"></img>



---
---
<br>
<br>

## **SOBRE:**
---
 Seja bem vindo(a) ao Recipes Hunter APP. </br>
 
Quando o usuário entra em nossa aplicação, ele inicia sua jornada na tela de login, onde contém dois campos, um para **email** e outro para a **senha** e um botão **Entrar**. No primeiro campo, é necessário inserir qualquer email em **formato válido**, ou seja, ter **palavra@palavra.com**. No segundo campo, é necessário inserir alguma senha que tenha pelo menos **7 dígitos**, após isso, o botão de **Entrar** será ativado, antes de preencher os dois campos com os dados necessários, o botão fica desativado. <br>
 
Após clicar em entrar, o usuário será redirecionado para uma página, contendo um header com um ícone que leva o usuário para a página de perfil, o título da página, e um ícone de pesquisar.

A baixo, temos um filtro, em forma de botões, onde é possível que o usuário filtre as comidas pelo tipo escolhido.

Depois temos uma lista de cards, contendo a imagem e o nome de cada prato.

E por fim, temos um footer com três ícones, o primeiro muda os tipos de receitas de comida para bebidas. O segundo é o ícone explorar, ele leva o usuário a página **Explorar**, onde é possível selecionar se procura por receitas de comida, ou bebidas, ao escolher um tipo, aparecem três opções de pesquisa: 

<br>

 - **Por Ingredientes**: O usuário é levado a uma página **Explorar Ingredientes**, onde aparecem cards contendo vários tipos de ingredientes, e após selecionar um deles, o usuário é redirecionado a página de comida ou bebida, dependendo do tipo selecionado, contendo as receitas filtradas pelo ingrediente selecionado.

 - **Por Local de Origem**: O usuário é levado a uma página **Explorar Origem**, onde aparece um filtro contendo diversos países, ao clicar em um país, irão aparecer as receitas filtradas pela origem selecionada.

 - **Me Surpreenda**: Ao clicar nesta opção, uma receita aleatória irá aparecer para o usuário. <br>

Depois temos o terceiro ícone do footer, que leva o usuário a receitas de comida, pro caso do usuário estar na página de bebidas.

<br>

 Ao selecionar uma receita, o usuário irá ser redirecionado para a página contendo detalhes da receita, terá a imagem da receita, seu nome, o tipo de ingrediente da receita como subtítulo, um ícone para **compartilhar** a receita, ou seja, copiar o link da receita atual, e um botão de **favoritar**. Se o usuário favoritar a receita, o ícone irá mudar mostrando que a receita está favoritada, se ele clicar novamente, o ícone voltará ao normal, e a receita é desfavoritada. 

  </br>


 A baixo, temos os ingredientes utilizados na receita, e as instruções de preparo. Seguido de um vídeo sobre a receita, e logo abaixo temos as recomendações de receitas pro usuário.
  
  </br>

No fim da página temos o botão **Iniciar Receita**, quando o botão é clicado, o usuário é redirecionado para uma página de preparo, onde temos uma lista de ingredientes onde o usuário pode ir selecionando os que já foram feitos, só após todos os itens da lista serem selecionados, o botão **Finalizar Receita** fica disponível, após finalizar a receita, o usuário é redirecionado para a página onde contém todas as receitas feitas por ele. Nesta página tem os botões de filtro, para filtrar as receitas entre comidas ou bebidas, e o ícone para mandar o usuário para a tela de perfil.

<br>

Na tela de perfil, temos o **email** utilizado durante o login, e mais três botões: **Receitas Feitas**, **Receitas Favoritadas** e **Sair**.

<br>

Se o usuário clicar em Receitas feitas, ele será redirecionado para a tela de receitas finalizadas, se clicar no botão Receitas favoritas, ele será redirecionado para a tela de receitas favoritas, e caso o clique em sair, ele será redirecionado para a tela de login.

  Nas transições entre páginas, aparece a palavra carregando, até que as operações solicitadas estejam prontas.

<br>
<br>

## Baixando o projeto
---
Caso queira clonar para rodar localmente, após dar o gitclone em sua máquina, devemos entrar na pasta raíz do projeto e executar no terminal o comando **npm install** para instalar todas as dependências, e após tudo instalado, é preciso rodar o comando **npm start** para iniciar em seu navegador. É necessário o node.js instalado.



## Caso queira ver na prática como funciona, acesse o link abaixo: 
---
<br>

https://app-de-receitas-vercel.vercel.app/
