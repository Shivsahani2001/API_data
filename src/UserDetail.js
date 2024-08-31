import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
    const {id} = useParams();
    const [user,setUser] = useState(null);

    useEffect (()=> {
        const fetchUser = async () =>{
            let result = await fetch (`https://reqres.in/api/users/${id}`);
            result = await result.json();
            setUser(result.data); };
            fetchUser();
    },[id]);
    if (!user) {
        return <div>Loading...</div>;
      }
    

  return (
    <div>
        
      <h1>User Data</h1>
      <p>ID: {user.id}</p>
      <p>Email: {user.email}</p>
      <p>First Name: {user.first_name}</p>
      <p>Last Name: {user.last_name}</p>
      <div><img src={user.avatar} alt={`Avatar of ${user.first_name}`} /></div>
    
    </div>
  )
}

export default UserDetail