// components/StatsCard.js
const StatsCard = ({ number, label }) => {
  return (
    <div className="bg-blue-50 rounded-lg p-6 text-center">
      <div className="text-3xl font-bold text-blue-600 mb-2">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

export default StatsCard;