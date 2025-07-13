import React from "react";

const Home: React.FC = () => {
  return (
    <main className="font-sans bg-gray-50 min-h-screen">
      <header className="py-8 text-center bg-white">
        <h1 className="text-gray-800 text-4xl font-bold mb-2">Helping Hand</h1>
        <p className="text-gray-600 text-xl">
          Support street dogs, cows, and bulls. Your donation makes a difference!
        </p>
      </header>
      <section className="max-w-2xl mx-auto my-8 p-8 bg-white rounded-xl shadow-md">
        <h2 className="text-blue-600 text-2xl font-semibold mb-4">Why Donate?</h2>
        <ul className="text-gray-800 text-lg mb-8 list-disc list-inside space-y-2">
          <li>Provide food and shelter for street animals</li>
          <li>Support medical care and vaccinations</li>
          <li>Help rescue and rehabilitation efforts</li>
        </ul>
        <div className="text-center">
          <a
            href="/donate"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg shadow hover:bg-blue-700 transition"
          >
            Donate Now
          </a>
        </div>
      </section>
      <footer className="text-center py-4 text-gray-500 text-base">
        &copy; {new Date().getFullYear()} Helping Hand. All rights reserved.
      </footer>
    </main>
  );
};

export default Home;
