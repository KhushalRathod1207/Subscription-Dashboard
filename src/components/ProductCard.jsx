import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group glass-card rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
          ⭐ {product.rating.rate}
        </div>
        <div className="p-6 h-64 flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </Link>
      
      <div className="p-5 flex-1 flex flex-col">
        <div className="inline-block px-3 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs font-bold rounded-full mb-3 capitalize w-fit">
          {product.category}
        </div>
        
        <Link to={`/product/${product.id}`}>
          <h3 className="font-bold text-gray-800 mb-3 h-12 overflow-hidden hover:text-blue-600 transition line-clamp-2 text-sm">
            {product.title}
          </h3>
        </Link>
        
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ${product.price}
            </span>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{product.rating.count} sold</span>
          </div>
          
          <button 
            onClick={() => addToCart(product)}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3.5 rounded-2xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
