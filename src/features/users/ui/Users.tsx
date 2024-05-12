import { User } from "@/entities";
import { deleteData, getData, getUsersApi } from "../model/localSrage";
import { useEffect } from "react";

function Users() {
  const users = getData();
  const handleDeleteUser = (id:number) => {
    deleteData(id);
  };
  useEffect(()=>{
    getUsersApi();
  }, [])
  return (
    <div>
      <h2>User List:</h2>
      <ul>
        {users && users.map((user) => (
          <li key={user.id}>
            <User user={user} onDelete={() => handleDeleteUser(user.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
