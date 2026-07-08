import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { Box, Divider } from '@mui/material';
import SummaryPage from 'common/controls/summaryPage';
import colors from 'assets/styles/colors';
import TooltipMessage from 'common/controls/tooltipMessage';
import ErrorRoundedIcon from '@material-ui/icons/ErrorRounded';
import ModalLimitePropostaDetailSection from '../modalLimitePropostaDetailSection/modalLimitePropostaDetailSection';
import InputCondicoes from '../inputCondicoes';

const LimiteModificadoIcon = () => (
  <ErrorRoundedIcon
    style={{
      fontSize: '16px',
      color: colors.alert_color_300,
    }}
  />
);

const renderCondicao = ({
  userCanEditCondicao, isModal, idVersao, idLimite, handleCloseModal, isModificada, condicao, index,
}) => (
  <>
    <div
      className="modal-limite-proposta__content__text-editor-title"
      style={isModificada ? { color: colors.alert_color_300 } : {}}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '16px' }}>
        Condições
        {isModificada && (
          <TooltipMessage
            title="As condições da aprovação foram alteradas."
            placement="bottom-start"
            maxWidth="260px"
          >
            <Box sx={{
              cursor: 'pointer', display: 'flex', alignItems: 'center', marginLeft: '4px',
            }}
            >
              <LimiteModificadoIcon />
            </Box>
          </TooltipMessage>
        )}
      </Box>
    </div>
    {userCanEditCondicao && (
      <InputCondicoes
        className="modal-limite-proposta__content__text-editor"
        index={index}
        isModal={isModal}
        idVersao={idVersao}
        idLimite={idLimite}
        handleCloseModal={handleCloseModal}
        isModificada={isModificada}
      />
    )}
    {!userCanEditCondicao && (
      <p className="modal-limite-proposta__content__text">{condicao && parse(condicao)}</p>
    )}
  </>
);

const renderCondicaoJuridico = ({ condicaoSisgar }) => (
  <>
    <div className="modal-limite-proposta__content__text-editor-title">Condições Sisgar</div>
    <p className="modal-limite-proposta__content__text">{condicaoSisgar && parse(condicaoSisgar)}</p>
  </>
);

const InfoModal = ({
  itensConcessionaria, itensProduto,
  condicao, userCanEditCondicao,
  condicaoSisgar, canRenderCondicao, canRenderCondicaoSisgar, isModal, title, dataAlteracao,
  idVersao, idLimite, handleCloseModal, isModificada, index,
}) => {
  const level = isModal ? 3 : 0;
  return (
    <SummaryPage
      title={title}
      level={level}
      info={isModal ? dataAlteracao : null}
    >
      <div className="modal-limite-proposta__content__sections">
        <ModalLimitePropostaDetailSection items={itensConcessionaria} />
        <Divider />
        <ModalLimitePropostaDetailSection items={itensProduto} />
      </div>
      <Divider />
      <div className="modal-limite-proposta__content__text-editor">
        {
          canRenderCondicaoSisgar
            ? (
              <>
                {canRenderCondicao
                  ? renderCondicao({
                    userCanEditCondicao,
                    condicao,
                    idVersao,
                    idLimite,
                  })
                  : null}
                {renderCondicaoJuridico({ condicaoSisgar })}
              </>
            )
            : renderCondicao({
              userCanEditCondicao,
              condicao,
              isModal,
              idVersao,
              idLimite,
              handleCloseModal,
              isModificada,
              index,
            })
        }
      </div>
    </SummaryPage>
  );
};
InfoModal.propTypes = {
  itensConcessionaria: PropTypes.array,
  itensProduto: PropTypes.array,
  condicao: PropTypes.string,
  userCanEditCondicao: PropTypes.bool,
  condicaoSisgar: PropTypes.string,
  canRenderCondicao: PropTypes.bool,
  canRenderCondicaoSisgar: PropTypes.bool,
  isModal: PropTypes.bool,
  title: PropTypes.string,
  dataAlteracao: PropTypes.any,
  idVersao: PropTypes.number,
  idLimite: PropTypes.number,
  handleCloseModal: PropTypes.func,
  isModificada: PropTypes.bool,
  index: PropTypes.string,
};

InfoModal.defaultProps = {
  itensConcessionaria: [],
  itensProduto: [],
  condicao: '',
  userCanEditCondicao: false,
  condicaoSisgar: null,
  canRenderCondicao: false,
  canRenderCondicaoSisgar: false,
  isModificada: false,
  isModal: false,
  title: '',
  dataAlteracao: null,
  idVersao: 0,
  idLimite: 0,
  handleCloseModal: () => { },
  index: '',
};

export default InfoModal;
