import SearchBar from '../components/SearchBar.jsx';

function Header({ searchQuery, onSearchChange }) {
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
      </div>

      <div className="md:hidden">
        <SearchBar searchQuery={searchQuery} onSearchChange={onSearchChange} />
      </div>
    </nav>
  )
}

export default Header;