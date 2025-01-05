import React from 'react';

function Footer() {
  return (
    <div className='mt-10'>
      <footer className="bg-gray-800 text-gray-100">
        <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center">
          {/* Branding Section */}
          <aside className="text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-2xl font-bold mb-2">LearnCore Education</h1>
            <p className="text-sm">
              Providing reliable tech since 2003. Empowering learners worldwide.
            </p>
            <p className="text-xs mt-2">© {new Date().getFullYear()} All rights reserved.</p>
          </aside>

          {/* Social Media Section */}
          <nav className="flex justify-center md:justify-end space-x-4 mb-6 md:mb-0">
            <a
              href="#"
              className="hover:text-pink-500 transition duration-300"
              aria-label="Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045C7.691 8.094 4.063 6.134 1.634 3.155c-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a
              href="#"
              className="hover:text-pink-500 transition duration-300"
              aria-label="YouTube">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zM9 15.999v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
            <a
              href="#"
              className="hover:text-pink-500 transition duration-300"
              aria-label="Facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path d="M9 8H6v4h3v12h5V12h3.642l.358-4H14V7.333C14 6.378 14.192 6 15.115 6h2.885V1h-3.808C11.596 1 10 2.583 10 5.615V8z" />
              </svg>
            </a>
          </nav>

          {/* Newsletter Section */}
          <div className="text-center md:text-right">
            <h2 className="text-lg font-bold mb-2">Subscribe to our Newsletter</h2>
            <form className="flex flex-col md:flex-row items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-500 mb-2 md:mb-0 md:mr-2"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-sm hover:bg-pink-500 transition duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-600 pt-6">
          <div className="container mx-auto flex justify-center">
            <p className="text-sm text-gray-400 pb-5">
              Designed with 💗
              by LearnCore Team.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
