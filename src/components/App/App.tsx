import React, { useState } from "react";
import { Grid } from "@mui/material";
import SearchBar from "../SearchBar/SearchBar";
import WeatherDisplay from "../WeatherDisplay/WetherDisplay";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    fontWeightBold: 500,
  },
});

const backgrounds = [
  "background-initial",
  "background-normal",
  "background-hot",
  "background-cold",
];

function App(): JSX.Element {
  const [city, setCity] = useState<string>("");
  const [index, setIndex] = useState<number>(0);

  const handleCityChange = (city: string): void => {
    setCity(city);
  };

  const onDegree = (degree: number): void => {
    setIndex(() => {
      if (degree > 0 && degree < 20) {
        return 1;
      } else if (degree > 20) {
        return 2;
      } else if (degree < 0) {
        return 3;
      } else {
        return 0;
      }
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid className={`app ${backgrounds[index]}`} container justifyContent="center" alignItems="center" >
        <Grid item xs={12} md={6}>
          <SearchBar onSubmit={handleCityChange} />
          {city && <WeatherDisplay city={city} onDegree={onDegree} />}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
