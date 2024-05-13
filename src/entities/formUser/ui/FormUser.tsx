import React, { FC, useState } from "react";
import { IUser } from "@/entities/user";
import "./FormUser.css";

interface Props {
  onChange: (formData: IUser) => void;
  userId: number;
}

const FormUser: FC<Props> = ({ onChange, userId }) => {
  const [formData, setFormData] = useState<IUser>({
    id: userId,
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onChange(formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="changeCard">
        <div className="overlay overlayForm">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
          <label>
            Website:
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default FormUser;
