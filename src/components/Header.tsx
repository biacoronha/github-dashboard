import { AppBar, Toolbar } from '@mui/material';
import SearchBar from 'material-ui-search-bar';
import { useState } from 'react';
import './Header.css';
import mainLogo  from '../assets/uphill_logo.png';

export default function Header({setSearch} : {setSearch:any}) {
    const [value, setValue] = useState('');

  return (
    <header>
        <AppBar style={{ background: '#2E3B55' }}>
        <SearchBar className='search-bar'
           onChange={(newValue) => setValue(newValue)}
           onRequestSearch={() => setSearch(value)}
           style={{
            maxWidth: 800,
            padding: 0,
            margin: '17px 0',
          }}
        />  

            <Toolbar className="toolbar">
              <img src={mainLogo} alt="logo" className='logo'/>
            </Toolbar>
        </AppBar>
  </header>

  );
}