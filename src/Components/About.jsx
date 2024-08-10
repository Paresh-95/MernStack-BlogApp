import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg mb-4">
            At [Blog Name], our mission is to provide our readers with high-quality, engaging, and insightful content on [topics covered by your blog]. We strive to inspire, educate, and entertain through our articles and posts, ensuring that every visit to our blog leaves you more informed and connected.
          </p>
          <p className="text-lg">
            We believe in the power of sharing knowledge and experiences, and we aim to create a community where readers can learn from each other and contribute to a larger conversation on [specific topics or issues].
          </p>
        </section>

        <section className="flex flex-col md:flex-row md:items-center mb-8">
          <div className="md:w-1/2 md:pr-6 mb-6 md:mb-0">
            <img
              src="https://images.pexels.com/photos/3184301/pexels-photo-3184301.jpeg"
              alt="Our Team"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
            <p className="text-lg mb-4">
              Our team consists of passionate individuals who bring diverse skills and perspectives to the table. We come from various backgrounds, but we all share a common love for [your blog's focus, e.g., writing, technology, travel]. Each member contributes their unique expertise to create content that resonates with our audience.
            </p>
            <p className="text-lg">
              We are committed to continuous learning and growth, both as individuals and as a team, and we are excited to share our journey with you through our blog.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-lg mb-4">
            We would love to hear from you! If you have any questions, feedback, or just want to connect, feel free to reach out via our <a href="/contact" className="text-blue-500 hover:underline">Contact</a> page.
          </p>
          <p className="text-lg">
            Follow us on social media for the latest updates and more engaging content:
            <ul className="list-disc ml-6 mt-2">
              <li><a href="https://twitter.com/your-twitter" className="text-blue-500 hover:underline">Twitter</a></li>
              <li><a href="https://facebook.com/your-facebook" className="text-blue-500 hover:underline">Facebook</a></li>
              <li><a href="https://instagram.com/your-instagram" className="text-blue-500 hover:underline">Instagram</a></li>
            </ul>
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
