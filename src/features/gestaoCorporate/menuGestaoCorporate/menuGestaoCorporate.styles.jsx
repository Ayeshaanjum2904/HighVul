import styled from 'styled-components';

export const MenuContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #F9FAFC;
`;

export const MenuItem = styled.div`
  padding: 4px 4px;

  .MuiSvgIcon-root {
    font-size: 1.5rem;
    width: 24px;
    height: 24px;
    margin-right: 16px;
    vertical-align: middle;
  }
`;

export const TitleContainer = styled.div`
  padding: 17px 0px 14px 0px;
  margin: 0px 24px 0px 24px;
  border-bottom: solid 1px #e4e9f2;
  display: flex;
  color: #555770;
  align-items: center;
`;

export const TitleIcon = styled.div`
  display: flex;
  margin-right: 16px;
  align-items: center;
  color: #555770;
`;

export const TitleText = styled.div`
  font-size: 14px;
  line-height: 24px;
  color: #555770;
`;

export const MenuContent = styled.div`
  padding-top: 14px;
`;
