import { useEffect, useState } from "react";

import Card from "../UI/Card";
import GadgetItem from "./GadgetItem/GadgetItem";
import classes from "./AvailableGadgets.module.css";

const AvailableGadgets = () => {
  const [gadgets, setGadgets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchGadgets = async () => {
      const response = await fetch(
        "https://order-gadgets-app-default-rtdb.firebaseio.com/gadgets.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

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
      setIsLoading(false);
    };

    fetchGadgets().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.GadgetsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.GadgetsError}>
        <p>{httpError}</p>
      </section>
    )
  }

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
