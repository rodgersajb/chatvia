import db from "../../../db";

import { useState, useEffect } from "react";


const Chats = () => {

 const [users, setUsers] = useState([]);

 useEffect(() => {
   fetch("/api/users")
     .then((response) => console.log(response))
     .then((data) => setUsers(data))
     .catch((error) => console.error("Error fetching users:", error));
 }, []);
    return (
        <h2>Chats</h2>
    )
}

export default Chats;