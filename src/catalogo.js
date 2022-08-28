import cafeBourbon from './assets/bourbon_bzl.png'
import cafeKenia from './assets/kenia_tienda.png'
import cafeHoney from './assets/honey_tienda.png'
import cafeDarker from './assets/darker_tienda.png'
import cafeEtiopia from './assets/etiopia.png'
import keepcupTérmico from './assets/keepcup2.jpg'
import keepcupVidrio from './assets/keepcup1.jpg'
import vasoVidrio from './assets/vaso_doblevidrio.jpg'
import cursoCafe from './assets/barista_v.png'


const catalogoDeProductos = [
    {
        id: 1,
        nombre : [cafeBourbon],
        precio : 2700,
        peso: "250g",
        img: "./assets/bourbon_bzl.png",
        descripcion: "",
        categoria: "Café"
    },
    {
      id: 2,
      nombre: [cafeKenia],
      precio: 3500,
      peso: "250g",
      img: "./assets/kenia_tienda.png",
      descripcion: "Un café Keniano se presenta sin disculpas, golpea la mesa e indica rápidamente quién es y qué gusto tiene. Así es con nuestro Kenia Especial, cuyas notas a maracuyá y ensalada frutal sorprenderá hasta al más nuevo aficionado al café de especialidad. Kenia tiene muchos elementos para producir cafés excepcionales: altitud, meticulosidad en el proceso de secado, variación climática y excelentes suelos.",
      categoria: "Café"
    },
    {
       id : 3,
       nombre : [cafeHoney],
       precio : 2990,
       peso: "250g",
       img : "./assets/honey_tienda.png",
       descripcion: "El beneficio Honey o semi-lavado es el puente entre un café húmedo y uno natural. La cereza se despulpa y luego se seca con la capa del mucílago que se mantiene en el grano. Por eso también se lo conoce como Honey por la sensación pegajosa del grano antes de secarse, similar a la miel. En taza se logra un café de gran dulzor y acidez balanceada con notas afrutadas. ",
       categoria: "Café"
    },
    
    {
       id : 4,
       nombre : [cafeDarker],
       precio : 3000,
       peso: "250g",
       img : "./assets/darker_tienda.png",
       descripcion: "",
       categoria: "Café"
    },
    {
       id : 5,
       nombre : [cafeEtiopia],
       precio : 3500,
       peso: "250g",
       img : "./assets/etiopia.png",
       descripcion: "",
       categoria: "Café"
    },
    {
       id : 6,
       nombre : [keepcupTérmico],
       precio : 7500,
       img : "./assets/keepcup2.jpg",
       descripcion: "KeepCup Térmico hecho de acero inoxidable de grado alimenticio 18/8, sellado al vacío y con doble pared para mantener su bebida caliente (o fría) durante más tiempo. Es liviano, fácil de transportar y cabe cómodamente en la mano y en los portavasos. Recipiente  para verter fácilmente con una tapa de sorbete de ajuste a presión, es encantador para beber, con la tapa puesta o sin la tapa. Pensados y diseñados en Australia para cuidar el medio ambiente y para elevar tu experiencia y el placer de tomar café sobre la marcha. No solo tiene un aspecto elegante y sofisticado, sino que el cuerpo de vidrio y corcho las convierte en una opción respetuosa con el entorno, ya que se puede reciclar fácilmente. Materiales:  Acero inoxidable y polipropileno. Capacidad: 12 oz / 340ml.",
       categoria: "Accesorios"
    },
    {
       id : 7,
       nombre : [keepcupVidrio],
       precio : 6500,
       img : "./assets/keepcup1.jpg",
       descripcion: "KeepCup pensados y diseñados en Australia para cuidar el medio ambiente y para elevar tu experiencia y el placer de tomar café sobre la marcha. No solo tiene un aspecto elegante y sofisticado, sino que el cuerpo de vidrio y corcho las convierte en una opción respetuosa con el entorno, ya que se puede reciclar fácilmente. Está hecho de vidrio templado duradero con una banda de corcho cosechado de forma sostenible para una sujeción cómoda. Como un recipiente elaborado para verter fácilmente con una tapa para sorber a presión, es encantador para beber, con o sin tapa, liviano, fácil de transportar y cabe cómodamente en la mano y en los portavasos. Materiales:  Vidrio templado  y banda de corcho. Capacidad: 12 oz / 340ml.",
       categoria: "Accesorios"
    },
    {
       id : 8,
       nombre : [vasoVidrio],
       precio : 3160,
       img : "./assets/vaso_doblevidrio.jpg",
       descripcion: "Vaso térmico doble vidrio para café.",
       categoria: "Accesorios"
    },
    {
       id : 9,
       nombre : [cursoCafe],
       precio : 5000,
       img : "./assets/barista_v.png",
       descripcion: "CUPOS LIMITADOS Duración: 2.30 hs. Lugar: Local de City Bell. Taller especial para aficionados y para quienes quieran sacar lo mejor de sus rituales cafeteros diarios. El taller de “Métodos de café para el Hogar” es una exploración del oficio, craft y la ciencia del café de goteo alimentado por gravedad en todas sus formas que te permitirá mejorar el café que ya te estás preparando en tu casa, pero de la mejor manera posible, teniendo en cuenta varios factores como los efectos físicos de los filtros de vidrio, cerámica o plástico y los papeles de filtro. Métodos a ver: Chemex, V60, Aeropress y Prensa Francesa.",
       categoria: "Curso"
    }
  ]

export const getFetch = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(catalogoDeProductos)
        reject(err => console.log(err))
    }, 2000)
})

