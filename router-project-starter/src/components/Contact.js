import React from 'react'

export const Contact = () => {
  return (
    
    <>
        <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-gray-400 mb-2">Email: info@yourwebsite.com</p>
          <p className="text-gray-400 mb-2">Phone: +1 (123) 456-7890</p>
          <p className="text-gray-400">Address: 123 Coding Street, Cityville, Country</p>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-400">Name</label>
              <input type="text" id="name" name="name" className="border-2 border-gray-300 rounded-md p-2 w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-400">Email</label>
              <input type="email" id="email" name="email" className="border-2 border-gray-300 rounded-md p-2 w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-400">Message</label>
              <textarea id="message" name="message" rows="4" className="border-2 border-gray-300 rounded-md p-2 w-full"></textarea>
            </div>
            <button type="submit" className="bg-yellow-400 text-black py-2 px-4 rounded">Submit</button>
          </form>
        </div>
      </div>
        </div>
    </>
  )
}
