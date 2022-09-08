import { ButtonEl, ButtonBox } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <ButtonBox>
      <ButtonEl onClick={onClick}>Load More</ButtonEl>
    </ButtonBox>
  );
};
