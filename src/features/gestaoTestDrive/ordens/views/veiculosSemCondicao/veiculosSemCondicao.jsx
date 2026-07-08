import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CheckIcon from '@mui/icons-material/Check';
import MarcaBadge from 'common/views/logoMarca';
import {
  ContainerSecao,
  ContainerLista,
  ContainerVeiculos,
  CardVeiculo,
  BotaoTexto,
  DivisorTitulo,
} from './veiculosSemCondicao.style';

const VeiculosSemCondicao = ({
  isCondicaoComercial,
  ordemId,
  veiculosSemCondicao,
  isLoadingVeiculosSemCondicao,
  isListaVeiculosVisible,
  onLoadVeiculosSemCondicao,
  onToggleVeiculosVisibility,
}) => {
  const [isPrimeiroCarregamento, setIsPrimeiroCarregamento] = useState(true);
  const [loadingAnterior, setLoadingAnterior] = useState(false);

  useEffect(() => {
    if (ordemId) {
      onLoadVeiculosSemCondicao(ordemId);
    }
  }, [ordemId, onLoadVeiculosSemCondicao]);

  useEffect(() => {
    if (isPrimeiroCarregamento && loadingAnterior && !isLoadingVeiculosSemCondicao) {
      setIsPrimeiroCarregamento(false);
    }
    setLoadingAnterior(isLoadingVeiculosSemCondicao);
  }, [isLoadingVeiculosSemCondicao, isPrimeiroCarregamento, loadingAnterior]);

  const handleToggleVeiculosVisibility = () => {
    onToggleVeiculosVisibility();
  };

  const formatarTextoVeiculo = (veiculo) => {
    const nomeComercial = veiculo.nomeComercial || '';
    const modelo = veiculo.modeloCodigo || '';
    const versao = veiculo.versaoCodigo || '';
    const serie = veiculo.serieCodigo || '';
    const allestimento = veiculo.allestimento || '';
    const anoModelo = veiculo.modelYear || '';

    const modeloVersaoSerie = [modelo, versao, serie, allestimento].filter(Boolean).join('-');

    return [nomeComercial, modeloVersaoSerie, anoModelo].filter(Boolean).join(' • ');
  };

  const countVeiculos = veiculosSemCondicao.length;
  let icon;
  if (countVeiculos === 0) {
    icon = <CheckIcon />;
  } else if (isListaVeiculosVisible) {
    icon = <VisibilityOffIcon />;
  } else {
    icon = <VisibilityIcon />;
  }
  const tipoCondicao = isCondicaoComercial ? 'condições comerciais' : 'condições à vista';

  let texto;
  if (countVeiculos === 0) {
    texto = `Todos os veículos possuem ${tipoCondicao} vinculada`;
  } else if (isListaVeiculosVisible) {
    texto = `Ocultar veículos sem ${tipoCondicao} vinculadas (${countVeiculos})`;
  } else {
    texto = `Exibir veículos sem ${tipoCondicao} vinculadas (${countVeiculos})`;
  }

  if (isPrimeiroCarregamento) {
    return null;
  }

  return (
    <ContainerSecao>
      {isListaVeiculosVisible ? (
        <ContainerLista>
          <BotaoTexto
            startIcon={icon}
            onClick={handleToggleVeiculosVisibility}
            disabled={isLoadingVeiculosSemCondicao || countVeiculos === 0}
            $isListaAberta
          >
            {texto}
          </BotaoTexto>
          <DivisorTitulo />
          <ContainerVeiculos>
            {veiculosSemCondicao.map((veiculo, index) => (
              <CardVeiculo key={index}>
                <MarcaBadge marca={veiculo.marca} />
                <Typography variant="body2" style={{ textAlign: 'left', color: '#505669' }}>
                  {formatarTextoVeiculo(veiculo)}
                </Typography>
              </CardVeiculo>
            ))}
          </ContainerVeiculos>
        </ContainerLista>
      ) : (
        <BotaoTexto
          startIcon={icon}
          onClick={handleToggleVeiculosVisibility}
          disabled={isLoadingVeiculosSemCondicao || countVeiculos === 0}
          $isListaAberta={false}
        >
          {texto}
        </BotaoTexto>
      )}
    </ContainerSecao>
  );
};

VeiculosSemCondicao.propTypes = {
  isCondicaoComercial: PropTypes.bool.isRequired,
  ordemId: PropTypes.number,
  veiculosSemCondicao: PropTypes.array,
  isLoadingVeiculosSemCondicao: PropTypes.bool,
  isListaVeiculosVisible: PropTypes.bool,
  onLoadVeiculosSemCondicao: PropTypes.func.isRequired,
  onToggleVeiculosVisibility: PropTypes.func.isRequired,
};

VeiculosSemCondicao.defaultProps = {
  ordemId: null,
  veiculosSemCondicao: [],
  isLoadingVeiculosSemCondicao: false,
  isListaVeiculosVisible: false,
};

export default VeiculosSemCondicao;
