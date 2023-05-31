import styled from 'styled-components';
import { FooterItem } from '.';

const Footer = () => {
  return (
    <Wrapper>
      <FooterItem title='Time' value='00:00' />

      <FooterItem title='Moves' value='0' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Footer;
