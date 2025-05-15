import { Star } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
      <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
      <p className="font-semibold">— {testimonial.name}</p>
    </div>
  );
}