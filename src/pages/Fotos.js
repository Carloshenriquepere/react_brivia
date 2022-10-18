import { useEffect, useState } from "react"; 
import  { json, Link, useParams } from "react-router-dom"
   

export default function Fotos(){
    
    const [fotos, setFotos] = useState([])
    const {id} = useParams()

    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then((res) => res.json())
        .then((res) => setFotos(res))
    },[])
    console.log('fotos',fotos)

    return(
        <>
        <h1>Fotos</h1>
        <Link className="Link" to={'/'}>Voltar para Home</Link>
        <br/><br/>
        <Link className="Link" to={`/sobre/${id}/album/`}>Voltar para Albúm</Link>
        <ul>
            <li> <strong>ID do Albúm:</strong> {fotos.albumId}</li>
            <li> <strong>ID:</strong> {fotos.id}</li>
            <li> <strong>Titulo da foto:</strong> {fotos.title}</li>
            <img src={fotos.thumbnailUrl}/>
            <a href={fotos.url}  target="_blank">Foto Maior</a>
        </ul>
        </>
    )
}