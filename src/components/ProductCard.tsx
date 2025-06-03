import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Product } from '../types';

// interface with the props 
interface ProductCardProps {
    product: Product;
}

// Plain data for the construction of the card
// const product = {
//     id: 1,
//     title: 'product',
//     category: 'ropa',
//     image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
//     price: 19.99,
//     description: 'description',
//     rating: 4.5,
// }

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="    bg-white rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="relative pb-[100%] overflow-hidden">
                <img
                    src={product.image}
                    alt={product.title}
                    className="absolute inset-0 w-full h-full object-contain p-4"
                />
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
                        className="ml-2 flex-shrink-0 text-gray-400 hover:text-red-500 focus:outline-none transition-colors duration-200"

                    >
                        <Heart className={`h-5 w-5 `} />
                    </button>
                </div>

                <div className="mt-2 flex justify-between items-center">
                    <p className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</p>
                    <span className="text-xs px-2 py-1 bg-emerald-700 rounded-full text-white">
                        {product.category}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;