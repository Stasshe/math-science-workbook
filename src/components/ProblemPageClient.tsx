'use client';

import { useState } from 'react';
import Link from 'next/link';
import MarkdownPreview from '@/components/MarkdownPreview';
import { ArrowLeftIcon, ClockIcon, UserIcon, TagIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { Problem } from '@/lib/problems';

interface ProblemPageClientProps {
  problem: Problem;
}

export default function ProblemPageClient({ problem }: ProblemPageClientProps) {
  const [showAnswer, setShowAnswer] = useState(false);

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case '代数':
      case 'algebra':
        return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200';
      case '物理':
      case 'physics':
        return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
      case '化学':
      case 'chemistry':
        return 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200';
      case '生物':
      case 'biology':
        return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200';
      case '幾何':
      case 'geometry':
        return 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200';
      default:
        return 'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case '初級':
      case 'easy':
        return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
      case '中級':
      case 'medium':
        return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200';
      case '上級':
      case 'hard':
        return 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200';
      default:
        return 'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200';
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Navigation */}
      <div className="mb-8">
        <Link
          href="/problems"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-4"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-1" />
          問題一覧に戻る
        </Link>
      </div>

      {/* Problem Header */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6 mb-6">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${getCategoryColor(problem.category)}`}>
            {problem.category}
          </span>
          <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${getDifficultyColor(problem.difficulty)}`}>
            {problem.difficulty}
          </span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {problem.title}
        </h1>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {problem.description}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center">
            <UserIcon className="h-4 w-4 mr-1" />
            <span>{problem.author}</span>
          </div>
          <div className="flex items-center">
            <ClockIcon className="h-4 w-4 mr-1" />
            <span>{problem.estimatedTime}</span>
          </div>
          <div className="flex items-center">
            <CalendarIcon className="h-4 w-4 mr-1" />
            <span>{new Date(problem.date).toLocaleDateString('ja-JP')}</span>
          </div>
        </div>

        {problem.keywords.length > 0 && (
          <div className="mt-4">
            <div className="flex items-center mb-2">
              <TagIcon className="h-4 w-4 mr-1 text-gray-500 dark:text-gray-400" />
              <span className="text-sm text-gray-500 dark:text-gray-400">キーワード:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {problem.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Problem Content */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          問題
        </h2>
        <MarkdownPreview 
          content={problem.questionContent}
          className="prose dark:prose-invert max-w-none"
        />
      </div>

      {/* Answer Section */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            解答
          </h2>
          <button
            onClick={() => setShowAnswer(!showAnswer)}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              showAnswer
                ? 'bg-red-600 hover:bg-red-700 text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {showAnswer ? '解答を隠す' : '解答を表示'}
          </button>
        </div>

        {showAnswer ? (
          <MarkdownPreview 
            content={problem.answerContent}
            className="prose dark:prose-invert max-w-none"
          />
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">
              解答を見るには上のボタンをクリックしてください
            </p>
          </div>
        )}
      </div>
    </div>
  );
}