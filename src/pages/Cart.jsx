import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, subtotal } = useCart();

  const tax = subtotal * 0.1;
  const shipping = subtotal > 0 ? 10 : 0;
  const total = subtotal + tax + shipping;

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center animate-fade-in">
        <div className="glass-card max-w-md mx-auto p-12 rounded-3xl">
          <div className="text-8xl mb-6 animate-float">🛒</div>
          <h1 className="text-4xl font-black mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Start adding some amazing products!</p>
          <Link 
            to="/shop" 
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-2xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-5xl font-black mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Shopping Cart
        </h1>
        <p className="text-gray-600">{cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map(item => (
            <div key={item.id} className="glass-card p-6 rounded-3xl hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Product Image */}
                <Link to={`/product/${item.id}`} className="flex-shrink-0">
                  <div className="w-full sm:w-32 h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 flex items-center justify-center group">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </Link>
                
                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <Link to={`/product/${item.id}`}>
                    <h3 className="font-bold text-gray-800 mb-2 hover:text-blue-600 transition line-clamp-2">
                      {item.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-gray-500 capitalize mb-3 bg-purple-50 inline-block px-3 py-1 rounded-full">{item.category}</p>
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">${item.price}</span>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">× {item.quantity}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-between gap-4">
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-white hover:bg-red-600 font-bold transition px-4 py-2 rounded-xl"
                  >
                    🗑️ Remove
                  </button>

                  <div className="flex items-center gap-2 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl p-1.5">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-white hover:bg-blue-600 hover:text-white w-10 h-10 rounded-xl font-bold text-xl transition shadow-sm"
                    >
                      -
                    </button>
                    <span className="font-black w-10 text-center text-lg">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-white hover:bg-blue-600 hover:text-white w-10 h-10 rounded-xl font-bold text-xl transition shadow-sm"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="glass-card p-8 rounded-3xl sticky top-4">
            <h2 className="text-3xl font-black mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Order Summary</h2>
            
            <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-bold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax (10%)</span>
                <span className="font-bold">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="font-bold text-green-600">${shipping.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between text-3xl font-black mb-8">
              <span>Total</span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ${total.toFixed(2)}
              </span>
            </div>

            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-5 rounded-2xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 mb-4">
              💳 Proceed to Checkout
            </button>

            <Link 
              to="/shop" 
              className="block text-center text-blue-600 hover:text-purple-600 font-bold transition"
            >
              ← Continue Shopping
            </Link>

            {/* Trust Badges */}
            <div className="mt-8 pt-8 border-t border-gray-200 space-y-4">
              <div className="flex items-center gap-3 text-sm text-gray-600 bg-green-50 p-3 rounded-xl">
                <span className="text-green-500 text-2xl">✓</span>
                <span className="font-semibold">Secure checkout</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600 bg-blue-50 p-3 rounded-xl">
                <span className="text-blue-500 text-2xl">✓</span>
                <span className="font-semibold">Free shipping over $50</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600 bg-purple-50 p-3 rounded-xl">
                <span className="text-purple-500 text-2xl">✓</span>
                <span className="font-semibold">30-day return policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
