import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto max-w-4xl bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="flex-1 h-full md:w-1/2 md:pr-6 mb-6 md:mb-0">
          <img
            src="https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg"
            alt="Contact Us"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Contact Form Section */}
        <div className="flex-1 md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg mb-6">
            We’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out using the form below.
          </p>
          <form
            action="https://formspree.io/f/your-form-id" // Replace with your form endpoint
            method="POST"
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
