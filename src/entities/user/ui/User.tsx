import React from "react";
import { IUser } from "../model/TypeUser";
import "./User.css";

interface Props {
  user: IUser;
  onDelete: () => void;
}
const User: React.FC<Props> = ({ user, onDelete }) => {
  return (
    <div className="userCard">
      <div className="userBlackBg">
        <h2>{user.name}</h2>
        <p>ID: {user.id}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
        <div className="userBtn">
        <button className="deleteBtn" onClick={onDelete}>Delete</button>
        <button className="changeBtn" >Change</button>
        </div>
      </div>
    </div>
  );
};

export default User;
