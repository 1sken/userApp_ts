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
    setUserList(prevUsers => prevUsers.filter(user => user.id !== userId));
  
    const updatedUsersData = userList.filter(user => user.id !== userId);
    localStorage.setItem('users', JSON.stringify(updatedUsersData));
    getUsersApi()
  };
  
  const changeData = (updatedUser: IUser): void => {
    setUserList(prevUsers => prevUsers.map(user => user.id === updatedUser.id ? updatedUser : user));
  
    const updatedUsersData = userList.map(user => user.id === updatedUser.id ? updatedUser : user);
    localStorage.setItem('users', JSON.stringify(updatedUsersData));
    getUsersApi()
  };
  
  
  
  const getUsersApi = async (): Promise<void> => {
    try {
      const usersData = localStorage.getItem('users');
      if (!usersData || JSON.parse(usersData).length === 0) { 
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

  return { userList, deleteData, changeData };
};
export default useLocalStorage;
