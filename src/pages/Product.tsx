import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function useCountdown(targetSeconds: number) {
  const [timeLeft, setTimeLeft] = useState(targetSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  return { hours, minutes, seconds };
}

const products = [
  {
    id: 'habit-tracker',
    title: 'Habit Tracker for Google Sheets',
    image: '/image.png',
    price: 13,
    currency: 'USD',
    badge: 'Sale',
  },
];

export default function Product() {
  const { hours, minutes, seconds } = useCountdown(8 * 3600 + 28 * 60 + 37);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div className="min-h-screen bg-white">
      {/* Countdown Banner */}
      <div className="bg-gray-900 text-white py-3 px-4 text-center">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <span className="text-sm font-semibold tracking-widest uppercase">Free Sale Ends In</span>
          <div className="flex items-center gap-1">
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold tabular-nums">{pad(hours)}</span>
              <span className="text-xs text-gray-400 uppercase">Hrs</span>
            </div>
            <span className="text-xl font-bold pb-3">:</span>
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold tabular-nums">{pad(minutes)}</span>
              <span className="text-xs text-gray-400 uppercase">Min</span>
            </div>
            <span className="text-xl font-bold pb-3">:</span>
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold tabular-nums">{pad(seconds)}</span>
              <span className="text-xs text-gray-400 uppercase">Sec</span>
            </div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-6 justify-start">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group w-56 bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="relative bg-gray-100 aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.badge && (
                  <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded">
                    {product.badge}
                  </span>
                )}
                <span className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white text-gray-700 text-xs font-semibold px-3 py-1 rounded-full shadow border border-gray-200 whitespace-nowrap">
                  INSTANT DOWNLOAD
                </span>
              </div>

              {/* Info */}
              <div className="p-4 text-center">
                <h2 className="text-sm font-semibold text-gray-900 leading-snug mb-2">
                  {product.title}
                </h2>

                <p className="text-base font-bold text-gray-900">
                  ${product.price.toFixed(2)} {product.currency}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
