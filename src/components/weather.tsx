function SunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-14 h-14 text-yellow-200"
    >
      <circle cx="12" cy="12" r="5" />
      <path
        d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
        strokeWidth="2"
        stroke="currentColor"
      />
    </svg>
  );
}

interface WeatherCardProps {
  location?: string;
  themeColor: string;
  temperature?: number;
  humidity?: number;
  windSpeed?: number;
  feelsLike?: number;
}

export function WeatherCard({
  location,
  themeColor,
  temperature,
  humidity,
  windSpeed,
  feelsLike,
}: WeatherCardProps) {
  return (
    <div
      style={{ backgroundColor: themeColor }}
      className="rounded-xl shadow-xl max-w-md w-full"
    >
      <div className="bg-white/20 p-6 w-full rounded-xl">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-white capitalize">
              {location}
            </h3>
            <p className="text-white/80">Current Weather</p>
          </div>
          <SunIcon />
        </div>

        <div className="mt-4 flex items-end justify-between">
          <div className="text-4xl font-bold text-white">
            {temperature}°C
          </div>
          <div className="text-sm text-white/80">Live Data</div>
        </div>

        <div className="mt-4 pt-4 border-t border-white/30">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-white/70 text-xs">Humidity</p>
              <p className="text-white font-medium text-lg">{humidity}%</p>
            </div>
            <div>
              <p className="text-white/70 text-xs">Wind</p>
              <p className="text-white font-medium text-lg">{windSpeed} km/h</p>
            </div>
            <div>
              <p className="text-white/70 text-xs">Feels Like</p>
              <p className="text-white font-medium text-lg">{feelsLike}°C</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}