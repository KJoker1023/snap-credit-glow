
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MarkdownRenderer from './MarkdownRenderer';

interface DocumentPageProps {
  title: string;
  content: string;
}

const DocumentPage: React.FC<DocumentPageProps> = ({ title, content }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
          <h1 className="text-3xl font-bold mb-6 text-pactgreen-700">{title}</h1>
          <MarkdownRenderer content={content} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DocumentPage;
