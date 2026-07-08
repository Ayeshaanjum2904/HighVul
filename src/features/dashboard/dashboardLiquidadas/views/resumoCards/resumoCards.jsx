import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import colors from 'assets/styles/colors';
import PropTypes from 'prop-types';
import { formatValue } from 'utils/format';

const ResumoCards = ({
  title, subtitle, valor, numDuplicatas,
}) => {
  const card = (
    <CardContent
      sx={{
        backgroundColor: colors.secundary_color_800,
        color: 'white',
        borderLeft: `5px solid ${colors.secundary_color_900}`,
        borderRadius: '5px',
        paddingBottom: '10px',
      }}
    >
      <Typography
        sx={{
          fontSize: 16,
          lineHeight: '16px',
          fontFamily: 'CircularStd',
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: 16,
          fontFamily: 'CircularStd',
        }}
        gutterBottom
      >
        {subtitle}
      </Typography>
      <Typography
        sx={{
          fontSize: 22,
          fontWeight: '700',
          fontFamily: 'CircularStd',
        }}
      >
        {formatValue(valor)}
      </Typography>
      <Divider
        sx={{
          backgroundColor: 'white',
          margin: '0 0 10px 0',
        }}
        variant="middle"
      />
      <Typography
        sx={{
          fontSize: 14,
          lineHeight: '16px',
          fontFamily: 'CircularStd',
        }}
      >
        Número de duplicatas
      </Typography>
      <Typography
        sx={{
          fontSize: 20,
          fontWeight: 500,
          fontFamily: 'CircularStd',
        }}
      >
        {numDuplicatas}
      </Typography>
    </CardContent>
  );

  return (
    <Card variant="outlined">{card}</Card>
  );
};

ResumoCards.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  valor: PropTypes.number,
  numDuplicatas: PropTypes.number,
};

ResumoCards.defaultProps = {
  title: '',
  subtitle: '',
  valor: null,
  numDuplicatas: null,
};

export default ResumoCards;
