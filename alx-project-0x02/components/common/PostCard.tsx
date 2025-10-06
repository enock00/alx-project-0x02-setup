import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
    return (
        <div className="border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition-all">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-700 mb-2">{content}</p>
            <p className="text-sm text-gray-500">Posted by User {userId}</p>
            </div>
    );
};

export default PostCard;