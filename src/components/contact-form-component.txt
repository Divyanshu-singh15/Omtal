// File: src/components/sections/ContactForm.jsx
import { useState } from 'react';
import Button from '../common/Button';

const ContactForm = ({
  title = "Get in Touch",
  subtitle = "Contact us for bookings, inquiries, or special requests",
  bgColor = "bg-white",
  compact = false,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real implementation, this would send data to an API
    // Simulate API call with timeout
    setStatus({
      submitted: true,
      success: null,
      message: 'Sending your message...'
    });
    
    setTimeout(() => {
      setStatus({
        submitted: true,
        success: true,
        message: 'Thank you for your message. We will get back to you shortly.'
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <section className={`${bgColor} py-16 ${compact ? 'md:py-16' : 'md:py-24'}`}>
      <div className="container">
        <div className={`${compact ? 'max-w-3xl mx-auto' : ''}`}>
          {/* Section Header */}
          <div className={`${compact ? 'text-center mb-8' : 'max-w-2xl mb-12'}`}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-neutral-600 text-lg">
                {subtitle}
              </p>
            )}
          </div>
          
          <div className={`${compact ? '' : 'grid grid-cols-1 lg:grid-cols-5 gap-12'}`}>
            {/* Contact Info - Only displayed in non-compact mode */}
            {!compact && (
              <div className="lg:col-span-2">
                <div className="bg-primary text-white rounded-lg p-8 h-full">
                  <h3 className="font-heading text-2xl mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="mr-4 text-2xl">📍</div>
                      <div>
                        <h4 className="font-medium mb-1">Address</h4>
                        <p className="text-white/80">
                          123 Luxury Avenue<br />
                          City, Country 12345
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 text-2xl">📞</div>
                      <div>
                        <h4 className="font-medium mb-1">Phone</h4>
                        <p className="text-white/80">
                          Reception: +1 (123) 456-7890<br />
                          Reservations: +1 (123) 456-7891
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 text-2xl">✉️</div>
                      <div>
                        <h4 className="font-medium mb-1">Email</h4>
                        <p className="text-white/80">
                          info@luxuryhotel.com<br />
                          reservations@luxuryhotel.com
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 text-2xl">🕒</div>
                      <div>
                        <h4 className="font-medium mb-1">Hours</h4>
                        <p className="text-white/80">
                          Check-in: 3:00 PM<br />
                          Check-out: 12:00 PM<br />
                          Reception: 24/7
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Contact Form */}
            <div className={compact ? '' : 'lg:col-span-3'}>
              <div className="bg-white rounded-lg shadow-md p-8">
                {status.submitted && (
                  <div className={`mb-6 p-4 rounded ${
                    status.success === null 
                      ? 'bg-yellow-50 text-yellow-800' 
                      : status.success 
                        ? 'bg-green-50 text-green-800' 
                        : 'bg-red-50 text-red-800'
                  }`}>
                    {status.message}
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label 
                        htmlFor="name" 
                        className="block text-sm font-medium text-neutral-700 mb-1"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    
                    <div>
                      <label 
                        htmlFor="email" 
                        className="block text-sm font-medium text-neutral-700 mb-1"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label 
                        htmlFor="phone" 
                        className="block text-sm font-medium text-neutral-700 mb-1"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    
                    <div>
                      <label 
                        htmlFor="subject" 
                        className="block text-sm font-medium text-neutral-700 mb-1"
                      >
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary appearance-none bg-white"
                      >
                        <option value="">Select a subject</option>
                        <option value="Reservation">Reservation Inquiry</option>
                        <option value="Special Request">Special Request</option>
                        <option value="Group Booking">Group Booking</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label 
                      htmlFor="message" 
                      className="block text-sm font-medium text-neutral-700 mb-1"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={status.submitted && status.success === null}
                    >
                      {status.submitted && status.success === null 
                        ? 'Sending...' 
                        : 'Send Message'}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;