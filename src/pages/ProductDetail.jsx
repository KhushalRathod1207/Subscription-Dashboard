import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-300 rounded w-32 mb-8"></div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-96 rounded-2xl"></div>
            <div className="space-y-4">
              <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-3/4"></div>
              <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/2"></div>
              <div className="h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/3"></div>
              <div className="h-32 bg-gradient-to-r from-gray-200 to-gray-300 rounded"></div>
              <div className="h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) return <div className="text-center py-20 text-2xl">Product not found</div>;

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <Link to="/shop" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 font-semibold transition">
        ← Back to Shop
      </Link>
      
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Image */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 sm:p-12 rounded-2xl shadow-xl relative group">
          <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
            ⭐ {product.rating.rate}
          </div>
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-64 sm:h-96 object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 text-sm font-bold rounded-full mb-4 capitalize w-fit">
            {product.category}
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-gray-800 leading-tight">
            {product.title}
          </h1>
          
          <div className="flex items-center gap-4 mb-6 pb-6 border-b">
            <div className="flex items-center bg-yellow-50 px-4 py-2 rounded-lg">
              <span className="text-yellow-500 text-2xl">⭐</span>
              <span className="ml-2 text-xl font-bold text-gray-800">{product.rating.rate}</span>
            </div>
            <span className="text-gray-600">({product.rating.count} reviews)</span>
          </div>

          <div className="mb-6">
            <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              ${product.price}
            </div>
            <p className="text-green-600 font-semibold">✓ In Stock - Free Shipping</p>
          </div>

          <div className="mb-8 bg-gray-50 p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-3 text-gray-800">Description</h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{product.description}</p>
          </div>

          {/* Quantity Selector */}
          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700 mb-2">Quantity</label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="bg-gray-200 hover:bg-gray-300 w-12 h-12 rounded-lg font-bold text-xl transition"
              >
                -
              </button>
              <span className="text-2xl font-bold w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="bg-gray-200 hover:bg-gray-300 w-12 h-12 rounded-lg font-bold text-xl transition"
              >
                +
              </button>
            </div>
          </div>

          <button 
            onClick={handleAddToCart}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 sm:py-5 rounded-xl text-lg sm:text-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            🛒 Add {quantity} to Cart
          </button>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <div className="text-2xl mb-1">✓</div>
              <p className="text-xs font-semibold text-gray-700">Secure Payment</p>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <div className="text-2xl mb-1">🚚</div>
              <p className="text-xs font-semibold text-gray-700">Fast Delivery</p>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded-lg">
              <div className="text-2xl mb-1">↩️</div>
              <p className="text-xs font-semibold text-gray-700">Easy Returns</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
