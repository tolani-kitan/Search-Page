import React from 'react';

const SearchBar = ({ onUserSearch }) => {

    return (
        <div className='ui segment'>
          
               <div className='ui fluid input focus'>
                    <label>Search</label>
                    <input 
                    type='search'
                    onChange={onUserSearch}
                    />
               </div>
        
        </div>
        )
}

  
export default SearchBar;