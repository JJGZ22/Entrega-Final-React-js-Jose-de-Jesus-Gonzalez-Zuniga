import { Link } from "react-router-dom"

const Item = ({ id, name, price,platform }) => {
    return (
        <div style={{ background: 'teal', margin: 10,borderRadius: 10}}>
            <h2>{name}</h2>
            <h3>precio: {price}</h3>
            <Link to={`/item/${id}`} style={{ background: 'orange'}}><button className="btn btn-danger btn-outline-info navbtn">Ver Detalles</button></Link>
        </div>
    )
}

export default Item