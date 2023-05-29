const FeedCardSkeleton = () => {
  return (
    <div className="card animate-pulse shadow-lg bg-base-200 p-5">
      <h3 className="h-4 bg-gray-400 rounded-md" style={{ width: "40%" }}></h3>
      <ul className="mt-5 space-y-3">
        <li className="w-full h-4 bg-gray-400 rounded-md"></li>
        <li className="w-full h-4 bg-gray-400 rounded-md"></li>
        <li className="w-full h-4 bg-gray-400 rounded-md"></li>
        <li className="w-full h-4 bg-gray-400 rounded-md"></li>
      </ul>
    </div>
  );
};

export default FeedCardSkeleton;
