import { Link } from 'react-router-dom';
import { CheckCircle, BarChart3, Target, Zap, Download, Star, Calendar } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-b from-gray-50 to-white pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Track Your Habits,
              <br />
              <span className="text-red-600">Transform Your Life</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              The most powerful Google Sheets habit tracker designed to help you build lasting habits and achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/product"
                className="w-full sm:w-auto px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Get Started Now
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:border-gray-400 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Trackly?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to build better habits and track your progress
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl hover:shadow-xl transition-shadow border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                <CheckCircle className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Easy to Use</h3>
              <p className="text-gray-600 leading-relaxed">
                Simple, intuitive Google Sheets template that works right out of the box. No complex setup required.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl hover:shadow-xl transition-shadow border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                <BarChart3 className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Visual Progress</h3>
              <p className="text-gray-600 leading-relaxed">
                Beautiful charts and graphs that show your progress at a glance. Stay motivated with visual feedback.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl hover:shadow-xl transition-shadow border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                <Target className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Goal Focused</h3>
              <p className="text-gray-600 leading-relaxed">
                Set clear goals, track your habits daily, and watch your consistency improve over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Built for Real Results
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Trackly is designed based on proven habit-building principles. Our tracker helps you stay consistent, motivated, and on track to achieve your goals.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <Download className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Instant Access</h3>
                    <p className="text-gray-600">Download and start using immediately. No waiting, no setup hassles.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Daily Tracking</h3>
                    <p className="text-gray-600">Track multiple habits every day with a clean, organized interface.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <Zap className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Powerful Analytics</h3>
                    <p className="text-gray-600">Get insights into your habits with detailed analytics and reports.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-2xl p-1 shadow-2xl">
                <div className="bg-gray-900 rounded-xl p-8 sm:p-12">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium">Exercise</span>
                      <span className="text-green-400 font-bold">95%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div className="bg-gradient-to-r from-green-400 to-green-500 h-3 rounded-full" style={{ width: '95%' }}></div>
                    </div>

                    <div className="flex items-center justify-between mt-6">
                      <span className="text-white font-medium">Reading</span>
                      <span className="text-blue-400 font-bold">87%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div className="bg-gradient-to-r from-blue-400 to-blue-500 h-3 rounded-full" style={{ width: '87%' }}></div>
                    </div>

                    <div className="flex items-center justify-between mt-6">
                      <span className="text-white font-medium">Meditation</span>
                      <span className="text-purple-400 font-bold">92%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div className="bg-gradient-to-r from-purple-400 to-purple-500 h-3 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Loved by Thousands
            </h2>
            <div className="flex items-center justify-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-gray-600 font-medium">(1,247 reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <div className="flex items-center space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "This tracker has completely changed how I approach my daily habits. Simple yet powerful!"
              </p>
              <p className="font-semibold text-gray-900">Sarah M.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <div className="flex items-center space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "Best habit tracker I've used. The Google Sheets format makes it so easy to customize."
              </p>
              <p className="font-semibold text-gray-900">David K.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <div className="flex items-center space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "Finally found a habit tracker that I actually stick with. Highly recommend!"
              </p>
              <p className="font-semibold text-gray-900">Emily R.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-gradient-to-br from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Start Building Better Habits Today
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Join thousands of people who are achieving their goals with Trackly
          </p>
          <Link
            to="/product"
            className="inline-block px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
          >
            Get Trackly Now
          </Link>
        </div>
      </section>
    </div>
  );
}
