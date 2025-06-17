import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-slate-950 text-white text-center py-6 mt-8'>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
          <Link href="/privacy-policy">
            <span className="text-sm hover:underline hover:text-blue-400 cursor-pointer">Privacy Policy</span>
          </Link>
          <Link href="/terms">
            <span className="text-sm hover:underline hover:text-blue-400 cursor-pointer">Terms & Conditions</span>
          </Link>
          <Link href="/refund-policy">
            <span className="text-sm hover:underline hover:text-blue-400 cursor-pointer">Refund Policy</span>
          </Link>
        </div>

        <div className="flex justify-center gap-4 mb-4">
           <a
            href="https://github.com/Mohnish27-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 flex gap-2 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="white"
              className="w-6 h-6 hover:fill-gray-400 transition duration-300"
            >
              <title>GitHub</title>
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.385.6.11.793-.26.793-.577v-2.234c-3.338.725-4.033-1.416-4.033-1.416-.546-1.385-1.334-1.754-1.334-1.754-1.09-.744.082-.729.082-.729 1.205.086 1.84 1.236 1.84 1.236 1.07 1.834 2.81 1.304 3.495.997.108-.775.42-1.305.762-1.605-2.665-.3-5.467-1.334-5.467-5.933 0-1.312.469-2.383 1.236-3.223-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.004 2.047.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.223 0 4.61-2.807 5.63-5.48 5.922.432.373.816 1.104.816 2.224v3.293c0 .32.192.694.8.576C20.565 21.795 24 17.295 24 12c0-6.63-5.373-12-12-12Z" />
            
            </svg>
            <p className='hover:text-gray-400'>GitHub</p>
          </a>
            <a
            href="https://linkedin.com/in/mohnish-pamnani-595a81284/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 flex gap-2 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="white"
              className="w-6 h-6 hover:fill-blue-400 transition duration-300"
            >
              <title>LinkedIn</title>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.849-3.037-1.852 0-2.136 1.445-2.136 2.939v5.667H9.354V9h3.414v1.561h.049c.476-.9 1.637-1.848 3.368-1.848 3.6 0 4.266 2.368 4.266 5.452v6.287zM5.337 7.433a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM6.89 20.452H3.785V9H6.89v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.728v20.543C0 23.225.792 24 1.771 24h20.451C23.2 24 24 23.225 24 22.271V1.728C24 .774 23.2 0 22.225 0z" />
            </svg>
            <p className='hover:text-blue-400'>LinkedIn</p>
          </a>
        </div>

        <p className="text-sm">
          &copy; {new Date().getFullYear()} SmoothieVerse. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Built with ❤️ by the SmoothieVerse - Mohnish Pamnani.
        </p>
      </div>
    </footer>
  )
}

export default Footer
