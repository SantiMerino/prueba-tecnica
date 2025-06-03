import { Link } from 'react-router-dom';
import { Bookmark } from 'lucide-react';
import { Product } from '../types';

// interface with the props 
interface ProductCardProps {
    product: Product;
    isFavorite: boolean;
    onToggleFavorite: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isFavorite, onToggleFavorite }) => {
    return (

        <div className="    bg-white rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:scale-105">
            <div className="relative pb-[100%] overflow-hidden">
                <Link to={`/producto/${product.id}`}>
                    <img
                        src={product.image}
                        alt={product.title}
                        className="absolute inset-0 w-full h-full object-contain p-4"
                    /></Link>
            </div>

            <div className="p-4">
                <div className="flex justify-between items-start">
                    {/* Redirigir al detalle del producto */}
                    <Link
                        to={`/producto/${product.id}`}
                        className="text-sm font-medium text-gray-900 hover:text-blue-600 line-clamp-2 min-h-[40px]"
                    >
                        {product.title}
                    </Link>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            onToggleFavorite(product);
                        }}
                        className="ml-2 flex-shrink-0 text-yellow-400 hover:text-yellow-300 focus:outline-none transition-colors duration-200"

                    >
                        <Bookmark className={`h-5 w-5 ${isFavorite ? 'fill-yellow-400' : ''}`} />
                    </button>
                </div>

                <div className="mt-2 flex justify-between items-center">
                    <p className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</p>
                    <span className="text-xs px-2 py-1 bg-inherit border-gray-300 border-2 rounded-full text-gray-700">
                        {product.category}
                    </span>
                </div>
            </div>
        </div>

    );
};

export default ProductCard;