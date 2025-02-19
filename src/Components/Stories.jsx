import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const stories = [
  { id: 1, name: "Jane Doe", story: "I overcame great challenges and found hope in the darkest times. My journey has inspired many to seek help and never give up.", image: "https://via.placeholder.com/300" },
  { id: 2, name: "John Smith", story: "Surviving abuse changed my life. I now advocate for others and help them find their voice.", image: "https://via.placeholder.com/300" },
  { id: 3, name: "Emily Johnson", story: "Finding strength after trauma was not easy, but with support and resilience, I rebuilt my life.", image: "https://via.placeholder.com/300" },
  { id: 4, name: "Michael Brown", story: "Healing is possible for everyone. My story proves that we can rise above pain and rediscover happiness.", image: "https://via.placeholder.com/300" },
];

export default function StoriesPage() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 2;
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden bg-white flex flex-col items-center justify-center relative">
      <nav className="absolute top-0 w-full p-5 bg-white shadow-md flex justify-center">
        <h1 className="text-3xl font-bold text-blue-800">Survivor Stories</h1>
      </nav>

      <div className="mt-24 mb-10 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Stories of Strength & Resilience</h2>
        <p className="text-gray-600 mt-2 text-lg">Read the inspiring journeys of survivors who overcame adversity.</p>
      </div>

      <div
        ref={scrollRef}
        className="w-full h-[500px] flex overflow-x-auto space-x-6 px-10 scrollbar-hide touch-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {stories.concat(stories).map((story, index) => (
          <motion.div
            key={index}
            className="min-w-[400px] h-[500px] bg-white shadow-2xl rounded-2xl p-6 flex flex-col justify-between items-center border border-gray-300 transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            <img src={story.image} alt={story.name} className="w-full h-56 object-cover rounded-xl mb-4" />
            <h2 className="text-2xl font-semibold text-blue-900">{story.name}</h2>
            <p className="text-gray-600 text-center px-4 text-lg">{story.story}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
