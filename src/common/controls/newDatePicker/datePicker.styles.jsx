import styled from 'styled-components';
import colors from 'assets/styles/colors';

const validatedBorderInput = ({ invalidStartDate, invalidEndDate }) => {
  if (invalidStartDate || invalidEndDate) {
    return '1px solid #DE1932';
  }
  return 'none';
};

const Datepicker = styled.data`
.inputs{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: rgba(228, 233, 242, 0.24);
  background: ${(props) => (props.focusedInput ? 'rgba(85, 87, 112, 0.08)' : 'rgba(228, 233, 242, 0.24)')};
  border-radius: 4px;
  align-items: center;
  width: 100%;
  border: ${validatedBorderInput};
  padding: 0 12px 0 4px;
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: ${colors.secondary_color_700};
    text-align: center;
  }

  .input-left {
    display:flex;
    align-items: center;
    width: 100%;
    height: 40px;
    border: none;
    border-right: none;
    box-sizing: border-box;
    color: ${colors.secondary_color_700};
  }

  .input-right {
    display:flex;
    align-items: center;
    width: 100%;
    height: 40px;
    border: none;
    color: ${colors.secondary_color_700};
  }

  input{
    border: none;
    width: 100%;
    outline: none;
    padding: 0;
    font-family: CircularStd, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #505669 !important;
    text-align: center;
    background: rgba(228,233,242,0);
  }

  .icon-button{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
}

.input-error{
  margin-top: 6px;
  font-family: CircularStd, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #DE1932;
  margin-left: 12px;
}

.caption{
  margin: 0;
  font-family: CircularStd, sans-serif;
  font-size: 12px;
  line-height: 16px;
  color: ${(props) => ((props.invalidStartDate || props.invalidEndDate) ? '#DE1932' : colors.secondary_color_700)};
  flex-grow: 0;
  flex-basis: 50%;
  margin-left: 13px;
}

.container-date{
  position: absolute;
  border: 1px solid #e4e7e7;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px rgba(166, 171, 189, 0.25);
  border-radius: 4px;
  background: white;
  display:flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;

  .CalendarDay {
    box-sizing: border-box;
    cursor: pointer;
    text-align: center;
    color: #484848;
    font-family: CircularStd, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    width: 46px;
    height: 37px;
  }

  .CalendarDay__selected{
    background: ${colors.primary_color_100_36};
    border: 1px double ${colors.primary_color_100_36};
    color: #fff;
  }

  .CalendarDay__selected, .CalendarDay__selected:active, .CalendarDay__selected:hover {
    color: #fff;
  }

  .CalendarDay__selected_span {
    background: ${colors.primary_color_100_36};
    border: 1px double ${colors.primary_color_100_36};
  }

  .CalendarDay__hovered_span{
    background: ${colors.primary_color_100_36};
  }

  .CalendarDay__hovered_span:hover{
    background: white;
    color: #404154;
    border: 1px solid ${colors.primary_color_100_36};
    font-weight: 700;
  }

  .CalendarDay__default{
    border:none;
  }

  .CalendarMonth_caption {
    text-align: center;
    padding-top: 22px;
    padding-bottom: 37px;
    caption-side: top;
    caption-side: initial;

    font-family: CircularStd, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #484848;
  }
  
  .DayPicker__withBorder {
    box-shadow: none;
    border-radius: none;
  }

  .DayPickerKeyboardShortcuts_show__bottomRight {
    display: none;
  }


  .DayPickerNavigation_svg__horizontal {
    height: 19px;
    width: 19px;
    fill: #82888a;
    display: block;
  }

  .DayPicker_weekHeader_ul {
    list-style: none;
    margin: 1px 0;
    padding-left: 0;
    padding-right: 0;
    .DayPicker_weekHeader_li {
      display: inline-block;
      text-align: center;

      small{
        font-family: CircularStd, sans-serif;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        color: ${colors.primary_color_500};
      }
    }
  }

  .DayPicker_transitionContainer__horizontal{
    min-width: 260px;
    height: 298px;
  }

}
`;

export default Datepicker;
