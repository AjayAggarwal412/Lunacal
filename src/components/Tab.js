import { motion } from "framer-motion";
import { useState } from "react";

let tabs = [
  { id: "About Me", label: "About Me" },
  { id: "Experiences", label: "Experiences" },
  { id: "Recommended", label: "Recommended" },
];

export function Tab() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flex space-x-20">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`relative rounded-full text-sm font-medium transition focus-visible:outline-2 ${
            activeTab === tab.id
              ? "text-white" // Text color for active tab
              : "text-[#A3ADB2] hover:text-white/60"
          }`}
          style={{
            padding: "12px 24px",
            fontSize: "18px",
            fontWeight: "500",
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-white mix-blend-difference"
              style={{
                borderRadius: 9999,
                background:
                  "linear-gradient(90deg, rgba(39, 39, 40, 0.1176) 0%, rgba(150, 190, 231, 0.0576) 100%)",
                boxShadow: `
                  13.49px 16.87px 67.47px 8.43px rgba(10, 10, 10, 1),
                  -8.43px -16.87px 50.6px -16.87px rgba(72, 91, 113, 1)
                `,
              }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </button>
      ))}
    </div>
  );
}
