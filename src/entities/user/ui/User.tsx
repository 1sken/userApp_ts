import React from 'react';
import { IUser } from '../model/TypeUser';
import './User.css';

interface UserProps {
  user: IUser;
  onDelete: () => void;
  onEdit: (userId: number) => void;
}

const User: React.FC<UserProps> = ({ user, onDelete, onEdit }) => {
  const handleEdit = () => {
    onEdit(user.id); 
  };

  return (
    <div className="userCard">
      <div className="overlay">
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
        <div className="userBtn">
          <button className="deleteBtn" onClick={onDelete}>Delete</button>
          <button className="changeBtn" onClick={handleEdit}>Change</button>
        </div>
      </div>
    </div>
  );
};

export default User;
