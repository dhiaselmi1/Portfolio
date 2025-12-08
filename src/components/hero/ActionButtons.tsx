import React from 'react';
import { FileText, Mail } from 'lucide-react';
import { Link } from '../Link';

export function ActionButtons() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <a
        href="https://trzzhogdlmdumpdkazyu.supabase.co/storage/v1/object/sign/cv/Mohamed%20dhia%20selmi.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xNzg5MzlmYi0wNmZlLTQ2YzItOGZkZS1iMGI1YmIxODhjZDkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJjdi9Nb2hhbWVkIGRoaWEgc2VsbWkucGRmIiwiaWF0IjoxNzY1MTg5OTEyLCJleHAiOjE4MjgyNjE5MTJ9.CG0HGgOqkI_a1JpBTf1iUP8NnPKAnwGLTcvY5DOYcP8"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-3 py-2 rounded-md text-sm sm:text-base bg-blue-600 text-white hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105"
      >
        <FileText className="w-5 h-5" />
        <span>View Resume</span>
      </a>
      <Link
        href="#contact"
        className="flex items-center gap-2 px-3 py-2 rounded-md text-sm sm:text-base text-blue-600 dark:text-blue-400 border-2 border-blue-600 transition-transform duration-300 transform hover:scale-105"
      >
        <Mail className="w-5 h-5" />
        <span>Contact Me</span>
      </Link>
    </div>
  );
}
