import React from 'react';
import { Heart, Target, Globe, Users } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Dr. James Wilson",
      role: "Executive Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
    },
    {
      name: "Maria Garcia",
      role: "Program Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
    },
    {
      name: "David Chen",
      role: "Community Outreach",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mission Section */}
      <div className="bg-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Mission</h1>
            <p className="text-xl">
              To empower underprivileged youth through education, mentorship, and leadership development, creating pathways to success and positive community impact.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Empowerment</h3>
              <p className="text-gray-600">Building confidence and capability in every youth.</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">Striving for the highest standards in all we do.</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Inclusion</h3>
              <p className="text-gray-600">Creating opportunities for all youth regardless of background.</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">Building strong relationships and support networks.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="py-20 bg-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact Since 2020</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div>Youth Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div>Community Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div>Cities Reached</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div>Program Completion</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;