import React from 'react';
import { Code, Lightbulb, TrendingUp, ArrowRight, Users, BookOpen, Brain } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      title: "Digital Skills Academy",
      icon: <Code className="h-8 w-8" />,
      description: "Learn coding, web development, and digital marketing skills essential for the modern workplace.",
      duration: "12 weeks",
      schedule: "Weekday evenings",
      skills: ["Web Development", "Digital Marketing", "Data Analytics"]
    },
    {
      title: "Leadership Mastery",
      icon: <Users className="h-8 w-8" />,
      description: "Develop crucial leadership and management skills through hands-on workshops and real-world projects.",
      duration: "8 weeks",
      schedule: "Weekend sessions",
      skills: ["Public Speaking", "Team Management", "Decision Making"]
    },
    {
      title: "Entrepreneurship Bootcamp",
      icon: <TrendingUp className="h-8 w-8" />,
      description: "Transform your ideas into successful businesses with guidance from experienced entrepreneurs.",
      duration: "16 weeks",
      schedule: "Flexible schedule",
      skills: ["Business Planning", "Marketing", "Financial Management"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <h1 className="text-4xl font-bold text-center mb-6">Free Programs for Youth Development</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
          Empowering young minds with practical skills and knowledge through our comprehensive training programs.
        </p>
      </div>

      {/* Programs Grid */}
      <div className="max-w-7xl mx-auto px-4 grid gap-8 md:grid-cols-3 mb-16">
        {programs.map((program, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                {program.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <div className="border-t border-gray-200 pt-4">
                <div className="mb-2">
                  <span className="font-semibold">Duration:</span> {program.duration}
                </div>
                <div className="mb-4">
                  <span className="font-semibold">Schedule:</span> {program.schedule}
                </div>
                <div className="space-y-2">
                  <span className="font-semibold">Key Skills:</span>
                  <div className="flex flex-wrap gap-2">
                    {program.skills.map((skill, idx) => (
                      <span key={idx} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-6 py-4">
              <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center justify-center space-x-2">
                <span>Apply Now</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Programs?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert-Led Training</h3>
            <p className="text-gray-600">Learn from industry professionals and experienced mentors.</p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Practical Learning</h3>
            <p className="text-gray-600">Hands-on projects and real-world applications of skills.</p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Career Support</h3>
            <p className="text-gray-600">Ongoing guidance and networking opportunities.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;