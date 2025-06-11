import React from 'react';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';
import { History, Trash } from 'lucide-react';

const RecentlyViewedPage: React.FC = () => {
    const { viewed, toggleFavorite, isProductFavorite, clearViewed } = useProducts();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-between mb-6">
                <div className='flex items-center'>
                    <History className="h-6 w-6 mr-2 text-blue-500" />
                    <h1 className="text-2xl font-bold text-gray-900">Recently Viewed</h1>

                </div>
                <button className='justify-end text-sm text-gray-500 flex items-center'
                    onClick={() => clearViewed}>
                    <Trash className="h-6 w-6 mr-2 text-gray-500" />
                    Clear
                </button>
            </div>

            {viewed.length === 0 ? (
                <div className='flex items-center justify-center h-auto'>
                    <History className="h-6 w-6 mr-2 text-red-500" />
                    <h1 className="text-2xl font-bold text-gray-500">Seems like you haven't seen any product</h1>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {viewed.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            isFavorite={isProductFavorite(product.id)}
                            onToggleFavorite={toggleFavorite}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default RecentlyViewedPage;