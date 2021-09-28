import Header from '../components/Header';
import TrendingUsersSection from '../components/sections/TrendingUsersSection';
import ActiveUsersSection from '../components/sections/ActiveUsersSection';
import RepositoriesSection from '../components/sections/RepositoriesSection';
import './HomePage.css'

function HomePage() {
  return (
    <div className="HomePage">
        <Header/>
        <div className="main_content">
           <TrendingUsersSection/>
           <ActiveUsersSection/>
           <RepositoriesSection/>
        </div>
    </div>
  );
}

export default HomePage;
