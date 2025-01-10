import React from 'react';
import { ArrowRight, Users, BookOpen, Calendar, Award, Target, Sparkles, Globe } from 'lucide-react';

const Home = () => {
  const achievements = [
    { title: "Leadership Badge", count: 25 },
    { title: "Digital Skills", count: 42 },
    { title: "Community Service", count: 18 }
  ];

  return (
    <div>
      {/* Hero Section with Parallax Effect */}
      <div 
        className="relative h-[600px] bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-indigo-900/50">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl animate-fade-in">
              <h1 className="text-5xl font-bold mb-6 leading-tight">Empowering Youth for a Better Tomorrow</h1>
              <p className="text-xl mb-8">YADO provides free leadership development and skills training to empower underprivileged youth in our community.</p>
              <div className="flex space-x-4">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg flex items-center space-x-2 transform hover:scale-105 transition-transform">
                  <span>Join Our Programs</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3 rounded-lg flex items-center space-x-2">
                  <span>Watch Video</span>
                  <span className="ml-2">▶</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievement Badges Section */}
      <div className="bg-gradient-to-b from-indigo-900 to-indigo-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-all">
                <div className="flex items-center space-x-4">
                  <div className="bg-indigo-500/20 p-3 rounded-full">
                    <Award className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{achievement.title}</h3>
                    <p className="text-indigo-200">{achievement.count} Awarded</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section with Animation */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center transform hover:scale-105 transition-all">
              <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Leadership Development</h3>
              <p className="text-gray-600">Build essential leadership skills through hands-on workshops and mentoring.</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-all">
              <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Digital Skills Training</h3>
              <p className="text-gray-600">Learn in-demand digital skills to prepare for the modern workforce.</p>
            </div>
            <div className="text-center transform hover:scale-105 transition-all">
              <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Events</h3>
              <p className="text-gray-600">Participate in events that foster community engagement and growth.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section with Counter Animation */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Global Impact</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6 rounded-lg bg-gray-50 transform hover:scale-105 transition-all">
              <div className="text-4xl font-bold text-indigo-600 mb-2">1000+</div>
              <div className="text-gray-600">Youth Trained</div>
            </div>
            <div className="p-6 rounded-lg bg-gray-50 transform hover:scale-105 transition-all">
              <div className="text-4xl font-bold text-indigo-600 mb-2">50+</div>
              <div className="text-gray-600">Community Partners</div>
            </div>
            <div className="p-6 rounded-lg bg-gray-50 transform hover:scale-105 transition-all">
              <div className="text-4xl font-bold text-indigo-600 mb-2">100+</div>
              <div className="text-gray-600">Mentors</div>
            </div>
            <div className="p-6 rounded-lg bg-gray-50 transform hover:scale-105 transition-all">
              <div className="text-4xl font-bold text-indigo-600 mb-2">90%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Start Your Journey?</h2>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all flex items-center space-x-2 mx-auto">
            <span>Apply Now</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;