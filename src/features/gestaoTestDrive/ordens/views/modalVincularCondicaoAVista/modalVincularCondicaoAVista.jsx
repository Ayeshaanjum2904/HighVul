import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from 'common/layout/modal';
import MarcaBadge from 'common/views/logoMarca';
import ProdutoBadge from 'common/views/logoProduto';
import { formatDate } from 'utils/format';
import { CustomSwitch } from 'common/controls/customSwitch/customSwitch.styled';
import ErrorIcon from '@mui/icons-material/Error';
import VeiculosSemCondicao from '../veiculosSemCondicao';
import {
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalSubtitle,
  ModalHeaderIdOrdem,
  ModalContent,
  StyledDataGrid,
  SituacaoContainer,
  SituacaoText,
  CustomTooltip,
  HtmlTooltip,
} from './modalVincularCondicaoAVista.style';

const ModalVincularCondicaoAVista = ({
  open,
  onClose,
  selectedOrdem,
  condicoes,
  isLoading,
  isError,
  loadingCondicoes,
  onVincular,
  onLoadCondicoes,
}) => {
  useEffect(() => {
    if (open && selectedOrdem) {
      onLoadCondicoes(selectedOrdem.id);
    }
  }, [open, selectedOrdem, onLoadCondicoes]);

  const renderProdutoBadge = (fieldProduto) => (
    <ProdutoBadge produto={fieldProduto} />
  );

  const renderMarcaBadge = (fieldMarca) => (
    <MarcaBadge marca={fieldMarca} />
  );

  const handleSwitchChange = (condicao) => {
    if (loadingCondicoes[condicao.id]) return;

    const associar = !condicao.vinculada;
    const fetchData = condicao.condicaoInvalida;
    onVincular(selectedOrdem.id, condicao.id, associar, fetchData);
  };

  const renderSituacao = (condicao) => (
    <SituacaoContainer>
      <CustomSwitch
        checked={condicao.vinculada || false}
        onClick={() => handleSwitchChange(condicao)}
        disabled={loadingCondicoes[condicao.id] || false}
      />
      <SituacaoText>
        {condicao.vinculada ? 'Vinculada' : 'Desvinculada'}
      </SituacaoText>
    </SituacaoContainer>
  );

  const renderWarningTooltip = (condicao) => (
    condicao.condicaoInvalida ? (
      <HtmlTooltip
        title={(
          <CustomTooltip>
            <div className="tooltip-header">
              <ErrorIcon style={{ color: '#C76800', fontSize: '16px' }} />
              <div className="tooltip-title">Condição Inativa</div>
            </div>
            <div className="tooltip-message">
              Essa condição não será exibida nos pedidos desta ordem.
            </div>
          </CustomTooltip>
        )}
        placement="bottom-start"
      >
        <ErrorIcon style={{ color: '#C76800', fontSize: '18px' }} />
      </HtmlTooltip>
    ) : null
  );

  const getRowClassName = (params) => (params.row.condicaoInvalida ? 'invalid-condition' : '');

  const columns = [
    {
      field: 'marca',
      headerName: 'Brand',
      editable: false,
      sortable: false,
      flex: 0.4,
      minWidth: 50,
      align: 'left',
      renderCell: (param) => renderMarcaBadge(param?.value),
    },
    {
      field: 'produto',
      headerName: 'Produto',
      editable: false,
      sortable: false,
      flex: 0.8,
      minWidth: 100,
      align: 'left',
      renderCell: (param) => renderProdutoBadge(param?.value),
    },
    {
      field: 'vigenciaInicio',
      headerName: 'Início de Vigência',
      editable: false,
      sortable: false,
      flex: 0.8,
      minWidth: 60,
      align: 'left',
      valueFormatter: (param) => formatDate(param?.value, 'DD/MM/YYYY'),
    },
    {
      field: 'vigenciaFim',
      headerName: 'Fim de Vigência',
      editable: false,
      sortable: false,
      flex: 0.8,
      minWidth: 60,
      align: 'left',
      valueFormatter: (param) => formatDate(param?.value, 'DD/MM/YYYY'),
    },
    {
      field: 'numeroCartaDoMes',
      headerName: 'Número DVE',
      editable: false,
      sortable: false,
      flex: 0.8,
      minWidth: 80,
      align: 'left',
    },
    {
      field: 'desconto',
      headerName: 'Desconto',
      editable: false,
      sortable: false,
      flex: 0.5,
      minWidth: 60,
      align: 'left',
      valueFormatter: (param) => `${param?.value}%`,
    },
    {
      field: 'situacao',
      headerName: 'Situação',
      editable: false,
      sortable: false,
      flex: 0.8,
      minWidth: 160,
      align: 'center',
      type: 'actions',
      renderCell: (param) => renderSituacao(param.row),
    },
    {
      field: 'warning',
      headerName: '',
      editable: false,
      sortable: false,
      flex: 0.2,
      align: 'center',
      type: 'actions',
      disableColumnMenu: true,
      renderCell: (param) => renderWarningTooltip(param.row),
    },
  ];

  if (!open) return null;

  return (
    <Modal
      closeModal={onClose}
      width="90vw"
      height="85vh"
    >
      <ModalContainer>
        <ModalHeader>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <ModalSubtitle>Gestão de Test Drive</ModalSubtitle>
              <ModalTitle>
                Condições à vista
              </ModalTitle>
              <ModalHeaderIdOrdem>
                ID ORDEM #
                {selectedOrdem.id}
              </ModalHeaderIdOrdem>
            </div>
            <div style={{ marginTop: '30px', position: 'relative' }}>
              <VeiculosSemCondicao
                isCondicaoComercial={false}
                ordemId={selectedOrdem?.id}
              />
            </div>
          </div>
        </ModalHeader>
        <ModalContent>
          <StyledDataGrid
            footer={false}
            error={isError}
            loading={isLoading}
            columns={columns}
            rows={condicoes}
            disableSelectionOnClick
            getRowClassName={getRowClassName}
            overlay={{
              emptyMessage: 'Nenhuma condição à vista encontrada.',
              errorMessage: 'Ocorreu um erro ao carregar as condições à vista.',
            }}
          />
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
};

ModalVincularCondicaoAVista.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  selectedOrdem: PropTypes.object,
  condicoes: PropTypes.array,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  loadingCondicoes: PropTypes.object,
  onVincular: PropTypes.func.isRequired,
  onLoadCondicoes: PropTypes.func.isRequired,
};

ModalVincularCondicaoAVista.defaultProps = {
  selectedOrdem: null,
  condicoes: [],
  isLoading: false,
  isError: false,
  loadingCondicoes: {},
};

export default ModalVincularCondicaoAVista;
