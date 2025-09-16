import Link from 'next/link';
import { ArrowRightIcon, BookOpenIcon, UsersIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { getAllProblems } from '@/lib/problems';

export default function Home() {
  // 最新の2つの問題を取得
  const allProblems = getAllProblems();
  const recentProblems = allProblems.slice(0, 2);
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px] dark:bg-blue-600"></div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pb-32 lg:flex lg:px-8 lg:py-32">
          <div className="mx-auto max-w-4xl lg:mx-0 lg:flex-auto lg:text-left">
            <div className="flex items-center gap-2 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 dark:bg-blue-500">
                <BookOpenIcon className="h-6 w-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wide uppercase">
                Roughfts Studying Platform
              </span>
            </div>
            
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
              <span className="block">Math & Science</span>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                Workbook
              </span>
            </h1>
            
            <p className="mt-8 text-xl leading-relaxed text-gray-600 dark:text-gray-300 lg:text-2xl lg:leading-relaxed">
              自分と友達用の<span className="font-semibold text-gray-900 dark:text-white">数学・理科問題掲示サイト</span>
            </p>
            
            <p className="mt-6 text-lg leading-relaxed text-gray-500 dark:text-gray-400 max-w-2xl">
              質の高い問題と詳細な解答で、効率的な学習を実現。仲間と一緒に、より深い理解を目指しましょう。
            </p>
            
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/problems"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-2xl transition-all duration-300 hover:bg-blue-700 hover:scale-105 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                <span className="relative z-10">問題を解く</span>
                <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 transition-opacity group-hover:opacity-100"></div>
              </Link>
              
              <Link
                href="/problems"
                className="inline-flex items-center justify-center rounded-xl border-2 border-gray-200 px-8 py-4 font-semibold text-gray-700 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 dark:border-gray-700 dark:text-gray-300 dark:hover:border-blue-600 dark:hover:bg-blue-950 dark:hover:text-blue-300"
              >
                問題一覧を見る
              </Link>
            </div>
            
            <div className="mt-16 flex items-center gap-8 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span>24/7 アクセス可能</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <span>高品質な問題</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                <span>詳細な解答付き</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400 tracking-wide uppercase">
              学習プラットフォーム
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              あなたの学習を<span className="text-blue-600 dark:text-blue-400">次のレベル</span>へ
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              最新の学習理論に基づいて設計された、効果的で楽しい学習体験を提供します
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
              <div className="group relative flex flex-col items-start bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300">
                <div className="rounded-xl bg-blue-600 dark:bg-blue-500 p-3 ring-1 ring-inset ring-blue-600/10 dark:ring-blue-500/10 group-hover:scale-110 transition-transform duration-300">
                  <BookOpenIcon className="h-6 w-6 text-white" />
                </div>
                <dt className="mt-6 text-xl font-semibold leading-7 text-gray-900 dark:text-white">
                  厳選された高品質問題
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">
                    数学と理科の専門知識を基に厳選された問題を提供。KaTeXによる美しい数式表示で、理解が深まります。
                  </p>
                </dd>
              </div>

              <div className="group relative flex flex-col items-start bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-green-300 dark:hover:border-green-600 transition-all duration-300">
                <div className="rounded-xl bg-green-600 dark:bg-green-500 p-3 ring-1 ring-inset ring-green-600/10 dark:ring-green-500/10 group-hover:scale-110 transition-transform duration-300">
                  <AcademicCapIcon className="h-6 w-6 text-white" />
                </div>
                <dt className="mt-6 text-xl font-semibold leading-7 text-gray-900 dark:text-white">
                  段階的な詳細解答
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">
                    各問題には段階的で分かりやすい解答を用意。解法の思考プロセスを理解し、応用力を身につけられます。
                  </p>
                </dd>
              </div>

              <div className="group relative flex flex-col items-start bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300">
                <div className="rounded-xl bg-purple-600 dark:bg-purple-500 p-3 ring-1 ring-inset ring-purple-600/10 dark:ring-purple-500/10 group-hover:scale-110 transition-transform duration-300">
                  <UsersIcon className="h-6 w-6 text-white" />
                </div>
                <dt className="mt-6 text-xl font-semibold leading-7 text-gray-900 dark:text-white">
                  仲間との協力学習
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">
                    友達と一緒に問題を解き、議論することで理解を深化。協力的な学習環境で、より効果的な学習を実現。
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Recent Problems Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400 tracking-wide uppercase">
              Latest Problems
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              新着問題をチェック
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              新しく追加された問題で、あなたの知識をさらに深めていきましょう
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {recentProblems.length > 0 ? (
              recentProblems.map((problem) => (
                <article key={problem.id} className="group relative isolate flex flex-col overflow-hidden rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300">
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900/50 via-gray-900/25"></div>
                  
                  <div className="relative p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset ${
                        problem.category === '代数' ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 ring-blue-600/20 dark:ring-blue-400/30' :
                        problem.category === '物理' ? 'bg-green-50 dark:bg-green-900/50 text-green-700 dark:text-green-300 ring-green-600/20 dark:ring-green-400/30' :
                        problem.category === '化学' ? 'bg-purple-50 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 ring-purple-600/20 dark:ring-purple-400/30' :
                        problem.category === '幾何' ? 'bg-yellow-50 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300 ring-yellow-600/20 dark:ring-yellow-400/30' :
                        'bg-gray-50 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300 ring-gray-600/20 dark:ring-gray-400/30'
                      }`}>
                        {problem.category}
                      </span>
                      <div className="h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        by {problem.author}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold leading-6 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {problem.title}
                    </h3>
                    
                    <p className="mt-4 text-base leading-6 text-gray-600 dark:text-gray-300">
                      {problem.description}
                    </p>
                    
                    <div className="mt-8 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>推定時間: {problem.estimatedTime}</span>
                      </div>
                      
                      <Link
                        href={`/problems/${problem.slug}`}
                        className="group/link inline-flex items-center gap-2 rounded-xl bg-blue-600 dark:bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 dark:hover:bg-blue-600 hover:scale-105 transition-all duration-200"
                      >
                        解いてみる
                        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="col-span-2 flex flex-col items-center justify-center py-16 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                  <BookOpenIcon className="h-8 w-8 text-gray-400 dark:text-gray-500" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">
                  問題が見つかりません
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  まだ問題が登録されていません。新しい問題の追加をお待ちください。
                </p>
              </div>
            )}
          </div>
          
          <div className="mt-16 text-center">
            <Link
              href="/problems"
              className="group inline-flex items-center gap-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-8 py-4 text-base font-semibold text-gray-900 dark:text-white shadow-sm hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300"
            >
              すべての問題を見る
              <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden bg-gray-900 dark:bg-gray-950 py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.900),transparent)] opacity-20"></div>
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white dark:bg-gray-900 shadow-xl shadow-blue-600/10 ring-1 ring-indigo-50 dark:ring-gray-800 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <h2 className="text-base font-semibold leading-7 text-blue-400 tracking-wide uppercase">
            始めよう
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            今すぐ学習を<br className="sm:hidden" />始めませんか？
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            質の高い問題と詳細な解答で、あなたの数学・理科の理解を深めましょう。
            友達と一緒に、効果的な学習を体験してください。
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/problems"
              className="rounded-xl bg-blue-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300"
            >
              問題を解き始める
            </Link>
            <Link
              href="/problems"
              className="text-base font-semibold leading-6 text-white hover:text-blue-400 transition-colors"
            >
              詳細を見る <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}