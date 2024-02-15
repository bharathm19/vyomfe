import React, {useState, useEffect} from "react";
import { fetchGet } from "../utils/FetchUtils";
import { UserListComponent } from "./UserListComponent";
import '../CSS/UserBox.css';
import { Box,Grid } from '@mui/material';

function UserBox(props) {
    const [users,setUsers] = useState([]);
    const [followState,setFollowState] = useState(false);
    const id = localStorage.getItem('id');
    
    useEffect( () => { 
        setFollowState(false);
        async function fetchData() {
            try {
                const res = await fetchGet(`http://localhost:8080/${id}/getusers`); 
                setUsers(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [followState,id]);
    console.log(users);
    return ( 
        <div className="userContainer">
          {users && <Box sx={{padding:"25px"}}>
            {users.map(function(user,i){
                return (<UserListComponent user={user} key={i} onFollow={setFollowState}></UserListComponent>)
            })}
        </Box>}
        </div>
     );
}

export default UserBox;