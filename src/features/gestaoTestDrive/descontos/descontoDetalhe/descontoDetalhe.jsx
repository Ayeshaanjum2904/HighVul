import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';

import {
  Page, PageHeader, PageTitle, PageSubTitle, PageContent, PageFooter,
} from 'common/layout/page';
import SnackbarList from 'common/snackbarList';
import ErroPage from 'common/layout/erroPage';
import { Pages } from '../redux/enums';

import Forms from './views/form';
import BreadCrumbDescontosDetalhe from './views/breadCrumbDescontoDetalhe';
import PageTitleDescontos from './views/pageTitleDescontos';
import ModalSelector from './views/modalSelector/modalSelector';
import ListaVeiculos from './views/listaInputDesconto';
import ActionButton from './views/actionButton';
import ModalError from './views/modalAlerta';
import DuplicateWarningMessage from './views/duplicateWarningMessage';
import ModalConcessionaria from './views/modalConcessionarias/modalConcessionaria';
import ListaConcessionarias from './views/concessionariaList';

import './descontoDetalhe.scss';

const DescontoDetalhe = ({
  page, resetStore, isModalOpen, isModalErrorOpen,
  snackbarErrors, onCloseSnackbar, isErroLoadingInputs, isModalConcessionariaOpen,
}) => {
  useEffect(() => () => resetStore(), [resetStore]);

  const getPageTitle = () => {
    if (page === Pages.condicoesUpdate) return 'Editar condição a vista';
    return 'Cadastro de condição a vista';
  };

  return (
    <Page>
      <PageHeader>
        <PageSubTitle>
          <BreadCrumbDescontosDetalhe
            lastPage={getPageTitle()}
          />
        </PageSubTitle>
        <PageTitle>
          <PageTitleDescontos
            title={getPageTitle()}
          />
        </PageTitle>
        <DuplicateWarningMessage />
      </PageHeader>
      {isErroLoadingInputs ? (
        <ErroPage
          breakLine
          mensagem={'Houve um erro ao conectar com o banco de dados.\nTente novamente mais tarde.'}
        />
      ) : (
        <div>
          <PageContent>
            <Scrollbars>
              <div className="descontos-details__content">
                <div className="descontos-details__content__forms">
                  <Forms />
                </div>
                <hr className="descontos-details__content__divider" />
                <div className="descontos-details__content__lista-veiculos-selected">
                  <ListaVeiculos />
                </div>
                <hr className="descontos-details__content__divider" />
                <div>
                  <ListaConcessionarias />
                </div>
              </div>
            </Scrollbars>
          </PageContent>
          <PageFooter>
            <div className="descontos-details__footer">
              <ActionButton />
            </div>
          </PageFooter>
        </div>
      )}
      {isModalOpen ? <ModalSelector /> : null}
      {isModalConcessionariaOpen ? <ModalConcessionaria /> : null}
      {isModalErrorOpen ? <ModalError /> : null}
      <SnackbarList
        snackbarErrors={snackbarErrors}
        onClose={(id) => onCloseSnackbar(id)}
      />
    </Page>
  );
};

DescontoDetalhe.propTypes = {
  page: PropTypes.string,
  resetStore: PropTypes.func,
  isModalOpen: PropTypes.bool,
  isModalErrorOpen: PropTypes.bool,
  snackbarErrors: PropTypes.arrayOf(PropTypes.object),
  onCloseSnackbar: PropTypes.func,
  isErroLoadingInputs: PropTypes.bool,
  isModalConcessionariaOpen: PropTypes.bool,
};

DescontoDetalhe.defaultProps = {
  page: '',
  resetStore: () => {},
  isModalOpen: false,
  isModalErrorOpen: false,
  snackbarErrors: [],
  onCloseSnackbar: () => {},
  isErroLoadingInputs: false,
  isModalConcessionariaOpen: false,
};

export default DescontoDetalhe;
