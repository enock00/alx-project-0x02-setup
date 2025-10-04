import React from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

const HomePage: React.FC = () => {
    return (
        <div>
            <Header/>
            <main className="flex flex-col items-center justify-center min-h-screen py-10">
                <h1 className="text-3xl font-bold text-gray-800">Home Page</h1>
                <p className="text-gray-600 ,mt-4">Welcome to the Home Page </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-4/5">
                <Card 
            title="Next.js Setup" 
            content="This project is configured with TypeScript and Tailwind CSS." 
            />
            <Card 
            title="Reusable Components" 
            content="We are building dynamic, reusable UI components with props." 
            />
            <Card 
            title="Routing Example" 
            content="Check out the About page and see navigation in action."
            />
            </div>
            </main>
        </div>
    );
};

export default HomePage