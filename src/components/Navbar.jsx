import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => setIsMenuOpen((prev) => !prev);

return (
<header className="pt-[7px] fixed top-0 left-0 w-full bg-black text-white z-50 shadow-lg">
    <div className="max-w-6xl mx-auto flex justify-between items-center py-6 px-6 sm:px-12">
    <div className="flex items-center ml-0 sm:-ml-20">
          <a href="/" className="text-xl font-bold text-white flex items-center">
            Adhikananda Wira Januar
          </a>
    </div>
    <div className="hidden md:flex space-x-6 -mr-20">
        <a href="#about" onClick={() => (window.location.href = "/about")} className="hover:text-gray-400">About Me</a>
        <a href="#projects" onClick={() => (window.location.href = "/projects")} className="hover:text-gray-400">Projects</a>
        <a href="#skills" onClick={() => (window.location.href = "/skills")} className="hover:text-gray-400">Skills</a>
        <a href="#blog" onClick={() => (window.location.href = "/blog")} className="hover:text-gray-400">Blog</a>
        <a href="#cards" onClick={() => (window.location.href = "/cards")} className="hover:text-gray-400">Card Grid</a>
        <a href="#contact" onClick={() => (window.location.href = "/contact")} className="hover:text-gray-400">Contact</a> 
    </div>

    {/* Mobile menu toggle */}
    <div className="md:hidden">
        <button onClick={toggleMenu}>
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
    </div>
    </div>

    {/* Mobile menu */}
    <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-black p-6`}>
    <a onClick={() => (window.location.href = "/about")} className="block py-2 text-white">About Me</a>
    <a onClick={() => (window.location.href = "/projects")} className="block py-2 text-white">Projects</a>
    <a onClick={() => (window.location.href = "/skills")} className="block py-2 text-white">Skills</a>
    <a onClick={() => (window.location.href = "/blog")} className="block py-2 text-white">Blog</a>
    <a onClick={() => (window.location.href = "/cards")} className="block py-2 text-white">Card Grid</a>
    <a onClick={() => (window.location.href = "/contact")} className="block py-2 mt-6 text-center bg-blue-500 text-white py-2 rounded">Contact</a>
    </div>
</header>
);
}