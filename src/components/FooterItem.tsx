import styled from 'styled-components';

type FooterItemProps = {
  title: string;
  value: string;
};

const FooterItem = ({ title, value }: FooterItemProps) => {
  return (
    <Wrapper>
      <Content>
        <Title>{title}</Title>
        <Value>{value}</Value>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #dfe7ec;
  border-radius: 5px;
  padding: 10px 31px 9px 33px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  width: 87px;
  height: 51px;
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;
  /* identical to box height */

  text-align: center;

  color: #7191a5;
`;

const Value = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  /* identical to box height */

  text-align: center;

  color: #304859;
`;

export default FooterItem;
