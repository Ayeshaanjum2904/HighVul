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
import BreadCrumbCondicaoDetalhe from './views/breadCrumbCondicaoDetalhe';
import PageTitleCondicao from './views/pageTitleCondicao';
import ListaVeiculos from './views/listaInputCondicao';
import ActionButton from './views/actionButton';
import DuplicateWarningMessage from './views/duplicateWarningMessage';
import ModalSelector from './views/modalSelector/modalSelector';
import ModalConcessionaria from './views/modalConcessionarias/modalConcessionaria';
import ListaConcessionarias from './views/concessionariaList';

import './condicaoDetalhe.scss';

const CondicaoDetalhe = ({
  page, resetStore, isModalOpen, isModalConcessionariaOpen,
  snackbarErrors, onCloseSnackbar, isErroLoadingInputs,
}) => {
  useEffect(() => () => resetStore(), [resetStore]);

  const getPageTitle = () => {
    if (page === Pages.condicoesUpdate) return 'Editar condição comercial';
    return 'Cadastrar condição comercial';
  };

  return (
    <Page>
      <PageHeader>
        <PageSubTitle>
          <BreadCrumbCondicaoDetalhe lastPage={getPageTitle()} />
        </PageSubTitle>
        <PageTitle>
          <PageTitleCondicao title={getPageTitle()} />
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
              <div className="condicoes-details__content">
                <div className="condicoes-details__content__forms">
                  <Forms />
                </div>
                <hr className="condicoes-details__content__divider" />
                <div className="condicoes-details__content__lista-veiculos-selected">
                  <ListaVeiculos />
                </div>
                <hr className="condicoes-details__content__divider" />
                <div>
                  <ListaConcessionarias />
                </div>
              </div>
            </Scrollbars>
          </PageContent>
          <PageFooter>
            <div className="condicoes-details__footer">
              <ActionButton />
            </div>
          </PageFooter>
        </div>
      )}
      {isModalOpen ? <ModalSelector /> : null}
      {isModalConcessionariaOpen ? <ModalConcessionaria /> : null}
      <SnackbarList
        snackbarErrors={snackbarErrors}
        onClose={(id) => onCloseSnackbar(id)}
      />
    </Page>
  );
};

CondicaoDetalhe.propTypes = {
  page: PropTypes.string,
  resetStore: PropTypes.func,
  isModalOpen: PropTypes.bool,
  snackbarErrors: PropTypes.arrayOf(PropTypes.object),
  onCloseSnackbar: PropTypes.func,
  isErroLoadingInputs: PropTypes.bool,
  isModalConcessionariaOpen: PropTypes.bool,
};

CondicaoDetalhe.defaultProps = {
  page: '',
  resetStore: () => { },
  isModalOpen: false,
  snackbarErrors: [],
  onCloseSnackbar: () => { },
  isErroLoadingInputs: false,
  isModalConcessionariaOpen: false,
};

export default CondicaoDetalhe;
