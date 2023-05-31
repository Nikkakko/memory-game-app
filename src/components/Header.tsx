import styled from 'styled-components';
import CustomButton from './CustomButton';

const Header = () => {
  return (
    <Wrapper>
      <Title>Memory</Title>
      <ButtonStyled onClick={() => console.log('Menu button clicked')}>
        Menu
      </ButtonStyled>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex: 0;

  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  /* identical to box height */

  text-transform: lowercase;

  color: ${({ theme }) => theme.colors.dark};
`;

const ButtonStyled = styled(CustomButton)`
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 26px;
  padding: 10px 18.5px;
  border: none;

  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

export default Header;
