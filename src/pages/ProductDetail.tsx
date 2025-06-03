import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Bookmark, Star } from 'lucide-react';
import { fetchProductById } from '../services/api';
import { Product } from '../types';
import { useProducts } from '../hooks/useProducts';

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [error, setError] = useState<string | null>(null);
    const { addToViewed, toggleFavorite, isProductFavorite } = useProducts();

    useEffect(() => {
        const getProduct = async () => {
            if (!id) {
                console.log('No ID found in URL');
                return;
            }
            try {
                const data = await fetchProductById(id);

                if (data) {
                    setProduct(data);
                    addToViewed(data);
                } else {
                    setError('Product not found');
                }
            } catch (err) {
                setError('Failed to load product details. Please try again later.');
                console.error(err);
            } finally {
            }
        };

        getProduct();
    }, [id]);

    if (error || !product) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                Empty
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-6">
                <Link
                    to="/"
                    className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
                >
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Back to products
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                    <div className="md:flex-shrink-0 md:w-1/2 bg-gray-50 flex items-center justify-center p-8">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="max-h-80 object-contain"
                        />
                    </div>

                    <div className="p-8 md:w-1/2">
                        <div className="flex justify-between items-start">
                            <div>
                                <span className="inline-block px-2 py-1 text-xs font-semibold bg-emerald-700 rounded-full text-white mb-2">
                                    {product.category}
                                </span>
                                <h1 className="text-2xl font-bold text-gray-900">{product.title}</h1>
                            </div>

                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    toggleFavorite(product);
                                }}
                                className="flex-shrink-0 text-gray-400 hover:text-red-500 focus:outline-none transition-colors duration-200">
                                <Bookmark className={`h-5 w-5 ${isProductFavorite(product.id) ? 'text-yellow-500 fill-yellow-500 ' : ' '}`} />
                            </button>
                        </div>

                        <div className="flex items-center mt-2 mb-4">
                            <div className="flex items-center mr-2">
                                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                <span className="ml-1 text-sm text-gray-600">{product.rating.rate}</span>
                            </div>
                            <span className="text-sm text-gray-500">({product.rating.count} reviews)</span>
                        </div>

                        <div className="mt-4">
                            <p className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
                        </div>

                        <div className="mt-6 border-t border-gray-200 pt-4">
                            <h3 className="text-lg font-medium text-gray-900 mb-2">Description</h3>
                            <p className="text-gray-700">{product.description}</p>
                        </div>

                        <div className="mt-8">
                            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};


export default ProductDetail;