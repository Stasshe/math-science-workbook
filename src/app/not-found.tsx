import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
            ページが見つかりません
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            お探しのページは存在しないか、移動した可能性があります。
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            ホームに戻る
          </Link>
          <div>
            <Link
              href="/problems"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              問題一覧を見る
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}