import styled from 'styled-components';
import colors from 'assets/styles/colors';

const getButtonStyle = (style) => {
  switch (style) {
    case 'gray':
      return {
        backgroundColor: colors.secundary_color_700,
        color: 'white',
        '&:hover': {
          backgroundColor: colors.secundary_color_800,
        },
        '&:focus': {
          backgroundColor: colors.secundary_color_900,
        },
        '&:disabled': {
          cursor: 'default',
          backgroundColor: colors.secundary_color_100,
          color: colors.secundary_color_800,
        },
      };
    case 'blue':
      return {
        backgroundColor: colors.primary_color_500,
        color: 'white',
        '&:hover': {
          backgroundColor: colors.primary_color_600,
        },
        '&:focus': {
          backgroundColor: colors.primary_color_700,
        },
        '&:disabled': {
          cursor: 'default',
          backgroundColor: colors.secundary_color_100,
          color: colors.secundary_color_800,
        },
      };
    case 'dark_gray_border':
      return {
        backgroundColor: 'white',
        border: `1px solid ${colors.secundary_color_700}`,
        color: colors.secundary_color_800,
        '&:hover': {
          backgroundColor: colors.secundary_color_600_16,
          border: `1px solid ${colors.secundary_color_800}`,
        },
        '&:focus': {
          backgroundColor: colors.secundary_color_600_32,
          border: `1px solid ${colors.secundary_color_800}`,
        },
        '&:disabled': {
          cursor: 'default',
          backgroundColor: colors.secundary_color_100,
          color: colors.secundary_color_800,
          border: 'none',
        },
      };
    case 'dark_green':
      return {
        backgroundColor: colors.terciary_color_600,
        color: 'white',
        '&:hover': {
          backgroundColor: colors.terciary_color_700,
        },
        '&:focus': {
          backgroundColor: colors.terciary_color_700,
        },
        '&:disabled': {
          cursor: 'default',
          backgroundColor: colors.secundary_color_100,
          color: colors.secundary_color_800,
        },
      };
    case 'dark_blue_border':
      return {
        backgroundColor: 'white',
        border: `1px solid ${colors.primary_color_500}`,
        color: colors.primary_color_500,
        '&:hover': {
          backgroundColor: colors.primary_color_100_24,
          color: colors.primary_color_700,
        },
        '&:disabled': {
          cursor: 'default',
          backgroundColor: colors.secundary_color_100,
          color: colors.secundary_color_800,
        },
      };
    default:
      return {};
  }
};

const ButtonStyle = styled.button`
  border: none;
  cursor: pointer;
  padding: 10px 24px;
  border-radius: 4px;
  height: 40px;

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: default;
  }

  ${({ className }) => getButtonStyle(className)}

`;

export default ButtonStyle;
