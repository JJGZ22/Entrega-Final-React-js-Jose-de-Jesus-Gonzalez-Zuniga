const ItemDetail = ({ name, price, img, description, platform }) => {
    return (
        <div style={{ background: 'gray', margin: 10, borderRadius: 10}}>
            <h2>{name}</h2>
            <img src={img} alt={name} style={{ width: 100}}/>
            <h3>Precio: {price}</h3>
            <h3>Plataforma: {platform}</h3>
            <p>Descripcion: {description}</p>
        </div>
    )
}

export default ItemDetail