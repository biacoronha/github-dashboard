import Header from '../components/Header';
import TrendingUsersSection from '../components/sections/TrendingUsersSection';
import ActiveUsersSection from '../components/sections/ActiveUsersSection';
import RepositoriesSection from '../components/sections/RepositoriesSection';
import './HomePage.css'
import { useState } from 'react';
import IUser from '../helpers/IUser';
import IRepository from '../helpers/IRepository';

const defaultUsers:IUser[] = [];
const defaultRepositories:IRepository[] = [];

export default function HomePage() {
  const [activeUsers, setActiveUsers]: [IUser[], (activeUsers: IUser[]) => void] = useState(defaultUsers);
  const [trendingUsers, setTrendingUsers]: [IUser[], (trendingUsers: IUser[]) => void] = useState(defaultUsers);
  const [repositories, setRepositories]: [IRepository[], (repositories: IRepository[]) => void] = useState(defaultRepositories);

  return (
    <div className="HomePage">
        <Header/>
        <div className="main_content">
          <TrendingUsersSection trendingUsers={trendingUsers} setTrendingUsers={setTrendingUsers}/>
          <ActiveUsersSection activeUsers={activeUsers} setActiveUsers={setActiveUsers}/>
          <RepositoriesSection repositories={repositories} setRepositories={setRepositories}/>
        </div>
    </div>
  );
}