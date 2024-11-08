import Card from "../UI/Card";
import GadgetItem from "./GadgetItem/GadgetItem";
import classes from "./AvailableGadgets.module.css";

const DUMMY_Gadgets = [
  {
    id: "m1",
    name: "iPhone 16",
    description: "128gb",
    price: 1200,
  },
  {
    id: "m2",
    name: "Samsung S24",
    description: "5000mAh, 256gb",
    price: 1001.2,
  },
  {
    id: "m3",
    name: "Charger",
    description: "Type C, iPhone",
    price: 15.3,
  },
  {
    id: "m4",
    name: "Screen",
    description: "iPhone 13 Pro",
    price: 45.2,
  },
];

const AvailableGadgets = () => {
  const gadgetsList = DUMMY_Gadgets.map((gadget) => (
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
