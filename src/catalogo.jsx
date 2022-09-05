import cafeBourbon from './assets/bourbon_bzl.png'
import cafeKenia from './assets/kenia_tienda.png'
import cafeHoney from './assets/honey_tienda.png'
import cafeDarker from './assets/darker_tienda.png'
import cafeEtiopia from './assets/etiopia.png'
import bodumBrazil from './assets/bodum_brasil.jpg'
import bodumJava from './assets/bodum_java_3tz.jpg'
import bodumTravelPress from './assets/travel_press-1.jpg'
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
       descripcion: "Un tueste oscuro, francés italiano, 0 dark roast, que rompe paradigmas. Que a penas alcanza el 2do crack. Intenso, placenteramente ahumado, complejo y sutil a la vez. Así es nuestro tueste oscuro para aquellos que quieren seguir disfrutando una experiencia intensa y duradera pero a la vez con toda la gracia de beber un café que resalte las notas del grano en origen, y donde el oscuro del tueste no sea para tapar defectos sino para resaltar y exaltar la experiencia.",
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
       descripcion: "Este café proviene de la estación de lavado en Adado, ubicada en el pueblo de Shara, en la región de Yirgacheffe. Este café lleva el nombre de la tribu local, “Adado”. Los cafés en Etiopía generalmente se pueden rastrear hasta el nivel de la estación de lavado, donde los pequeños agricultores, entregan sus cerezas por peso. Se estima que hay entre 6 y 10 mil variedades de café en Etiopía. ¡Seis y diez mil! Y debido a este número colosal, no ha habido pruebas genéticas que permitan a los compradores distinguir el varietal. La belleza de estos cafés está en su misterio. En esta selección que hemos hecho, de la región de Yirgacheffe, buscamos traerte lo mejor de Etiopía y sus extravagantes notas en taza.",
       categoria: "Café",
       stock: 20,
       initial: 0,
    },
    {
      id : 6,
      nombre : "BODUM BRAZIL",
      precio : 7800,
      img : [bodumBrazil],
      descripcion: "La cafetera BRAZIL incorpora el lema de BODUM® maravillosamente: un buen diseño no tiene que ser costoso. Después de todo, queremos dar a todos la oportunidad de preparar una excelente taza de café de una manera ecológica: sólo tiene que añadir café molido grueso, agua caliente y presionar. No se necesitan filtros de papel ni vasos de plástico. La BRAZIL tiene un vaso de vidrio de borosilicato resistente al calor (el estándar para todos los émbolos de prensas francesas BODUM) y un asa y base de polipropileno, que hacen que la BRAZIL sea fácil de usar y de limpiar. Preparar café en la BRAZIL es uno de los grandes placeres de la vida.",
      categoria: "Cafeteras",
      stock: 20,
      initial: 0,
   },
   {
      id : 7,
      nombre : "BODUM CHAMB POLY",
      precio : 10980,
      img : [bodumJava],
      descripcion: "La cafetera JAVA no solo tiene un diseño clásico, sino que también infunde el mejor aroma de su café y casi no deja residuos en su taza. Simplemente agregue café molido y agua caliente, espere 4 minutos y luego empuje lentamente el émbolo hacia abajo, listo. Características y beneficios del producto: • Nuestro icónico sistema de elaboración de café saca a relucir de forma rápida y eficaz todo el sabor de los granos gruesos molidos, produciendo un delicioso café cada vez • El vidrio de borosilicato resistente al calor y que no produce manchas, no altera ni afecta el sabor natural del café, está enmarcado en plástico. • La jarra transparente hace que todo el proceso de elaboración sea visible • El émbolo de acero inoxidable evita que se escapen posos de café cuando se vierte• Más respetuoso con el medio ambiente que los sistemas tradicionales de producción de café: sin filtros de papel ni cápsulas de plástico • Fácil de usar y fácil de limpiar.*/",
      categoria: "Cafeteras",
      stock: 20,
      initial: 0,
   }, 
   {
      id : 8,
      nombre : "BODUM TRAVEL PRESS",
      precio : 7800,
      img : [bodumTravelPress],
      descripcion: "Una buena taza de café o té siempre está al alcance de tu mano con la prensa BODUM Travel Coffee and Team. Hecho de acero inoxidable de doble pared sellado al vacío con un agarre colorido, silicona, antideslizante, esta prensa de viaje permite a los amantes del café disfrutar de su fijación diaria sobre la marcha. Es rápido y fácil de usar: añade café molido grueso, vierte agua caliente, sella la tapa y llévala para llevar. Después de 4 minutos, independientemente de dónde estés, presiona hacia abajo el émbolo y disfruta. Para aquellos que prefieren el té, la prensa de café y té BODUM también funciona por igual. La prensa de café y té BODUM Travel mantiene las bebidas calientes o frías durante varias horas mientras mantiene el aroma y los sabores de una taza recién prensada.",
      categoria: "Cafeteras",
      stock: 20,
      initial: 0,
   },
   {
       id : 9,
       nombre : "KEEPCUP TÉRMICO",
       precio : 7500,
       img : [keepcupTérmico],
       descripcion: "KeepCup Térmico hecho de acero inoxidable de grado alimenticio 18/8, sellado al vacío y con doble pared para mantener su bebida caliente (o fría) durante más tiempo. Es liviano, fácil de transportar y cabe cómodamente en la mano y en los portavasos. Recipiente  para verter fácilmente con una tapa de sorbete de ajuste a presión, es encantador para beber, con la tapa puesta o sin la tapa. Pensados y diseñados en Australia para cuidar el medio ambiente y para elevar tu experiencia y el placer de tomar café sobre la marcha. No solo tiene un aspecto elegante y sofisticado, sino que el cuerpo de vidrio y corcho las convierte en una opción respetuosa con el entorno, ya que se puede reciclar fácilmente. Materiales:  Acero inoxidable y polipropileno. Capacidad: 12 oz / 340ml.",
       categoria: "Accesorios",
       stock: 20,
       initial: 0,
    },
    {
       id : 10,
       nombre : "KEEPCUP VIDRIO",
       precio : 6500,
       img : [keepcupVidrio],
       descripcion: "KeepCup pensados y diseñados en Australia para cuidar el medio ambiente y para elevar tu experiencia y el placer de tomar café sobre la marcha. No solo tiene un aspecto elegante y sofisticado, sino que el cuerpo de vidrio y corcho las convierte en una opción respetuosa con el entorno, ya que se puede reciclar fácilmente. Está hecho de vidrio templado duradero con una banda de corcho cosechado de forma sostenible para una sujeción cómoda. Como un recipiente elaborado para verter fácilmente con una tapa para sorber a presión, es encantador para beber, con o sin tapa, liviano, fácil de transportar y cabe cómodamente en la mano y en los portavasos. Materiales:  Vidrio templado  y banda de corcho. Capacidad: 12 oz / 340ml.",
       categoria: "Accesorios",
       stock: 20,
       initial: 0,
       
    },
    {
       id : 11,
       nombre : "VASO DOBLE VIDRIO",
       precio : 3160,
       img : [vasoVidrio],
       descripcion: "Vaso térmico doble vidrio para café.",
       categoria: "Accesorios",
       stock: 20,
       initial: 0,
    },
    {
       id : 12,
       nombre : "TALLER MÉTODOS DE CAFÉ PARA EL HOGAR",
       precio : 5000,
       img : [cursoCafe],
       descripcion: "CUPOS LIMITADOS Duración: 2.30 hs. Lugar: Local de City Bell. Taller especial para aficionados y para quienes quieran sacar lo mejor de sus rituales cafeteros diarios. El taller de “Métodos de café para el Hogar” es una exploración del oficio, craft y la ciencia del café de goteo alimentado por gravedad en todas sus formas que te permitirá mejorar el café que ya te estás preparando en tu casa, pero de la mejor manera posible, teniendo en cuenta varios factores como los efectos físicos de los filtros de vidrio, cerámica o plástico y los papeles de filtro. Métodos a ver: Chemex, V60, Aeropress y Prensa Francesa.",
       categoria: "Curso",
       stock: 20,
       initial: 0,
    }
  ]

export const getItem = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(catalogoDeProductos)
        reject(err => console.log(err))
    }, 2000)
})

