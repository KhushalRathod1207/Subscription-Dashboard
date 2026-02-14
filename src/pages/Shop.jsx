import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import SkeletonCard from '../components/SkeletonCard';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('');
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  useEffect(() => {
    let result = [...products];

    if (searchQuery) {
      result = result.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (sortBy === 'low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'high') {
      result.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(result);
  }, [searchQuery, selectedCategory, sortBy, products]);

  const categories = ['all', 'electronics', 'jewelery', "men's clothing", "women's clothing"];

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Shop All Products
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">Discover our amazing collection</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg mb-8">
        <div className="space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="🔍 Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm sm:text-base"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition cursor-pointer text-sm sm:text-base"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === 'all' ? '📦 All Categories' : '🏷️ ' + cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition cursor-pointer text-sm sm:text-base"
            >
              <option value="">💰 Sort By Price</option>
              <option value="low">💵 Price: Low to High</option>
              <option value="high">💸 Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      {!loading && (
        <div className="mb-6 flex items-center justify-between">
          <p className="text-gray-600 font-medium">
            <span className="text-blue-600 font-bold text-lg">{filteredProducts.length}</span> products found
          </p>
          {filteredProducts.length > 0 && (
            <div className="hidden sm:flex gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">Premium Quality</span>
              <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-semibold">Fast Shipping</span>
            </div>
          )}
        </div>
      )}

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {loading ? (
          Array(8).fill(0).map((_, i) => <SkeletonCard key={i} />)
        ) : (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>

      {/* No Results */}
      {!loading && filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">No products found</h3>
          <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
          <button 
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSortBy('');
            }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Shop;
