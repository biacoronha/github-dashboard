import { AppBar, Toolbar } from '@mui/material';
import SearchBar from 'material-ui-search-bar';
import { useState } from 'react';
import './Header.css';

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

            <Toolbar className='logo'>UPHILL</Toolbar>
        </AppBar>
  </header>

  );
}