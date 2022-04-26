import { NavLink } from "react-router-dom";

const Card=({id,source,title, dim})=>{
    return(
        <div className="col-12 col-md-4">
        <div className="card mb-2">
            <NavLink to={"/portfolio/details/"+id}>
                <img src={source} className="img-fluid mb-3 m-md-0 card-img-top" alt={title} />
            </NavLink>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Width: {dim.width}</p>
                <p className="card-text">Height: {dim.height}</p>
                <span className="text-center">
                    <a href={source} target="_blank" className="btn btn-info">Show Me The URL Pic !</a>
                </span>
            </div>
        </div>
    </div>
    )
}

export default Card;