import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@material-ui/styles';

import FolderPlusIcon from 'assets/icons/folder-plus';

import FiledIcon from 'assets/icons/filed';
import CommonButton from 'common/controls/buttonIcon';
import CloseIcon from 'assets/icons/close';
import AlertModal from 'common/layout/alertModal';
import TooltipMessage from 'common/controls/tooltipMessage';
import { StyledTextField } from 'common/controls/input/inputStyles';
import UploadFatura from '../uploadFatura';

import './inputAnexarNotaFiscal.scss';

const CustomTextField = styled(StyledTextField)(() => ({
  '& .MuiInput-underline:after': {
    display: 'none',
    borderBottom: 'none',
  },
  '& .MuiInput-underline:before': {
    display: 'none',
    borderBottom: 'none',
    transition: 'none',
  },
  '& .MuiInputBase-input': {
    paddingTop: '12px',
    paddingBottom: '8px',
    marginLeft: '10px',
    width: 'calc(100% - 56px)',
    fontFamily: 'CircularStd',
    fontWeight: '400',
    fontSize: '14px',
    color: '#555770',
    marginRight: '8px',
    textOverflow: 'ellipsis',
    WebkitTextFillColor: 'unset',
  },
  '& .MuiInputBase-root.Mui-disabled': {
    background: 'rgba(228, 233, 242, 0.24)',
    backgroundColor: 'transparent',
  },
}));

const InputAnexarNotaFiscal = ({
  urlFatura, tamanhoFatura, nomeFatura, currentStatus, status, isUploadError, deleteFaturaPedido,
}) => {
  const errorMessage = 'Erro ao anexar arquivo. Por favor, tente novamente.';
  const valorNomeFatura = nomeFatura || (urlFatura ? 'Nota Fiscal Anexada' : '');

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const handleOpenDeleteModal = () => setOpenDeleteModal(true);

  const renderActionButton = () => {
    if (urlFatura) {
      return (
        <CommonButton onClick={handleOpenDeleteModal}>
          <CloseIcon />
        </CommonButton>
      );
    }
    return (
      <TooltipMessage title="Anexar arquivo">
        <div>
          <UploadFatura accept=".pdf,.xml" />
        </div>
      </TooltipMessage>
    );
  };

  return (
    <div className="input-text">
      { (urlFatura || currentStatus === 'pronto_para_faturamento') ? (
        <TooltipMessage
          title={valorNomeFatura}
        >
          <CustomTextField
            placeholder="Selecione o arquivo a ser anexado"
            value={valorNomeFatura}
            disabled={currentStatus !== status.prontoParaFaturamento}
            error={isUploadError}
            style={{
              background: 'rgba(228, 233, 242, 0.24)',
              borderRadius: '4px',
              width: '100%',
            }}
            InputProps={{
              style: {
                width: '100%',
                height: '40px',
                margin: '0',
              },
              startAdornment: (
                urlFatura ? <FiledIcon /> : <FolderPlusIcon />
              ),
              endAdornment: ([
                (tamanhoFatura
                  ? (
                    <span className="tamanho-fatura" key={0}>
                      {`(${tamanhoFatura} KB)`}
                    </span>
                  ) : null),
                <div className="action-button" key={1}>
                  {(currentStatus !== 'faturado') ? (renderActionButton()) : null}
                </div>,
              ]),
            }}
          />
        </TooltipMessage>
      ) : null }
      {isUploadError && (
      <span className="text-error-upload">
        {errorMessage}
      </span>
      )}
      <AlertModal
        buttonAction={() => deleteFaturaPedido()}
        title="Deseja excluir nota fiscal adicionada?"
        subtitle="O arquivo será excluído permanentemente."
        textRedButton="Excluir"
        openModal={openDeleteModal}
        setOpen={setOpenDeleteModal}
      />
    </div>
  );
};

InputAnexarNotaFiscal.propTypes = {
  urlFatura: PropTypes.string,
  tamanhoFatura: PropTypes.number,
  nomeFatura: PropTypes.string,
  currentStatus: PropTypes.string,
  status: PropTypes.string,
  isUploadError: PropTypes.bool,
  deleteFaturaPedido: PropTypes.func,
};

InputAnexarNotaFiscal.defaultProps = {
  urlFatura: null,
  tamanhoFatura: null,
  nomeFatura: null,
  currentStatus: null,
  status: '',
  isUploadError: false,
  deleteFaturaPedido: () => {},
};

export default InputAnexarNotaFiscal;
