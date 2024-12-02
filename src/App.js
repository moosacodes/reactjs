import React from "react";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div className="App">
      <ProfileCard
        name="moosa"
        age={19}
        occupation="student"
        location="karachi"
      />
    </div>
  );
}

export default App;
