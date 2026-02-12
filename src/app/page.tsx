"use client";

import { WeatherCard } from "@/components/weather";
import { StudentFormCard } from "@/components/student-form";
import { useCopilotAction } from "@copilotkit/react-core";
import {
  CopilotKitCSSProperties,
  CopilotSidebar,
} from "@copilotkit/react-ui";
import { useState, useEffect } from "react";

export default function CopilotKitPage() {
  const [themeColor, setThemeColor] = useState("#6366f1");

  useCopilotAction({
    name: "setThemeColor",
    description: "Set the theme color of the application",
    parameters: [
      {
        name: "themeColor",
        type: "string",
        description: "The hex color code for the theme",
        required: true,
      },
    ],
    handler: async ({ themeColor }: { themeColor: string }) => {
      setThemeColor(themeColor);
    },
  });

  return (
    <main
      style={
        { "--copilot-kit-primary-color": themeColor } as CopilotKitCSSProperties
      }
    >
      <CopilotSidebar 
        disableSystemMessage 
        clickOutsideToClose={false}
        defaultOpen={true}
      >
        <YourMainContent themeColor={themeColor} />
      </CopilotSidebar>
    </main>
  );
}

function YourMainContent({ themeColor }: { themeColor: string }) {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [studentForm, setStudentForm] = useState<any>(null);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Hide welcome message after 5 seconds
    const timer = setTimeout(() => setShowWelcome(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useCopilotAction({
    name: "get-weather",
    description: "Display weather information",
    parameters: [
      {
        name: "location",
        type: "string",
      },
      {
        name: "temperature",
        type: "number",
      },
      {
        name: "humidity",
        type: "number",
      },
      {
        name: "windSpeed",
        type: "number",
      },
      {
        name: "feelsLike",
        type: "number",
      },
    ],
    handler: async (params: any) => {
      setWeatherData(params);
    },
  });

  useCopilotAction({
    name: "fill-student-form",
    description: "Display student form",
    parameters: [
      {
        name: "name",
        type: "string",
      },
      {
        name: "age",
        type: "number",
      },
      {
        name: "branch",
        type: "string",
      },
    ],
    handler: async (params: any) => {
      setStudentForm(params);
    },
  });

  return (
    <div
      style={{ backgroundColor: themeColor }}
      className="min-h-screen flex flex-col items-center justify-center gap-6 transition-colors duration-500 p-6 relative"
    >
      {/* Welcome Popup */}
      {showWelcome && (
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl max-w-lg w-full mx-4 animate-fade-in z-10">
          <button
            onClick={() => setShowWelcome(false)}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl"
          >
            ×
          </button>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            👋 Welcome to Your AI Assistant!
          </h2>
          <p className="text-gray-600 mb-4">
            I can help you with weather information and student forms. Try these:
          </p>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="bg-blue-50 p-3 rounded-lg">
              💬 "What's the weather in Mumbai?"
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              📝 "Fill student form for Pranjal, age 21, CSE branch"
            </div>
            <div className="bg-purple-50 p-3 rounded-lg">
              🎨 "Change theme to dark red" (try: #991b1b)
            </div>
          </div>
        </div>
      )}

      {/* Quick Action Buttons */}
      <div className="absolute top-6 right-6 flex gap-3 z-10">
        {!weatherData && (
          <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer hover:scale-105">
            <span className="text-sm font-medium text-gray-700">
              💡 Try: "Weather in Delhi"
            </span>
          </div>
        )}
        {!studentForm && (
          <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer hover:scale-105">
            <span className="text-sm font-medium text-gray-700">
              💡 Try: "Fill a student form"
            </span>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col items-center justify-center gap-6 w-full max-w-4xl">
        {!weatherData && !studentForm && (
          <div className="text-center space-y-6 animate-fade-in">
            <div className="text-6xl mb-4 animate-bounce">🤖</div>
            <h1 className="text-4xl font-bold text-white drop-shadow-lg">
              Your AI Assistant
            </h1>
            <p className="text-xl text-white/90 max-w-md">
              Ask me about the weather or to fill student forms!
            </p>
            
            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl border border-white/30 hover:bg-white/30 transition-all cursor-pointer">
                <div className="text-4xl mb-3">🌤️</div>
                <h3 className="text-lg font-semibold text-white mb-2">Weather Info</h3>
                <p className="text-sm text-white/80">
                  Get real-time weather for any city
                </p>
              </div>
              
              <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl border border-white/30 hover:bg-white/30 transition-all cursor-pointer">
                <div className="text-4xl mb-3">📋</div>
                <h3 className="text-lg font-semibold text-white mb-2">Student Forms</h3>
                <p className="text-sm text-white/80">
                  Fill student information quickly
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Weather Card with Animation */}
        {weatherData && (
          <div className="animate-slide-in">
            <WeatherCard
              location={weatherData.location}
              themeColor={themeColor}
              temperature={weatherData.temperature}
              humidity={weatherData.humidity}
              windSpeed={weatherData.windSpeed}
              feelsLike={weatherData.feelsLike}
            />
          </div>
        )}

        {/* Student Form Card with Animation */}
        {studentForm && (
          <div className="animate-slide-in">
            <StudentFormCard
              name={studentForm.name}
              age={studentForm.age}
              branch={studentForm.branch}
              themeColor={themeColor}
            />
          </div>
        )}

        {/* Clear Button */}
        {(weatherData || studentForm) && (
          <button
            onClick={() => {
              setWeatherData(null);
              setStudentForm(null);
            }}
            className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-6 py-3 rounded-full font-medium transition-all border border-white/30 hover:scale-105"
          >
            🔄 Clear & Start Fresh
          </button>
        )}
      </div>
    </div>
  );
}