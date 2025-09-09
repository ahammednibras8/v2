export default function Navbar() {
    return (
        <nav className="container mx-auto px-6 py-4 flex justify-end items-center">
            <ul className="hidden md:flex items-center space-x-8 text-sm font-semibold font-mono">
                <li><button className="text-gray-400 hover:text-white transition-colors duration-300">01. About</button></li>
                <li><button className="text-gray-400 hover:text-white transition-colors duration-300">02. Experience</button></li>
                <li><button className="text-gray-400 hover:text-white transition-colors duration-300">03. Work</button></li>
                <li><button className="text-gray-400 hover:text-white transition-colors duration-300">04. Contact</button></li>
                <li>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="border border-balck dark:border-white px-4 py-2 rounded-lg text-balck dark:text-white hover:bg-balck hover:bg-opacity-10 dark:hover:bg-white dark:hover:text-black dark:hover:bg-opacity-10 transition-colors duration-300">
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    );
};
