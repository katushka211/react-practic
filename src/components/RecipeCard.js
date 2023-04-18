export const RecipeCard = ({ item }) => {
  return (
    <div>
      <img src={item.image} alt={item.name} width="240" />
      <h2>{item.name}</h2>
    </div>
  );
};
