"use client";

import { useState } from "react";

export default function ColorPaletteGeneratorPage() {
  const [colors, setColors] = useState([
    "#FF5733",
    "#3498DB",
    "#2ECC71",
    "#F1C40F",
    "#9B59B6",
  ]);

 const generateRandomColor = () => {
  const randomNumber = Math.floor(Math.random() * 16777216);
  return `#${randomNumber.toString(16).padStart(6, "0")}`;
};


  return (
    <div>
      <h1>Color Palette Generator</h1>
        <ul>
        {colors.map((color) => (
          <li key={color}>
             <div style={{backgroundColor: color ,
               width: "150px", 
              height: "150px" }}>
              <p>{color}</p>
             </div>

          </li>
        ))}
        </ul>
       <button onClick={() => setColors(Array.from({ length: 5 }, () => generateRandomColor()))}>
  Generate Colors
</button>
</div>
  );
}