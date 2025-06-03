import React from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, History, ShoppingBag } from 'lucide-react';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        {/** Icon? */}
                        <Link to="/" className="flex items-center text-green-700">
                            <ShoppingBag className="h-8 w-8 mr-2" />
                            <span className="text-xl font-bold">Shop</span>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        {/* Recent and Favorites links */}
                        <Link
                            to="/recientes"
                            className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition duration-150"
                        >
                            <History className="h-5 w-5 mr-1" />
                            <span>Recientes</span>
                        </Link>
                        <Link
                            to="/favoritos"
                            className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition duration-150"
                        >
                            <Bookmark className="h-5 w-5 mr-1" />
                            <span>Favoritos</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;