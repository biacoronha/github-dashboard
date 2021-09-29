import Header from '../components/Header';
import TrendingUsersSection from '../components/sections/TrendingUsersSection';
import ActiveUsersSection from '../components/sections/ActiveUsersSection';
import RepositoriesSection from '../components/sections/RepositoriesSection';
import './HomePage.css'
import { useState } from 'react';
import IUser from '../data/IUser';
import IRepository from '../data/IRepository';

const defaultUsers:IUser[] = [];
const defaultRepositories:IUser[] = [];

export default function HomePage() {
  const [users, setUsers]: [IUser[], (users: IUser[]) => void] = useState(defaultUsers);
  const [repositories, setRepositories]: [IRepository[], (repositories: IRepository[]) => void] = useState(defaultRepositories);

  return (
    <div className="HomePage">
        <Header/>
        <div className="main_content">
           <TrendingUsersSection users={users} setUsers={setUsers}/>
           <ActiveUsersSection users={users} setUsers={setUsers}/>
           <RepositoriesSection repositories={repositories} setRepositories={setRepositories}/>
        </div>
    </div>
  );
}