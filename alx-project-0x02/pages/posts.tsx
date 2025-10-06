import React from "react";
import Header from "@/components/layout/Header";

const PostsPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen py-10">
        <h1 className="text-3xl font-bold text-gray-800">Posts Page 📝</h1>
        <p className="text-gray-600 mt-4">
          Here you’ll see all the posts added by users.
        </p>
      </main>
    </div>
  );
};

export default PostsPage;
