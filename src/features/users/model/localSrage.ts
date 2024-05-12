import { IUser } from '@/entities/user';
import axios from 'axios';

interface User extends IUser{};

function getData(): User[] | null {
  const usersData = localStorage.getItem('users');
  if (usersData) {
    return JSON.parse(usersData);
  } else {
    console.log('No data found in localStorage');
    return null;
  }
}

function changeData(updatedUser: User): void {
  let usersData = getData();
  if (usersData) {
    usersData = usersData.map((user) => {
      if (user.id === updatedUser.id) {
        return updatedUser;
      } else {
        return user;
      }
    });
    localStorage.setItem('users', JSON.stringify(usersData));
  } else {
    console.log('No data found in localStorage');
  }
}

function deleteData(userId: number): void {
  let usersData = getData();
  if (usersData) {
    usersData = usersData.filter((user) => user.id !== userId);
    localStorage.setItem('users', JSON.stringify(usersData));
		getData()
  } else {
    console.log('No data found in localStorage');
  }
}

async function getUsersApi(): Promise<void> {
  try {
    const usersData = localStorage.getItem('users');
    if (!usersData) {
      const response= await axios.get('https:/jsonplaceholder.typicode.com/users');
      localStorage.setItem('users', JSON.stringify(response.data));
			console.log(response.data)
      console.log("The data has been put in LocalStorage!");
    } else {
			localStorage.clear()
      console.log("The data has already been put in LocalStorage!");
    }
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

export { getData, changeData, deleteData, getUsersApi };
