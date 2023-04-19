import PropTypes from 'prop-types';
import { TfiAlarmClock } from 'react-icons/tfi';
import { AiOutlinePieChart, AiOutlineBarChart } from 'react-icons/ai';
import {
  InfoBlock,
  RecipeInfo,
  Name,
  BadgeList,
  Badge,
} from './RecipeCard.styled';
export const RecipeCard = ({
  item: { image, name, time, servings, calories, difficulty },
}) => {
  console.log(difficulty);
  return (
    <div>
      <img src={image} alt={name} width="240" />
      <Name>{name}</Name>
      <RecipeInfo>
        <InfoBlock>
          <TfiAlarmClock size="24" />
          <span>{time} min</span>
        </InfoBlock>
        <InfoBlock>
          <AiOutlinePieChart size="24" />
          <span>{servings} servings</span>
        </InfoBlock>
        <InfoBlock>
          <AiOutlineBarChart size="24" />
          <span>{calories} calories</span>
        </InfoBlock>
      </RecipeInfo>

      <div>
        <h3>Difficulty</h3>
        <BadgeList>
          <Badge active={difficulty === 'easy'}>Easy</Badge>
          <Badge active={difficulty === 'medium'}>Medium</Badge>
          <Badge active={difficulty === 'hard'}>Hard</Badge>
        </BadgeList>
      </div>
    </div>
  );
};

RecipeCard.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']),
  }).isRequired,
};
