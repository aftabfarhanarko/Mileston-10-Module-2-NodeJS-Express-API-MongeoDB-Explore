import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 py-20">
      <div className="flex justify-center items-center text-center px-4">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg tracking-wide">
            Discover Your Creative World
          </h1>

          <p className="mt-6 text-lg text-white/90 leading-relaxed">
            Where imagination meets innovation. Build, design, and create
            experiences that inspire. Your journey begins here — make it
            extraordinary.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button className="px-8 py-3 rounded-xl bg-white text-purple-700 font-semibold shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              Get Started
            </button>

            <button className="px-8 py-3 rounded-xl border border-white/40 text-white font-semibold hover:bg-white/10 hover:-translate-y-1 transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
