import PropTypes from 'prop-types';
import { TfiAlarmClock } from 'react-icons/tfi';
import { AiOutlinePieChart, AiOutlineBarChart } from 'react-icons/ai';
import { HiTrash, HiZoomIn } from 'react-icons/hi';
import {
  Container,
  InfoBlock,
  Name,
  Image,
  Meta,
  RecipeInfo,
  BadgeList,
  Badge,
  Actions,
} from './RecipeCard.styled';
export const RecipeCard = ({
  item: { image, name, time, servings, calories, difficulty },
  onDelete,
}) => {
  console.log(difficulty);
  return (
    <Container>
      <Image src={image} alt={name} />
      <Meta>
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

        <BadgeList>
          <Badge active={difficulty === 'easy'} type="easy">
            Easy
          </Badge>
          <Badge active={difficulty === 'medium'} type="medium">
            Medium
          </Badge>
          <Badge active={difficulty === 'hard'} type="hard">
            Hard
          </Badge>
        </BadgeList>

        <Actions>
          <button aria-label="Delete">
            <HiTrash />
          </button>
          <button aria-label="Zoom">
            <HiZoomIn />
          </button>
        </Actions>
      </Meta>
    </Container>
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
