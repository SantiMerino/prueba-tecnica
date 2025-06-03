import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../hooks/useProducts';

import { Product } from '../types';

const ProductListPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string | null>(null);
    const { toggleFavorite, isProductFavorite } = useProducts();


    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
                setError(null);
            } catch (err) {
                setError('Failed to load products.');
                console.error(err);
            } finally {
            }
        };

        getProducts();
    }, []);

    if (error) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                Error
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">All Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        isFavorite={isProductFavorite(product.id)}
                        onToggleFavorite={toggleFavorite}
                    />
                ))}
            </div>

        </div>
    );
};

export default ProductListPage;