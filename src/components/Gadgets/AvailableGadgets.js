import { useEffect, useState } from "react";

import Card from "../UI/Card";
import GadgetItem from "./GadgetItem/GadgetItem";
import classes from "./AvailableGadgets.module.css";

const AvailableGadgets = () => {
  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    const fetchGadgets = async () => {
      const response = await fetch(
        "https://order-gadgets-app-default-rtdb.firebaseio.com/gadgets.json"
      );

      const responseData = await response.json();
      const loadGadgets = [];

      for (const key in responseData) {
        loadGadgets.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setGadgets(loadGadgets);
    };

    fetchGadgets();
  }, []);

  const gadgetsList = gadgets.map((gadget) => (
    <GadgetItem
      key={gadget.id}
      id={gadget.id}
      name={gadget.name}
      description={gadget.description}
      price={gadget.price}
    />
  ));

  return (
    <section className={classes.gadgets}>
      <Card>
        <ul>{gadgetsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableGadgets;
