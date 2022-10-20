import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './home2.css'

export default function Home(){

    const [user , setUser] = useState([])

    useEffect (() => {
        fetch('https://jsonplaceholder.typicode.com/users/')
        .then((res)=> res.json())
        .then((res) => setUser(res)); 
    },[])
    console.log(user)


    return(
        <>
            <h1>Home</h1>
            <br/>
                {user.map(user =>(
                    <div key={user.id}>
                    <ul>
                        <li> <strong>ID:</strong> {user.id}</li>
                        <li> <strong>Nome:</strong> {user.name}</li>
                        <li> <strong>Email:</strong> {user.email}</li>
                        <Link to={`/sobre/${user.id}`}>Mais detalhes</Link>
                    </ul>
                </div>
            ))}         
        </>
    )
}