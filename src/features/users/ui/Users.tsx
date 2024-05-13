import { useState } from 'react';
import { FormUser, User } from '@/entities';
import { IUser } from '@/entities/user';
import useLocalStorage from '../model/useLocalStorage';

function Users() {
  const { userList, deleteData, changeData } = useLocalStorage();
  const [editingUserId, setEditingUserId] = useState<number | null>(null); 
  const handleDeleteUser = (id: number) => {
    deleteData(id);
  };
  const handleSubmitForm = (formData: IUser) => {
    changeData(formData);
    setEditingUserId(null); 
  };
  const handleEditUser = (id: number) => {
    setEditingUserId(id); 
  };
  return (
    <div>
      <h2 style={{ fontSize: 50, textAlign: 'center' }}>User List:</h2>
      {editingUserId !== null && (
        <FormUser
          onChange={handleSubmitForm}
          userId={editingUserId}
        />
      )}
      <ul style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {userList.map((user: IUser) => (
          <li key={user.id}>
            <User user={user} onDelete={() => handleDeleteUser(user.id)} onEdit={() => handleEditUser(user.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
