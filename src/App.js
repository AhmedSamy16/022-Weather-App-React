import { useState, useRef } from "react"
import Details from "./Details"

const api = {
  key: "c36f223c83b278e51d9d51c36b64e013",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [weather, setWeather] = useState('')
  const inputRef = useRef(null)

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${inputRef.current.value}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(res => {
          setWeather(res)
          inputRef.current.value = ''
        })
    }
  }
  return (
    <div className={`app ${weather.main && weather.main.temp > 22 && 'warm'}`}>
      <main>
        <div className="search-box">
          <input 
            type="text" 
            className="search-bar" 
            placeholder="Search..."
            ref={inputRef}
            onKeyDown={search}  />
        </div>
        {weather.main && <Details name={weather.name} country={weather.sys.country} degrees={Math.round(weather.main.temp)} condition={weather.weather[0].main} />}
      </main>
    </div>
  );
}

export default App;
