function SearchBar({ searchQuery, onSearchChange }){
    return(
        <div className="relative">
            <input 
                type="text" 
                value={searchQuery}
                onChange={(e)=> {
                    onSearchChange(e.target.value)
                }}
                placeholder="Search products..."
                className="w-full md:w-64 px-4 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-simba/20 focus:border-simba transition-all bg-gray-50/50"
            />
            <svg 
                className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>
    )
}

export default SearchBar;