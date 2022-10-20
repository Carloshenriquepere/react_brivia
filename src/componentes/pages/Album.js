import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import './home2.css'
export default function Album(){


    const [album , setAlbum] = useState([])
    const { id } = useParams();

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
            .then((res) => res.json())
            .then((res) => setAlbum(res));
    },[])
    console.log(album)

    
    return(
        <>
            <h1>Album</h1> 
            <Link className="Link" to={`/sobre/${id}`}>Voltar para detalhes</Link>
            {album.map(album=> ( 
                <div key={album.id}> 
                    <ul>
                        <li> <strong>Id do usuario:</strong> {album.userId}</li>
                        <li> <strong>ID:</strong> {album.id}</li>
                        <li> <strong>Titulo:</strong>  {album.title}</li>
                        <Link to={`/album/${id}/fotos`}>Ir para foto</Link>
                    </ul>
                </div>
            ))}
        </>
    )   
    
}