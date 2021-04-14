import React from "react";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";

function Home() {
  return (
    <main>
      <SearchBar />
      <div className="container">
        <div className="row row-cols-md-3 mx-auto mt-5">
            <Card
              key=""
              image=""
              name=""
              breweryURL=""
            />
        </div>
      </div>
    </main>
  );
}

export default Home;

// NEED TO TIE IN OPENBREWERY API
