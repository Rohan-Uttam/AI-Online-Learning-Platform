"use client";

import React from "react";

function WelcomeBanner(){
  return (
    <div className="p-5 bg-gradient-to-br from-blue-600 via-indigo-600 to-pink-500 rounded-xl">
      <h2 className="font-bold text-2xl text-white">
        Welcome to Online Learning Platform
      </h2>
      <p className="text-white">
        Learn, Create, and Explore your favourite course
      </p>
    </div>
  );
};

export default WelcomeBanner;
