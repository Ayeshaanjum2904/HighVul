import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SplitView from 'common/layout/splitView';
import { Scrollbars } from 'react-custom-scrollbars';

import SnackbarList from 'common/snackbarList';

import {
  Page, PageHeader, PageTitle, PageSubTitle, PageContent,
} from 'common/layout/page';

import ButtonICon from 'common/controls/buttonIcon';

import { trackedProperties } from 'modules';
import BreadCrumbCadastroVeiculos from './views/breadCrumbCadastroVeiculos/breadCrumbCadastroVeiculos';
import DadosVeiculo from './views/dadosVeiculo';
import ImagemVeiculo from './views/imagemVeiculo';
import PreviewVeiculos from './views/previewVeiculos';
import DetalheCadastroVeiculo from './views/detalheCadastroVeiculo';
import ModelosCadatro from '../modelosCadastro';

import { Pages } from '../../redux/enums';

const useStyles = makeStyles({
  root: {
    width: '24px',
    height: '24px',
    margin: '0px 20px 5px 0px',
    color: '#555770',
  },
  title: {
    display: 'inline-flex',
    alignItems: 'center',
  },
  page: {
    gridTemplateRows: 'auto minmax(0, 1fr) auto',
  },
});

const VeiculosCadastro = ({
  setVeiculosPage, isCadastroModeloOpen, resetStore,
  getBrands, snackbarErrors, onSnackbarClose, title,
}) => {
  const classes = useStyles();
  useEffect(() => {
    getBrands();
    return () => {
      resetStore();
    };
  }, [resetStore, getBrands]);
  return (
    <>
      <SplitView
        open
        sideSheetProps={{
          width: 400,
          hideCloseButton: true,
        }}
        renderSideSheetContent={() => <DetalheCadastroVeiculo />}
      >
        <Page minWidth="auto" className={classes.page}>
          <PageHeader>
            <PageSubTitle>
              <BreadCrumbCadastroVeiculos title={title} />
            </PageSubTitle>
            <PageTitle>
              <div className={classes.title}>
                <ButtonICon
                  onClick={() => setVeiculosPage(Pages.listVeiculo)}
                  mixpanelTarget="Voltar para listagem de veículos"
                  mixpanelPage={trackedProperties.veiculosPage}
                >
                  <ArrowBackIcon classes={{ root: classes.root }} />
                </ButtonICon>
                {title}
              </div>
            </PageTitle>
          </PageHeader>
          <PageContent>
            <Scrollbars>
              <DadosVeiculo />
              <ImagemVeiculo />
              <PreviewVeiculos />
            </Scrollbars>
          </PageContent>
          {isCadastroModeloOpen ? <ModelosCadatro /> : null}
        </Page>
      </SplitView>
      <SnackbarList
        snackbarErrors={snackbarErrors}
        onClose={(id) => onSnackbarClose(id)}
      />
    </>
  );
};

VeiculosCadastro.propTypes = {
  setVeiculosPage: PropTypes.func,
  isCadastroModeloOpen: PropTypes.bool,
  resetStore: PropTypes.func,
  getBrands: PropTypes.func,
  snackbarErrors: PropTypes.array,
  onSnackbarClose: PropTypes.func,
  title: PropTypes.string,
};

VeiculosCadastro.defaultProps = {
  setVeiculosPage: () => {},
  isCadastroModeloOpen: false,
  resetStore: () => {},
  getBrands: () => {},
  snackbarErrors: [],
  onSnackbarClose: () => {},
  title: null,
};

export default VeiculosCadastro;
