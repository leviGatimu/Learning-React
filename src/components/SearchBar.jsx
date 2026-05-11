function SearchBar({ searchQuery, onSearchChange }){
    return(
        <input 
        type="text" 
        value={searchQuery}
        onChange={(e)=> {
            onSearchChange(e.target.value)
        }}
        placeholder="Search products..."
        className="search-input"
        />
    )
}

export default SearchBar;