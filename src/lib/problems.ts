import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface ProblemMetadata {
  title: string;
  author: string;
  category: string;
  difficulty: string;
  estimatedTime: string;
  keywords: string[];
  date: string;
  description: string;
}

export interface Problem extends ProblemMetadata {
  id: string;
  slug: string;
  questionContent: string;
  answerContent: string;
}

export function getAllProblems(): Problem[] {
  const dbPath = path.join(process.cwd(), 'db');
  const problems: Problem[] = [];

  try {
    const authors = fs.readdirSync(dbPath);
    
    for (const author of authors) {
      const authorPath = path.join(dbPath, author);
      if (!fs.statSync(authorPath).isDirectory()) continue;

      const problemDirs = fs.readdirSync(authorPath);
      
      for (const problemDir of problemDirs) {
        const problemPath = path.join(authorPath, problemDir);
        if (!fs.statSync(problemPath).isDirectory()) continue;

        const questionPath = path.join(problemPath, 'question.md');
        const answerPath = path.join(problemPath, 'ans.md');
        const metadataPath = path.join(problemPath, 'metadata.json');

        if (fs.existsSync(questionPath) && fs.existsSync(answerPath) && fs.existsSync(metadataPath)) {
          const questionFile = fs.readFileSync(questionPath, 'utf-8');
          const answerFile = fs.readFileSync(answerPath, 'utf-8');
          const metadataFile = fs.readFileSync(metadataPath, 'utf-8');

          const questionMatter = matter(questionFile);
          const answerMatter = matter(answerFile);
          const metadata: ProblemMetadata = JSON.parse(metadataFile);

          problems.push({
            id: `${author}/${problemDir}`,
            slug: `${author}/${problemDir}`,
            ...metadata,
            questionContent: questionMatter.content,
            answerContent: answerMatter.content,
          });
        }
      }
    }
  } catch (error) {
    console.error('Error reading problems:', error);
  }

  // Sort by date (newest first)
  return problems.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}