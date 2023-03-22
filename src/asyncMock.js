const products = [{
    id: '1',
    name: 'Horizon Forbidden West',
    price: '$1500',
    platform: 'Ps5',
    category: 'videojuegos',
    img: 'https://m.media-amazon.com/images/I/81fGOVqHjuL._AC_SL1500_.jpg',
    stock: 25,
    description: 'Únete a Aloy mientras desafía el Oeste Prohibido, una frontera majestuosa, aunque peligrosa, en la que se ocultan nuevas y misteriosas amenazas'
},
{
    id: '2',
    name: 'Ratchet & Clank: Rift Apart ',
    price: '$1200',
    platform: 'Ps5',
    category: 'videojuegos',
    img: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/8163O-hji+S.jpg',
    stock: 25,
    description: 'Salta de una dimensión a otra con Ratchet y Clank para derrotar a un emperador malvado de otra realidad. Explora a toda velocidad una variedad de mundos llenos de acción, gráficos alucinantes y un arsenal demencial, con la llegada explosiva de los aventureros intergalácticos a la consola PS5™. '
},

{
    id: '3',
    name: 'DualShock 5',
    price: '$1300',
    platform: 'Ps5',
    category: 'accesorios',
    img: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71lPDuOqgKL.jpg',
    stock: 25,
    description: 'El control inalámbrico DualSense para PS5 ofrece respuesta háptica inmersiva, gatillos adaptativos dinámicos y un micrófono integrado, todo en un diseño icónico. Siente la respuesta física a tus acciones en el juego con los accionadores dobles que reemplazan a los tradicionales motores de vibración. '
},
{
    id: '4',
    name: 'Consola Playstation 5',
    price: '$11500',
    platform: 'Ps5',
    category: 'consolas',
    img: 'https://m.media-amazon.com/images/I/61gimpyy0UL._AC_SX466_.jpg',
    stock: 25,
    description: 'Con tu consola PlayStation 5 tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos.'
}

]
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1500)
    })
}


export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 1500)
    })
}