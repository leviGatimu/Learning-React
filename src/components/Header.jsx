import SearchBar from '../components/SearchBar.jsx';

function Header({ searchQuery, onSearchChange, cartCount, onOpenCart }) {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="text-2xl font-bold text-simba tracking-tight">
        Simba<span className="text-gray-800">Market</span>
      </div>

      <div className="hidden md:flex items-center space-x-8">
        <ul className="flex items-center space-x-6 text-sm font-medium text-gray-600">
          <li className="hover:text-simba cursor-pointer transition-colors">Home</li>
          <li className="hover:text-simba cursor-pointer transition-colors">Shop</li>
          <li className="hover:text-simba cursor-pointer transition-colors">Contact</li>
        </ul>
        <SearchBar searchQuery={searchQuery} onSearchChange={onSearchChange} />

        <button 
          onClick={onOpenCart}
          className="relative p-2 text-gray-600 hover:text-simba transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-simba text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      <div className="md:hidden flex items-center space-x-4">
        <SearchBar searchQuery={searchQuery} onSearchChange={onSearchChange} />
        <button 
          onClick={onOpenCart}
          className="relative p-2 text-gray-600"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-simba text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  )
}

export default Header;