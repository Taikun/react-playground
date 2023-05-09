import ItemFruit from "./ItemFruit";

const ListFruits = ({ fruits }) => {
  //

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <ItemFruit key={index} name={fruit} />
      ))}
    </ul>
  );
};

export default ListFruits;
