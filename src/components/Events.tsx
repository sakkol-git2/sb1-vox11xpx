import React from 'react';
import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      title: "Youth Leadership Summit 2024",
      date: "March 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Community Center",
      type: "Conference",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80"
    },
    {
      title: "Digital Skills Workshop",
      date: "March 20, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Tech Hub",
      type: "Workshop",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
    },
    {
      title: "Entrepreneurship Networking",
      date: "March 25, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "Innovation Center",
      type: "Networking",
      image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-4xl font-bold mb-6">Upcoming Events & Workshops</h1>
              <p className="text-xl mb-8">Join our community events and workshops to learn, connect, and grow together.</p>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg flex items-center space-x-2">
                <span>View All Events</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Events</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm mb-4">
                    {event.type}
                  </span>
                  <h3 className="text-xl font-bold mb-4">{event.title}</h3>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-6 py-4">
                  <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center justify-center space-x-2">
                    <span>Register Now</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Monthly Calendar</h2>
            <p className="text-gray-600 mb-8">
              Stay updated with our events calendar. We regularly organize workshops, seminars, and networking events to support your growth.
            </p>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 flex items-center space-x-2 mx-auto">
              <Calendar className="h-5 w-5" />
              <span>View Full Calendar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;