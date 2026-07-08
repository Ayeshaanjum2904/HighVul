import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import colors from 'assets/styles/colors';
import ClearButton from 'common/controls/clearButton';
import InputCartaMes from './views/inputCartaMes';
import SelectDataInicio from './views/selectDataInicio';
import SelectDataFim from './views/selectDataFim';
import SelectMarca from './views/selectMarca';
import SelectProduto from './views/selectProduto';
import InputDesconto from './views/inputDesconto';
import InputParcelas from './views/inputParcelas';
import InputTaxa from './views/inputTaxa';
import InputPrazo from './views/inputPrazo';
import InputCoeficiente from './views/inputCoeficiente';
import InputCondicaoOperacional from './views/inputCondicaoOperacional';

const useStyles = makeStyles({
  sectionContainer: {
    marginBottom: '24px',
  },
  container: {
    display: 'grid',
    rowGap: '8px',
    columnGap: '16px',
    paddingTop: '12px',
    gridTemplateColumns: 'repeat(4, 236px)',
    '@media (max-width: 1280px)': {
      gridTemplateColumns: 'repeat(3, 236px)',
    },
  },
  containerProduto: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    paddingTop: '12px',
    maxWidth: '300px',
  },
  containerCondicao: {
    display: 'grid',
    rowGap: '8px',
    columnGap: '16px',
    paddingTop: '12px',
    gridTemplateColumns: 'repeat(6, 100px)',
    '@media (max-width: 1280px)': {
      gridTemplateColumns: 'repeat(3, 100px)',
    },
  },
  textBold: {
    fontSize: '14px',
    lineHeight: '24px',
    fontWeight: 700,
    color: colors.secundary_color_800,
  },
  textNormal: {
    fontSize: '12px',
    lineHeight: '14px',
    fontWeight: 400,
    color: colors.secundary_color_800,
  },
});

const Form = ({
  clearFilters, marca, produto, dataInicio, dataFim, cartaMes, setMarca,
  getBrandInputs, getProdutoInputs,
}) => {
  const classes = useStyles();

  useEffect(() => {
    getBrandInputs();
    getProdutoInputs();
  }, [getBrandInputs, getProdutoInputs]);

  const isFiltersFilled = marca !== '_default'
  || produto !== '_default' || dataInicio !== null
  || dataFim !== null
  || cartaMes !== null;

  return (
    <Box padding="0 32px 24px 32px">
      <Box className={classes.sectionContainer}>
        <Box>
          <Typography className={classes.textBold}>
            Tipo de produto
          </Typography>
          <Typography className={classes.textNormal}>
            Selecione o tipo de produto referente às condições,
            alguns produtos não são visíveis para o concessionário.
          </Typography>
        </Box>
        <Box className={classes.containerProduto}>
          <SelectProduto />
        </Box>
      </Box>
      <Box className={classes.sectionContainer}>
        <Box>
          <Typography className={classes.textBold}>
            Dados da carta do mês
          </Typography>
          <Typography className={classes.textNormal}>
            Informe os dados da marca,
            início e fim de vigência da condição e número da carta do mês.
          </Typography>
        </Box>
        <Box className={classes.container}>
          <SelectMarca />
          <SelectDataInicio />
          <SelectDataFim />
          <InputCartaMes />
          <Box marginTop="20px">
            <ClearButton
              onClick={() => {
                clearFilters();
                setMarca('_default');
              }}
              disabled={!isFiltersFilled}
            />
          </Box>
        </Box>
      </Box>
      <Box>
        <Box>
          <Typography className={classes.textBold}>
            Condição
          </Typography>
          <Typography className={classes.textNormal}>
            Informe os dados da condição.
          </Typography>
        </Box>
        <Box className={classes.containerCondicao}>
          <InputDesconto />
          <InputParcelas />
          <InputTaxa />
          <InputPrazo />
          <InputCoeficiente />
          <InputCondicaoOperacional />
        </Box>
      </Box>
    </Box>
  );
};

Form.propTypes = {
  clearFilters: PropTypes.func,
  marca: PropTypes.string,
  produto: PropTypes.string,
  dataInicio: PropTypes.object,
  dataFim: PropTypes.object,
  cartaMes: PropTypes.string,
  setMarca: PropTypes.func,
  getBrandInputs: PropTypes.func,
  getProdutoInputs: PropTypes.func,
};

Form.defaultProps = {
  clearFilters: () => {},
  marca: '_default',
  produto: '_default',
  dataInicio: null,
  dataFim: null,
  cartaMes: null,
  setMarca: () => {},
  getBrandInputs: () => {},
  getProdutoInputs: () => {},
};
export default Form;
