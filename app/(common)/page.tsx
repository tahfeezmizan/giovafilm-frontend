// import { HomeScreen } from "@/components/Common/home-screen";
// import React from "react";

// export default function page() {
//   return (
//     <div>
//       <HomeScreen />
//     </div>
//   );
// }

"use client";

import { HomeScreen } from "@/components/Common/home-screen";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

// --- Main App ---

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("home");

  return (
    <div className="min-h-screen  flex justify-center overflow-x-hidden">
      {/* Mobile Container */}
      <div className="min-h-screen relative overflow-hidden">
        {/* Screen Switcher (For Preview Purposes) */}
        {/* <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex gap-2 bg-black/80 backdrop-blur-md p-1.5 rounded-full border border-white/10 shadow-xl">
          {["home", "login", "signup", "details"].map((screen) => (
            <button
              key={screen}
              onClick={() => setCurrentScreen(screen)}
              className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all ${
                currentScreen === screen
                  ? "bg-[#FFC107] text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {screen}
            </button>
          ))}
        </div> */}

        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full h-full"
          >
            {currentScreen === "home" && (
              <HomeScreen onNavigate={setCurrentScreen} />
            )}
            {/* {currentScreen === "login" && (
              <LoginScreen onNavigate={setCurrentScreen} />
            )}
            {currentScreen === "signup" && (
              <SignupScreen onNavigate={setCurrentScreen} />
            )}
            {currentScreen === "details" && (
              <DetailsScreen onNavigate={setCurrentScreen} />
            )} */}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
