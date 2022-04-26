import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
    const {id} = useParams();
    const loadInfo=()=>{
        fetch("https://picsum.photos/id/"+id+"/info")
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
        })
    }
    useEffect(()=>loadInfo,[]);
    return (
        <div>
            <h1>Détails de l'Image...{id}</h1>
        </div>
    )
}

export default Details;