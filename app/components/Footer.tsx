export default function Footer() {
    return (
      <footer className="bg-white dark:bg-neutral-900 shadow-inner py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Flash News. All rights reserved.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 sm:mt-0">
            Built with ❤️ using Next.js and Tailwind CSS
          </p>
        </div>
      </footer>
    );
  }
  