import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

const RatingStars = () => {
  const [value, setValue] = useState(0);

  const handleRating = (event, newValue) => {
    setValue(newValue);
    console.log("Avaliação:", newValue);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <Rating
        name="half-rating"
        value={value}
        onChange={handleRating}
        precision={0.5} // Habilita meias estrelas
        size="large" // Tamanho das estrelas
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <span style={{ fontSize: "0.9rem", fontWeight: "400" }}>
        {value.toFixed(1)}/5 {/* Exibe o valor com 1 casa decimal */}
      </span>
    </div>
  );
};

const Estrelas = ({ value = 5 }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <Rating
        name="read-only-rating"
        value={value} // Define o valor das estrelas
        readOnly // Desabilita a interação do usuário
        size="medium" // Tamanho das estrelas
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
    </div>
  );
};

export { RatingStars, Estrelas };
