import React from 'react';
import PropTypes from 'prop-types';
import './modalHistoricoEnvelopeAssinaturas.scss';
import { Stack } from '@mui/material';
import _ from 'lodash';
import AssinaturaItem from './assinaturaItem/assinaturaItem';

const ModalHistoricoEnvelopeAssinaturas = ({ assinaturasList }) => {
  const allWithoutOrdem = assinaturasList.every((item) => !item?.ordem);
  return (
    <div className="modal-historico-envelope__dados">
      <div className="modal-historico-envelope__items">
        <Stack width="100%">
          {assinaturasList?.map((item, index) => (
            <div className="modal-historico-envelope__item__assinatura" key={index}>
              <Stack>
                <AssinaturaItem
                  ordem={item?.ordem}
                  nome={item.nome}
                  email={item.email}
                  isLastItem={index === (assinaturasList?.length || 0) - 1}
                  dataAssinatura={item.dataAssinatura}
                  isAssinado={!_.isEmpty(item?.dataAssinatura)}
                  isRecusado={item?.statusSignatario === 'Recusado'}
                  hideIndex={allWithoutOrdem}
                />
              </Stack>
            </div>
          ))}
        </Stack>
      </div>
    </div>
  );
};

ModalHistoricoEnvelopeAssinaturas.propTypes = {
  assinaturasList: PropTypes.array,
};

ModalHistoricoEnvelopeAssinaturas.defaultProps = {
  assinaturasList: [],
};

export default ModalHistoricoEnvelopeAssinaturas;
