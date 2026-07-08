import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import AssociacoesGrupo from '../commonViews/associacoesGrupo';
import AdicionarAssociacaoModal from '../commonViews/adicionarAssociacaoModal';
import { Loader } from '../../../../../redux/enums';
import ConcessionariasList from './concessionariasList';
import ConcessionariasAssociadasList from './concessionariasAssociadasList';
import ConcessionariasSelector from './concessionariaSelector';
import PreviewConcessionariaModal from './previewConcessionariaModal';

const ConcessionariasGrupo = ({
  registerLoader, getConcessionariasGrupo, isLoading, isLoadingConcessionaria,
  isModalDetalheOpen, closeModalDetalhe, isModalAssociacaoOpen,
  insertConcessionarias, closeModalAssociacao, openModalAssociacao,
}) => {
  useEffect(() => {
    registerLoader(Loader.concessionariasGrupo, getConcessionariasGrupo());
  }, [registerLoader, getConcessionariasGrupo]);
  return (
    <>
      <AssociacoesGrupo
        title="Concessionárias associadas ao grupo"
        buttonTitle="Associar Concessionária"
        buttonClick={openModalAssociacao}
        isLoading={isLoadingConcessionaria}
      >
        <ConcessionariasList />
      </AssociacoesGrupo>
      {isModalDetalheOpen ? (
        <PreviewConcessionariaModal
          closeModal={closeModalDetalhe}
        />
      ) : null}
      {isModalAssociacaoOpen ? (
        <AdicionarAssociacaoModal
          title="Associar concessionária"
          subtitle="Associe uma concessionária existente:"
          buttonTitle="Associar concessionária"
          isLoading={isLoading}
          onClick={() => insertConcessionarias()}
          closeModal={closeModalAssociacao}
          Input={ConcessionariasSelector}
        >
          <ConcessionariasAssociadasList />
        </AdicionarAssociacaoModal>
      ) : null}
    </>
  );
};

ConcessionariasGrupo.propTypes = {
  getConcessionariasGrupo: PropTypes.func,
  registerLoader: PropTypes.func,
  isLoading: PropTypes.bool,
  isModalDetalheOpen: PropTypes.bool,
  closeModalDetalhe: PropTypes.func,
  isModalAssociacaoOpen: PropTypes.bool,
  insertConcessionarias: PropTypes.func,
  closeModalAssociacao: PropTypes.func,
  openModalAssociacao: PropTypes.func,
  isLoadingConcessionaria: PropTypes.bool,
};

ConcessionariasGrupo.defaultProps = {
  getConcessionariasGrupo: () => {},
  registerLoader: () => {},
  isLoading: false,
  isModalDetalheOpen: false,
  closeModalDetalhe: () => {},
  isModalAssociacaoOpen: false,
  insertConcessionarias: () => {},
  closeModalAssociacao: () => {},
  openModalAssociacao: () => {},
  isLoadingConcessionaria: false,
};

export default ConcessionariasGrupo;
