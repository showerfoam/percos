import React from "react";
import { useState } from "react";

export default function PercosHome() {
  const [darkMode, setDarkMode] = useState(false);

  const users = [
    { rank: 1, name: "UserOne", total: 12000 },
    { rank: 2, name: "UserTwo", total: 9800 },
    { rank: 3, name: "UserThree", total: 8700 },
    { rank: 4, name: "UserFour", total: 6900 },
    { rank: 5, name: "UserFive", total: 5800 },
    { rank: 6, name: "UserSix", total: 5100 },
  ];

  return (
    <main className={(darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 text-gray-800") + " min-h-screen transition-colors p-6"}>
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-orange-500">Percos Leaderboard</h1>
        <button onClick={() => setDarkMode(!darkMode)} className="text-sm bg-blue-500 text-white px-3 py-1 rounded">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      <section className="text-center py-10">
        <h2 className="text-4xl font-bold mb-4">Welcome to Percos Leaderboard</h2>
        <p className="text-lg mb-6">
          Join by using the promo code <span className="text-orange-500 font-semibold">PERCOS</span> on
          <a href="https://rain.gg" className="text-orange-500 hover:underline"> rain.gg</a> and
          <a href="https://csgogem.nu" className="text-orange-500 hover:underline"> csgogem.nu</a>
        </p>
        <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-2 rounded-xl shadow-lg transition-all">
          Join Now
        </button>
      </section>

      <section className="py-10">
        <h2 className="text-2xl font-semibold text-center mb-6">Live Leaderboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {users.map((user) => (
            <div key={user.rank} className="rounded-2xl shadow-md bg-white/70 backdrop-blur-sm dark:bg-white/10 p-6">
              <h3 className="text-xl font-bold mb-2">#{user.rank} {user.name}</h3>
              <p>Total Bet: {user.total.toLocaleString()} coins</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10">
        <h2 className="text-2xl font-semibold text-center mb-6">Rewards & Campaigns</h2>
        <div className="max-w-3xl mx-auto text-center text-base">
          <p className="mb-4">Top bettors each week receive exclusive skins and bonus coins. Stay active and climb the leaderboard to win!</p>
          <p className="font-medium text-orange-500">Winners are announced every Sunday!</p>
        </div>
      </section>

      <section className="py-10">
        <h2 className="text-2xl font-semibold text-center mb-6">Your Profile</h2>
        <div className="max-w-md mx-auto bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-xl shadow-md p-6">
          <input placeholder="Enter your username or SteamID" className="mb-4 p-2 w-full rounded border" />
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">View Stats</button>
        </div>
      </section>

      <footer className="text-center text-sm mt-20 text-blue-700 dark:text-blue-300">
        © {new Date().getFullYear()} Percos | Follow us on Discord & Twitter
      </footer>
    </main>
  );
}
