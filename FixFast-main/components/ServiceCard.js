import { Wrench } from 'lucide-react';

export default function ServiceCard({ service }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 p-3 rounded-full mr-4">
          <Wrench className="text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold">{service.name}</h3>
      </div>
      <ul className="space-y-2">
        {service.issues.map((issue, index) => (
          <li key={index} className="flex items-center">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            <span>{issue}</span>
          </li>
        ))}
      </ul>
      <a href='/Book'>
        <button  className="mt-6 text-blue-600 font-medium hover:text-blue-800 transition-colors">
        View all {service.name} issues →
      </button>
      </a>
      
    </div>
  );
}