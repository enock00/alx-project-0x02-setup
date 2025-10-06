import React from "react";
import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

const AboutPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen py-10 gap-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">About Page ℹ️</h1>
        <p className="text-gray-600 mb-6 text-center w-3/4">
          This page demonstrates how to use a reusable Button component with
          customizable sizes and shapes.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <Button title="Small Button" size="small" shape="rounded-sm" />
          <Button title="Medium Button" size="medium" shape="rounded-md" />
          <Button title="Large Button" size="large" shape="rounded-full" />
        </div>
      </main>
    </div>
  );
};

export default AboutPage;