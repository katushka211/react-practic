import styled from 'styled-components';

export const Name = styled.h2`
  margin-top: 8 px;
  margin-bottom: 12px;

  :hover {
    color: orange;
    cursor: pointer;
  }
`;

export const RecipeInfo = styled.div`
  display: flex;
  gap: 4px;
`;

export const InfoBlock = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
  svg {
    color: grey;
  }
`;

export const BadgeList = styled.div`
  display: flex;
  gap: 8px;
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
