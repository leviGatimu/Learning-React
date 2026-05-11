import SearchBar from '../components/SearchBar.jsx';
function Header({ searchQuery, onSearchChange }) {
  return (
    <nav className="Header">
      <div className="logo">Simba</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Shop</li>
        <li>Contact</li>
        <li>
          <SearchBar searchQuery={searchQuery} onSearchChange={onSearchChange} />
        </li>
      </ul>
    </nav>
  )
}

export default Header;