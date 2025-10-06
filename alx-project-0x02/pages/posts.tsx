"use client";
import React, { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      // Only take first 10 posts for clarity
      const formattedData = data.slice(0, 10).map((post: any) => ({
        id: post.id,
        title: post.title,
        content: post.body,
        userId: post.userId,
      }));
      setPosts(formattedData);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      <div className="p-6 space-y-4">
        <h1 className="text-3xl font-bold mb-4">Posts</h1>
        {posts.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                title={post.title}
                content={post.content}
                userId={post.userId}
                id={post.id}
              />
            ))}
          </div>
        ) : (
          <p>Loading posts...</p>
        )}
      </div>
    </div>
  );
};

export default PostsPage;
