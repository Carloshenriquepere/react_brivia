import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './home2.css'

export default function Sobre(){

    const [details , setDetails] = useState([])
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
        .then((res) => setDetails(res))
    },[])
    console.log(details)
    console.log('teste', id)
    return(
        <>
            <h1>Detalhes</h1>
            <Link className="Link" to={'/'}>Voltar para Home</Link>
              <ul>
                <li> <strong>ID:</strong> {details.id}</li>
                <li> <strong>Nome:</strong> {details.name}</li>
                <li> <strong>Email:</strong> {details.email}</li>
                <li> <strong>Nome do usuario:</strong> {details.username}</li>
                <li> <strong>Telefone:</strong> {details.phone}</li>
                <li> <strong>WebSite</strong> {details.website}</li>
                <Link to={`/sobre/${details.id}/album`}>Ir para Album</Link>
              </ul>    
        </>
    )
}