
'use client'
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

import styles from './index.module.css'

const SearchBar = (props: {handleSearch: (city: string) => void}) => {
    const [value, setValue] = useState('')
    
    return (
        <form className={styles.searchBar} onSubmit={(e) => {
            e.preventDefault()
            props.handleSearch(value)}
        }>
            <TextField
                id="outlined-basic" 
                label="City" 
                variant="outlined" 
                fullWidth
                placeholder="Enter a UK city" 
                onChange={(e) => setValue(e.target.value)}
                InputProps={{
                    startAdornment: (
                      <InputAdornment position='end'>
                        <IconButton data-testid="search-bar-button" type="submit">
                            <SearchIcon/>
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
            />
        </form>
    )
}

export default SearchBar