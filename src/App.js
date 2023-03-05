import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./components/data";

function App() {

  const card = data.map(item => {
    return (
      <Card 
        key = {item.id}
        item = {item}
        // or use {...item} and no need to in card.js such as props.item.image
      />
    )
  })



  return (
    <div>
      <Navbar/>
      {card}
    </div>

  );
}

export default App;
