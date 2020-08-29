import React from "react";
import iceCreamList from "./DataBase.js";
import IceCream from "./Component/IceCream";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      iceCreamL: iceCreamList,
    };
  }
  render() {
    const iceCreams = this.state.iceCreamL.map((iceCream) => (
      <IceCream id={iceCream.id} iceCream={iceCream} />
    ));

    return <div className="sales">{iceCreams}</div>;
  }
}

export default App;
