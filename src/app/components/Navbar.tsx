export default function Navbar() {
    return (
        <nav className="fixed z-50 bg-white dark:bg-black py-8 container mx-auto px-6 flex justify-end items-center">
            <ul className="hidden md:flex items-center space-x-8 text-sm font-semibold font-mono">
                <li><button className="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-500 transition-colors duration-300">01. About</button></li>
                <li><button className="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-500 transition-colors duration-300">02. Experience</button></li>
                <li><button className="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-500 transition-colors duration-300">03. Work</button></li>
                <li><button className="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-500 transition-colors duration-300">04. Contact</button></li>
                <li>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="border border-black dark:border-white px-4 py-2 rounded-lg text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors duration-300">
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    );
};
