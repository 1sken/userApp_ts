import { User } from "@/entities";
import { IUser } from "@/entities/user";
import useLocalStorage from "../model/useLocalStorage";

function Users() {
  const { userList, deleteData } = useLocalStorage(); 

  const handleDeleteUser = (id: number) => {
    deleteData(id); 
  };

  return (
    <div>
      <h2 style={{fontSize:50, textAlign:'center'}}>User List:</h2>
      <ul style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
        {userList.map((user: IUser) => ( 
          <li key={user.id}>
            <User user={user} onDelete={() => handleDeleteUser(user.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
