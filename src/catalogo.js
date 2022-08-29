import cafeBourbon from './assets/bourbon_bzl.png'
import cafeKenia from './assets/kenia_tienda.png'
import cafeHoney from './assets/honey_tienda.png'
import cafeDarker from './assets/darker_tienda.png'
import cafeEtiopia from './assets/etiopia.png'
import keepcupTérmico from './assets/keepcup2.jpg'
import keepcupVidrio from './assets/keepcup_1.jpg'
import vasoVidrio from './assets/vaso_doblevidrio.jpg'
import cursoCafe from './assets/barista_v.png'


const catalogoDeProductos = [
    {
        id: 1,
        nombre : "CAFÉ DE LA CASA",
        precio : 2700,
        peso: "250g",
        img: [cafeBourbon],
        descripcion: "Alta Mogiana es una región tradicional que cubre el noreste del Estado de Sao Paulo y algunas ciudades en el Estado de Minas de Gerais. Las excelentes condiciones naturales como la altitud, el clima y las lluvias ideales, como una amplia experiencia en producción y procesos especiales de secado en patios con descanso de 30 días, propios del café de especialidad, dan como resultado un determinado perfil de taza con un perfecto balance de dulzor y acidez de fragancias dulces caramelizadas. Perfecto para nuestro café de tolva, tanto para disfrutar solo como con leche.",
        categoria: "Café",
        stock: 20,
        initial: 0,
    },
    {
      id: 2,
      nombre: "KENIA",
      precio: 3500,
      peso: "250g",
      img: [cafeKenia],
      descripcion: "Un café Keniano se presenta sin disculpas, golpea la mesa e indica rápidamente quién es y qué gusto tiene. Así es con nuestro Kenia Especial, cuyas notas a maracuyá y ensalada frutal sorprenderá hasta al más nuevo aficionado al café de especialidad. Kenia tiene muchos elementos para producir cafés excepcionales: altitud, meticulosidad en el proceso de secado, variación climática y excelentes suelos.",
      categoria: "Café",
      stock: 20,
      initial: 0,
    },
    {
       id : 3,
       nombre : "HONEY",
       precio : 2990,
       peso: "250g",
       img : [cafeHoney],
       descripcion: "El beneficio Honey o semi-lavado es el puente entre un café húmedo y uno natural. La cereza se despulpa y luego se seca con la capa del mucílago que se mantiene en el grano. Por eso también se lo conoce como Honey por la sensación pegajosa del grano antes de secarse, similar a la miel. En taza se logra un café de gran dulzor y acidez balanceada con notas afrutadas. ",
       categoria: "Café",
       stock: 20,
       initial: 0,
    },
    
    {
       id : 4,
       nombre : "DARKER",
       precio : 3000,
       peso: "250g",
       img : [cafeDarker],
       descripcion: "",
       categoria: "Café",
       stock: 20,
       initial: 0,
    },
    {
       id : 5,
       nombre : "ETIOPÍA",
       precio : 3500,
       peso: "250g",
       img : [cafeEtiopia],
       descripcion: "",
       categoria: "Café",
       stock: 20,
       initial: 0,
    },
    {
       id : 6,
       nombre : "KEEPCUP TÉRMICO",
       precio : 7500,
       img : [keepcupTérmico],
       descripcion: "KeepCup Térmico hecho de acero inoxidable de grado alimenticio 18/8, sellado al vacío y con doble pared para mantener su bebida caliente (o fría) durante más tiempo. Es liviano, fácil de transportar y cabe cómodamente en la mano y en los portavasos. Recipiente  para verter fácilmente con una tapa de sorbete de ajuste a presión, es encantador para beber, con la tapa puesta o sin la tapa. Pensados y diseñados en Australia para cuidar el medio ambiente y para elevar tu experiencia y el placer de tomar café sobre la marcha. No solo tiene un aspecto elegante y sofisticado, sino que el cuerpo de vidrio y corcho las convierte en una opción respetuosa con el entorno, ya que se puede reciclar fácilmente. Materiales:  Acero inoxidable y polipropileno. Capacidad: 12 oz / 340ml.",
       categoria: "Accesorios",
       stock: 20,
       initial: 0,
    },
    {
       id : 7,
       nombre : "KEEPCUP VIDRIO",
       precio : 6500,
       img : [keepcupVidrio],
       descripcion: "KeepCup pensados y diseñados en Australia para cuidar el medio ambiente y para elevar tu experiencia y el placer de tomar café sobre la marcha. No solo tiene un aspecto elegante y sofisticado, sino que el cuerpo de vidrio y corcho las convierte en una opción respetuosa con el entorno, ya que se puede reciclar fácilmente. Está hecho de vidrio templado duradero con una banda de corcho cosechado de forma sostenible para una sujeción cómoda. Como un recipiente elaborado para verter fácilmente con una tapa para sorber a presión, es encantador para beber, con o sin tapa, liviano, fácil de transportar y cabe cómodamente en la mano y en los portavasos. Materiales:  Vidrio templado  y banda de corcho. Capacidad: 12 oz / 340ml.",
       categoria: "Accesorios",
       stock: 20,
       initial: 0,
       
    },
    {
       id : 8,
       nombre : "VASO DOBLE VIDRIO",
       precio : 3160,
       img : [vasoVidrio],
       descripcion: "Vaso térmico doble vidrio para café.",
       categoria: "Accesorios",
       stock: 20,
       initial: 0,
    },
    {
       id : 9,
       nombre : "TALLER MÉTODOS DE CAFÉ PARA EL HOGAR",
       precio : 5000,
       img : [cursoCafe],
       descripcion: "CUPOS LIMITADOS Duración: 2.30 hs. Lugar: Local de City Bell. Taller especial para aficionados y para quienes quieran sacar lo mejor de sus rituales cafeteros diarios. El taller de “Métodos de café para el Hogar” es una exploración del oficio, craft y la ciencia del café de goteo alimentado por gravedad en todas sus formas que te permitirá mejorar el café que ya te estás preparando en tu casa, pero de la mejor manera posible, teniendo en cuenta varios factores como los efectos físicos de los filtros de vidrio, cerámica o plástico y los papeles de filtro. Métodos a ver: Chemex, V60, Aeropress y Prensa Francesa.",
       categoria: "Curso",
       stock: 20,
       initial: 0,
    }
  ]

export const getFetch = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(catalogoDeProductos)
        reject(err => console.log(err))
    }, 2000)
})

