import React from 'react'
import './SearchBox.css'

const SearchBox = ({ onInputChange }) => {
    return (
        <div className="search-container">
            <input
                type="text"
                className="search-input"
                placeholder="Type keyword"
                onChange={(e) => onInputChange(e.target.value)}
            />
        </div>
    )
}

export default SearchBox
