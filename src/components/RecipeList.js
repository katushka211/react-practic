import { RecipeCard } from './RecipeCard';

export const RecipeList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <RecipeCard item={item} />
        </li>
      ))}
    </ul>
  );
};
