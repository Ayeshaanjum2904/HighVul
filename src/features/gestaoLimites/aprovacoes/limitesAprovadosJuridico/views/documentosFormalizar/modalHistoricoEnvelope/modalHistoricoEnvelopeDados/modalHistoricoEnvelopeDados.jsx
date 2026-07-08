import React from 'react';
import PropTypes from 'prop-types';
import './modalHistoricoEnvelopeDados.scss';
import { Box, Stack } from '@mui/material';
import moment from 'moment';

const ModalHistoricoEnvelopeDados = ({ dataEnvio, status }) => {
  const getData = () => moment(dataEnvio).format('DD/MM/YYYY');
  const dados = [
    { chave: 'Data de envio', valor: getData() },
    { chave: 'Status', valor: status },
  ];

  return (
    <div className="modal-historico-envelope__dados">
      <div className="modal-historico-envelope__items">

        {dados?.map((item, index) => (
          <Stack direction="row" className="modal-historico-envelope__item" key={index}>
            <Stack spacing={1}>
              <Box className="modal-historico-envelope__item-chave" sx={{ display: 'flex', alignItems: 'center' }}>
                {item.chave}
              </Box>
              <Box className="modal-historico-envelope__item-valor">
                {item.valor}
              </Box>
            </Stack>
          </Stack>
        ))}
      </div>
    </div>
  );
};

ModalHistoricoEnvelopeDados.propTypes = {
  dataEnvio: PropTypes.string,
  status: PropTypes.string,
};

ModalHistoricoEnvelopeDados.defaultProps = {
  dataEnvio: '',
  status: '',
};

export default ModalHistoricoEnvelopeDados;
