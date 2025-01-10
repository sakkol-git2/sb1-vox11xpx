import React from 'react';
import { Users, Target, Sparkles, ArrowRight } from 'lucide-react';

const Mentorship = () => {
  const mentors = [
    {
      name: "Sarah Johnson",
      role: "Tech Lead at Google",
      expertise: ["Software Development", "Career Guidance"],
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      expertise: ["Entrepreneurship", "Business Strategy"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
    },
    {
      name: "Lisa Rodriguez",
      role: "Digital Marketing Director",
      expertise: ["Marketing", "Brand Development"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">Connect with Expert Mentors</h1>
          <p className="text-xl max-w-3xl mx-auto text-center mb-8">
            Get personalized guidance from industry professionals who are passionate about helping youth succeed.
          </p>
          <div className="flex justify-center">
            <button className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 flex items-center space-x-2">
              <span>Find Your Mentor</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How Our Mentorship Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Match with a Mentor</h3>
              <p className="text-gray-600">We pair you with a mentor based on your goals and interests.</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Set Goals</h3>
              <p className="text-gray-600">Work with your mentor to create a personalized development plan.</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Achieve Growth</h3>
              <p className="text-gray-600">Regular sessions and guidance to help you reach your potential.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Mentors */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Mentors</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={mentor.image} 
                  alt={mentor.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{mentor.name}</h3>
                  <p className="text-gray-600 mb-4">{mentor.role}</p>
                  <div className="space-y-2">
                    <div className="font-semibold">Expertise:</div>
                    <div className="flex flex-wrap gap-2">
                      {mentor.expertise.map((skill, idx) => (
                        <span key={idx} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentorship;