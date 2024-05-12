import { useState, useEffect } from 'react';
import axios from 'axios';
import { IUser } from '@/entities/user';

const useLocalStorage = () => {
  const [userList, setUserList] = useState<IUser[]>([]);

  const getData = (): IUser[] | null => {
    const usersData = localStorage.getItem('users');
    if (usersData) {
      return JSON.parse(usersData);
    } else {
      return null;
    }
  };


  const deleteData = (userId: number): void => {
    setUserList(prevUsers =>
      prevUsers.filter(user => user.id !== userId)
    );
  };

  const getUsersApi = async (): Promise<void> => {
    try {
      const usersData = localStorage.getItem('users');
      if (!usersData) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const fetchedUsers: IUser[] = response.data;
        setUserList(fetchedUsers);
        localStorage.setItem('users', JSON.stringify(fetchedUsers));
        console.log("The data has been put in LocalStorage!");
      } else {
        console.log("The data has already been put in LocalStorage!");
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    const storedUsers = getData();
    if (storedUsers !== null) {
      setUserList(storedUsers);
    } else {
      getUsersApi();
    }
  }, []);

  return { userList, deleteData };
};

export default useLocalStorage;
