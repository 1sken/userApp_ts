import React from 'react';
import { IUser } from '../model/TypeUser';

interface Props {
  user: IUser;
  onDelete:()=>void;
}
const User: React.FC<Props> = ({ user, onDelete }) => {
  return (
    <div>
      <h2 style={{fontWeight:700}}>{user.name}</h2>
      <p>ID: {user.id}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default User;
