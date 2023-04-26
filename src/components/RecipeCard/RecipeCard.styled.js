import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

export const Name = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 20px;

  :hover {
    color: orange;
    cursor: pointer;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 120px;
  object-fit: cover;
`;

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  flex-grow: 1;
`;

export const RecipeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  flex-grow: 1;
`;

export const InfoBlock = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 500;
  svg {
    color: grey;
  }
`;

export const BadgeList = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
`;

export const Badge = styled.span`
  padding: 8px 12px;
  border-radius: ${p => p.theme.radii.sm};
  border: 1px solid ${props => props.theme.colors.black};
  background-color: ${props => {
    if (!props.active) {
      return props.theme.colors.white;
    }
    switch (props.type) {
      case 'easy':
        return 'green';
      case 'medium':
        return 'orange';
      case 'hard':
        return 'red';
      default:
        throw new Error(`Unknown badge type ${props.type}`);
    }
  }};
  color: ${props => {
    return props.active ? props.theme.colors.white : props.theme.colors.black;
  }};
`;

export const Actions = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 4px;
`;

// export const Badge = styled.span`
//   padding: 8px 12px;
//   border-radius: ${p => p.theme.radii.sm};
//   border: 1px solid ${props => props.theme.colors.black};
//   background-color: ${props => {
//     return props.active ? props.theme.colors.accent : props.theme.colors.white;
//   }};
//   color: ${props => {
//     return props.active ? props.theme.colors.white : props.theme.colors.black;
//   }};
// `;
