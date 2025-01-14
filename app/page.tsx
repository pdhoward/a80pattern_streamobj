import Link from "next/link";
import { SearchInterface } from "@/components/search-interface";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-neutral-900">
      <header className="w-full shadow-md">
        <div className="container mx-auto py-4 text-center">          
          <h1 className="text-2xl font-medium text-white">
            A80 Patterns Lib
          </h1>
          <h3 className="text-lg font-normal text-gray-400 mt-2">
              Code Pattern to Support Agent Interactions through Streaming Objects
          </h3>
          <div className="mt-4">
              <Link
                href="https://github.com/pdhoward/a80pattern_streamobj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Link to A80 Code Example
              </Link>
            </div>
        </div>
      </header> 
      <main>
          <SearchInterface />
      </main> 
         
      </div>    
    </>
  
  );
}
