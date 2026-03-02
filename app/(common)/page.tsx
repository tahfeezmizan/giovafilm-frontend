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
  return (
    <div className="min-h-screen  flex justify-center overflow-x-hidden">
      {/* Mobile Container */}
      <div className="min-h-screen relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <HomeScreen />
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
