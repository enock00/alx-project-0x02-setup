import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState([
    { title: "Next.js Setup", content: "Project configured with TypeScript and Tailwind CSS." },
    { title: "Reusable Components", content: "We are building dynamic, reusable UI components with props." },
  ]);

  const handleAddPost = (newPost: { title: string; content: string }) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen py-10 gap-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Home Page 🏠</h1>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          + Add Post
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-4/5 mt-6">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
      </main>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </div>
  );
};

export default HomePage;
