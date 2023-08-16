export class Router {

  routes = {}

  add(routeName, page){
    this.routes[routeName] = page // Aqui já criei a variável, aliás, o OBJETO routes já atribuindo nome a ele com o [routeName], e valor com o = page;

  }

  route(ev){ // o ev é o click já citado no onclick
    ev = ev || window.ev
    ev.preventDefault()

    window.history.pushState({},'', ev.target.href) //ISTO É PARA O PATHNAME MUDAR. ev.target indica quem disparou o ev. Target é alvo, é quem disparou.
    //pushState empurra o estado pro histórico.
    // e quem disparou foi o <a>, que tem a propriedade href, por isso quero pegar o href e colocar no meu histórico.
    // É COM ESSA LINHA ANTERIOR que eu indico que estou mudando de página
    
    this.handle()
  }

  handle(){ /* VAI MUDAR O CONTEÚDO DO APP, PEGANDO ALGUMA DAS PÁGINAS CLICADAS*/
    const {pathname} = window.location /* pathname é o "/algumacoisa"  */ /*esse tipo de escrita é chamado de desestruturação*/
    const route = this.routes[pathname] || this.routes[404] /* isso cria uma rota, se nã otiver, mostra o 404*/

    /*fetch(route).then((data) => {}) //para pegar nossa página. como é uma promessa, vai ser executado assincronamente. 
    // .then significa "assim que eu voltar com essa função fetch... ". No caso, após voltar, então(then) vai rodar a função do callback(data) e continua a aplicação dentro da função indicada em " => { }".
    */

    fetch(route) // é uma forma de pegarmos dados no front-end (?acho que é isso?)
    .then(data => data.text()) // aqui a função me retorna direto o data.text(), dessa forma: return data.text()
    .then(html => {
      document.querySelector('#app').innerHTML = html // é como se eu estivesse pegando o elemento #app e adicionaar meu html "pescado pelas rotas que cliquei" dentro dele. 
    })
  }

  newBackground() {
    const {pathname} = window.location 

    if (pathname == "/") {
      document.body.style.backgroundImage = 'url(./assets/mountains-universe-1.png)'
      console.log(pathname)
    
    } else if (pathname == "/universo") {
      document.body.style.backgroundImage = 'url(./assets/mountains-universe-2.png)'
      console.log(pathname)

    } else if (pathname == "/exploracao") {
      document.body.style.backgroundImage = 'url(./assets/mountains-universe-3.png)'
      console.log(pathname)

    } else {
      document.body.style.backgroundImage = 'url(./assets/404bg.jpg)'
      console.log(pathname)
    }
  }

}
