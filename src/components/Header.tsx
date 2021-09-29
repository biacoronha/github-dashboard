import { AppBar, Toolbar } from '@mui/material';
import SearchBar from 'material-ui-search-bar';
import { useState } from 'react';
import './Header.css';

export default function Header() {
    const [value, setValue] = useState('');

  return (
    <header>
        <AppBar style={{ background: '#2E3B55' }}>
        {/* <Input sx={{position: 'absolute'}} className='search-bar'
            type="search"
            /> */}
            {/* <TextField sx={{position: 'absolute', margin: '0 200px'}} className='search-bar'
                type="search"
                variant="filled"
                margin="normal"
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <SearchIcon />
                    </InputAdornment>
                )
            }}
      /> */}
        <SearchBar className='search-bar'
            //value={value}
            onChange={(newValue) => setValue(newValue)}
           onRequestSearch={() => console.log('buscando')}
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