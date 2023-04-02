import React, { useState, ChangeEvent, FormEvent } from "react";
import { TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.css";

interface SearchBarProps {
  onSubmit: (city: string) => void;
}

function SearchBar({ onSubmit }: SearchBarProps): JSX.Element {
  const [city, setCity] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onSubmit(city);
    setCity("");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setCity(event.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <TextField
        id="city-input"
        label="Enter city name"
        variant="outlined"
        value={city}
        onChange={handleChange}
      />
      <IconButton type="submit">
        <SearchIcon className="button" />
      </IconButton>
    </form>
  );
}

export default SearchBar;
