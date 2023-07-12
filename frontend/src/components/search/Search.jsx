import React from 'react'
import './search.css'

const Search = () => {
  return (
    <div className='searchBar'>
        <h2>Search Users</h2>

        <div className="searchBar">
            <input type='search' placeholder='Search'/>
            <button>Search</button>
        </div>
    </div>
  )
}

export default Search