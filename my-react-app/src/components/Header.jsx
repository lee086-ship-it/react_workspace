function Header() {
  return (
    <header className="bg-blue-500 text-white p-4">
      <h1 className="text-2xl font-bold mb-2">My React App</h1>
      <nav>
        <a href="/" style={{color: 'blue',margin:'0 10px'}} className="mr-4 hover:underline">
          Home
        </a>
        <a href="/about" style={{color: 'blue',margin:'0 10px'}} className="mr-4 hover:underline">
          About
        </a>
        <a href="/contact" style={{color: 'blue',margin:'0 10px'}} className="hover:underline">
          Contact
        </a>
      </nav>
    </header>
  )
}
export default Header;
