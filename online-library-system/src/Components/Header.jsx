// Header with navigation & it stay always
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[#007387] text-white">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-xl font-semibold">📘 My Library</Link>
        <ul className="flex gap-4 text-sm">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/browse" className="hover:underline">Browse</Link></li>
          <li><Link to="/add-book" className="hover:underline">Add Book</Link></li>
        </ul>
      </nav>
    </header>
  );
}
