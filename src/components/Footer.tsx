export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                © 2025 Math & Science Workbook. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-gray-600 dark:text-gray-400 text-sm">
                自分と友達用の問題掲示サイト
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}