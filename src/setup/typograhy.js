import colors from 'assets/styles/colors';

const makeFont = (
  fontSize,
  fontWeight,
  letterSpacing = '0px',
  color = colors.secundary_color_700,
) => ({
  fontSize, fontWeight, letterSpacing, color,
});

export default {
  '12_bold': makeFont('12px', 700, '0.15px'),
  '14_bold': makeFont('14px', 700, '0.15px'),
  '16_bold': makeFont('16px', 700, '0.15px'),
  '10_regular': makeFont('10px', 450),
  '12_regular': makeFont('12px', 450),
  '14_regular': makeFont('14px', 450),
  '16_regular': makeFont('16px', 450),
  '10_medium': makeFont('10px', 500),
  '12_medium': makeFont('12px', 500),
  '14_medium': makeFont('14px', 500),
  '16_medium': makeFont('16px', 500),

  button: makeFont('14px', 500),
  page_title: makeFont('24px', 900),
};
