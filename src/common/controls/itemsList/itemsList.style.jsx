import colors from 'assets/styles/colors';
import styled from 'styled-components';

const ItemsList = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 16px;
  margin-bottom: 12px;

  .label {
    text-align: left;
    color: ${colors.secundary_color_700};
    font-family: CircularStd, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    padding-left: 13px;
    padding-bottom: 8px;
  }

  .items-list {
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    border: 1.5px solid ${colors.secundary_color_100};
    overflow-y: auto;
    max-height: 132px;
    padding-left: 8px;
    padding-right: 12px;
  }

  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 44px;
    padding: 0 16px;
    background-color: white;
    padding: 10px 24px 8px 8px;
  }

  .item-value {
    color: ${colors.secundary_color_700};
    text-align: left;
    font-family: CircularStd, sans-serif;
    font-size: 12px;
    font-weight: 400;
  }
  .item-value::before {
    content: '•';
    margin-right: 8px;
    color: ${colors.secundary_color_700};
    text-align: left;
  }

  .remove-icon {
    font: 10px;
    color: ${colors.secundary_color_700};
  }
`;

export default ItemsList;
