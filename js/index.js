import { Router } from './router.js'

const router = new Router() /* ESTE É O MAPEAMENTO DE ROTA  e PAGINA. é um object literal, ou seja objeto e valor, objeto e valor, etc*/
router.add("/", "/pages/home.html") // obs, não posso crair nome de propriedade com barras,
  // por isso coloco ela entre aspas. Para acessá-la uso por exemplo
  //console.log(routes["/about"]), com colchetes e aspas  e não com pontinho, como em: console.log(routes.about)

router.add("/universo", "/pages/universo.html")
router.add("/exploracao", "/pages/exploracao.html")
router.add(404, "/pages/404.html")

router.handle() // precisa rodar na hora em que iniciar a aplicação
router.newBackground()

window.onpopstate = () => router.handle()
window.route = () => router.route()