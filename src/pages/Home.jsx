import { Link } from 'react-router-dom';

const Home = () => {
  const categories = [
    { name: 'Electronics', icon: '📱', link: '/shop?category=electronics', gradient: 'from-blue-400 via-blue-500 to-blue-600' },
    { name: 'Jewelery', icon: '💍', link: '/shop?category=jewelery', gradient: 'from-pink-400 via-pink-500 to-rose-600' },
    { name: "Men's Clothing", icon: '👔', link: "/shop?category=men's clothing", gradient: 'from-purple-400 via-purple-500 to-indigo-600' },
    { name: "Women's Clothing", icon: '👗', link: "/shop?category=women's clothing", gradient: 'from-orange-400 via-red-500 to-pink-600' }
  ];

  const features = [
    { icon: '🚚', title: 'Free Shipping', desc: 'On orders over $50', color: 'bg-blue-50' },
    { icon: '🔒', title: 'Secure Payment', desc: '100% secure', color: 'bg-green-50' },
    { icon: '↩️', title: 'Easy Returns', desc: '30-day policy', color: 'bg-purple-50' },
    { icon: '💬', title: '24/7 Support', desc: 'Always here', color: 'bg-orange-50' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-90"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20 sm:py-32 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-6 text-white drop-shadow-2xl">
              Welcome to <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">ShopHub</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-10 text-white/90 max-w-3xl mx-auto font-light">
              Discover premium products with unbeatable prices
            </p>
            <Link 
              to="/shop" 
              className="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Start Shopping
              <span className="text-2xl">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Cards */}
      <div className="container mx-auto px-4 -mt-10 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 animate-fade-in" style={{animationDelay: `${idx * 0.1}s`}}>
              <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center text-3xl mb-4 mx-auto`}>
                {feature.icon}
              </div>
              <h3 className="font-bold text-gray-800 mb-1 text-center">{feature.title}</h3>
              <p className="text-sm text-gray-600 text-center">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Shop by Category
          </h2>
          <p className="text-gray-600 text-lg">Explore our premium collections</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <Link 
              key={cat.name} 
              to={cat.link} 
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in"
              style={{animationDelay: `${idx * 0.1}s`}}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-90 group-hover:opacity-100 transition-opacity`}></div>
              <div className="relative p-10 text-center">
                <div className="text-7xl mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-white drop-shadow-lg">
                  {cat.name}
                </h3>
                <div className="mt-4 inline-flex items-center text-white/90 text-sm font-semibold">
                  Explore <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">Ready to Start Shopping?</h2>
          <p className="text-xl text-white/90 mb-10">Join thousands of happy customers today!</p>
          <Link 
            to="/shop" 
            className="inline-block bg-white text-purple-600 px-12 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Browse All Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
