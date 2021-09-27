import React from 'react';
import Header from '../components/Header';
import RepositoriesCard from '../components/RepositoriesCard';
import UsersCard from '../components/UsersCard';
import logo from './logo.svg';

function HomePage() {
  return (
    <div className="HomePage">
        <Header/>
        <UsersCard/>
        <RepositoriesCard/>
      
    </div>
  );
}

export default HomePage;
