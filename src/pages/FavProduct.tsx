import React from 'react';
import { useProducts, } from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';
import { Bookmark, Trash } from 'lucide-react';


const FavoritesPage: React.FC = () => {
    const { favorites, toggleFavorite, isProductFavorite, clearFavorites } = useProducts();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center mb-6 justify-between">
                <div className="text-2xl font-bold text-gray-900 flex items-center">
                    <Bookmark className="h-6 w-6 mr-2 text-yellow-500" />
                    Your Favorites</div>
                <button className='justify-end text-sm text-gray-500 flex items-center'
                    onClick={clearFavorites}>
                    <Trash className="h-6 w-6 mr-2 text-gray-500" />
                    Clear
                </button>
            </div>

            {favorites.length === 0 ? (
                <div className='flex items-center justify-center h-auto'>
                    <Bookmark className="h-6 w-6 mr-2 text-gray-500" />
                    <h1 className="text-2xl font-bold text-gray-500">Seems like you don't have a favorite product</h1>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {favorites.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            isFavorite={isProductFavorite(product.id)}
                            onToggleFavorite={toggleFavorite}
                        />
                    ))}
                </div>
            )
            }
        </div >
    );
};

export default FavoritesPage;