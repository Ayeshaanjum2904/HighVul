import colors from 'assets/styles/colors';
import styled from 'styled-components';
import dropDown from 'assets/icons/drop-down.svg';
import closeUp from 'assets/icons/close-up.svg';

const HeaderFilterStyle = styled.div`
#details__limite {
    width: 100%;
    max-width: calc(100% - 16px);
    background-color: #FFF;
    border-radius: 4px;
    margin-top: 4px;
    #details__summary-limite::-webkit-details-marker {
        display: none
        }
    #details__summary-limite {
      cursor: pointer;
      background-color: ${colors.primary_color_100_16};
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding-right: 19px;
      border-radius: 4px;
      background-color: ${colors.primary_color_100_16};

      &:hover {
        background-color: ${colors.primary_color_100_24};
        color: ${colors.secundary_color_800};
      }

      &:after {
        content: "";
        background-repeat: no-repeat;
        background-image: ${closeUp};
        width: 24px;
        height: 24px;
        color: black;
      }

      .summary-title{
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 12px;
        h2{
            margin: 0;
            color: ${colors.secundary_color_800};
            font-family: CircularStd, sans-serif;
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: 24px;
        }
        h3{
            margin: 0;
            color: ${colors.primary_color_700};
            font-family: CircularStd, sans-serif;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }
      }
    }
}

#details__limite[open] #details__summary-limite:after{
    background-image: ${dropDown};
}


#details__limite[open] #details__summary-limite{
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    border-radius: 4px 4px 0px 0px;
    background-color: ${colors.primary_color_100_36};
    color: ${colors.secundary_color_800};
    box-shadow: none;
}
`;

export default HeaderFilterStyle;
