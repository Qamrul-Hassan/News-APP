import Image from 'next/image'; // Import Image component
import Link from 'next/link';
import NotFoundImage from '../public/404.jpg'; // Import the image

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-slate-200 via-purple-500 to-slate-300 text-center p-6">
      <h1 className="text-6xl font-extrabold text-white mb-6 drop-shadow-lg">404 - Page Not Found</h1>
      <p className="text-xl text-white mb-6 opacity-80">
        Oops! The page you are looking for doesnt exist. Lets get you back on track!
      </p>
      
      {/* Image styling */}
      <div className="mb-6">
        <Image 
          src={NotFoundImage} 
          alt="404 Error Image" 
          width={700} 
          height={700} 
          className="rounded-lg shadow-2xl transform hover:scale-110 transition-transform duration-500 ease-in-out"
        />
      </div>
      
      {/* Link to homepage */}
      <Link href="/" className="text-white text-lg font-bold underline hover:text-yellow-400">
        Go back to homepage
      </Link>
    </div>
  );
}
