import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
    <Header/>
    <main className="flex items-center justify center h-screen bg-gray-50">
      <h2 className="text-3xl font-semibold text-gray 800">
        Welcome to ALX Project 2 with Next.js + TypeScript + Tailwind CSS!
      </h2>
    </main>
    </>
  ); 
}