import React from "react";
import Header from "@/components/layout/Header";

const HomePage: React.FC = () => {
    return (
        <div>
            <Header/>
            <main className="flex flex-col items-center justify-center min-h-screen py-10">
                <h1 className="text-3xl font-bold text-gray-800">Home Page</h1>
                <p className="text-gray-600 ,mt-4">Welcome to the Home Page </p>
            </main>
        </div>
    );
};

export default HomePage