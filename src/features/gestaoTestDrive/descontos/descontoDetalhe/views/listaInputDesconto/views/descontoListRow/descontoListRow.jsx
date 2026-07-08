import React from 'react';
import PropTypes from 'prop-types';

import ButtonTooltipIcon from 'common/controls/buttonTooltipIcon';
import SelectVeiculo from 'common/controls/selectVeiculo/selectVeiculo';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/styles';
import { trackedProperties } from 'modules';
import { Pages } from '../../../../../redux/enums';

import './descontoListRow.scss';

const useStyles = makeStyles({
  button: {
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
    backgroundColor: '#505669',
    '&:hover': {
      backgroundColor: '#3C414E',
    },
    '&:active': {
      backgroundColor: '#282B34',
    },
  },
});

const DescontoListRow = ({
  selectedMvs, setVeiculo, mvs, selectedMvsList, removeVeiculo, page, deleteVeiculo,
}) => {
  const classes = useStyles();
  return (
    <div className="desconto-list-row__container">
      <div className="desconto-list-row__item mvs-list-row__select">
        <SelectVeiculo
          selectedMvs={selectedMvs.value}
          setVeiculo={setVeiculo}
          mvs={mvs}
          selectedMvsList={selectedMvsList}
        />
      </div>
      <div className="desconto-list-row__item mvs-list-row__remove">
        <ButtonTooltipIcon
          title="Excluir"
          className={classes.button}
          buttonAction={
            page === Pages.descontosCreate
              ? () => removeVeiculo(selectedMvs.value)
              : () => deleteVeiculo(selectedMvs.value)
            }
          mixpanelTarget="Remover MVS da selecão"
          mixpanelPage={trackedProperties.descontosPage}
        >
          <DeleteIcon fontSize="small" style={{ color: 'white' }} />
        </ButtonTooltipIcon>
      </div>
    </div>
  );
};

DescontoListRow.propTypes = {
  mvs: PropTypes.array,
  selectedMvs: PropTypes.object,
  setVeiculo: PropTypes.func,
  selectedMvsList: PropTypes.array,
  removeVeiculo: PropTypes.func,
  deleteVeiculo: PropTypes.func,
  page: PropTypes.string,
};

DescontoListRow.defaultProps = {
  mvs: [],
  selectedMvs: null,
  setVeiculo: () => {},
  selectedMvsList: [],
  removeVeiculo: () => {},
  deleteVeiculo: () => {},
  page: null,
};

export default DescontoListRow;
