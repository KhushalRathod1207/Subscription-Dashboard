const SkeletonCard = () => (
  <div className="glass-card rounded-3xl overflow-hidden animate-pulse">
    <div className="w-full h-64 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>
    <div className="p-5">
      <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full w-1/3 mb-3"></div>
      <div className="h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded mb-2"></div>
      <div className="h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-2/3 mb-4"></div>
      <div className="h-12 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-2xl"></div>
    </div>
  </div>
);

export default SkeletonCard;
