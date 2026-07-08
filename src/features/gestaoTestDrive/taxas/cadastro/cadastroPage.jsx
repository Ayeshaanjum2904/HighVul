import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Page, PageHeader, PageTitle, PageSubTitle, PageContent,
} from 'common/layout/page';
import SnackbarList from 'common/snackbarList';
import BreadCrumbCadastro from './views/breadCrumbCadastro';
import Seletores from './views/seletores';
import ButtonBack from './views/buttonBack';
import ModalVoltar from './views/ModalVoltar';

import './cadastro.scss';
import FormTaxa from './views/formTaxa';

const CadastroPage = ({
  isModalOpen, isFormOpen, resetStore, taxasCadastradas, snackbarErrors, onSnackbarClose,
}) => {
  useEffect(() => () => { resetStore(); }, [resetStore]);

  return (
    <Page>
      <PageHeader>
        <PageSubTitle>
          <BreadCrumbCadastro />
        </PageSubTitle>
        <div className="taxa-cadastro__page-title">
          <ButtonBack />
          <PageTitle>
            Cadastro de nova taxa
          </PageTitle>
        </div>
      </PageHeader>
      <PageContent>
        <div className="taxa-cadastro__content__header">
          <div className="taxa-cadastro__content__seletores">
            <Seletores />
          </div>
        </div>
        <div className="taxa-cadastro__content">
          <div className="taxa-cadastro__content__container">
            {isFormOpen ? (
              <FormTaxa disable={false} />
            ) : null}
            <div className="taxa-cadastro__content__container__save-taxa">
              {taxasCadastradas.map((taxa) => <FormTaxa disable taxa={taxa} />)}
            </div>
          </div>
        </div>
      </PageContent>
      {isModalOpen ? (
        <ModalVoltar
          data-cy="modal-voltar"
        />
      ) : null}
      <SnackbarList
        snackbarErrors={snackbarErrors}
        onClose={(id) => onSnackbarClose(id)}
      />
    </Page>
  );
};

CadastroPage.propTypes = {
  isModalOpen: PropTypes.bool,
  isFormOpen: PropTypes.bool,
  resetStore: PropTypes.func,
  taxasCadastradas: PropTypes.array,
  snackbarErrors: PropTypes.array,
  onSnackbarClose: PropTypes.func,
};

CadastroPage.defaultProps = {
  isModalOpen: false,
  isFormOpen: false,
  resetStore: () => {},
  taxasCadastradas: [],
  snackbarErrors: [],
  onSnackbarClose: () => {},
};
export default CadastroPage;
