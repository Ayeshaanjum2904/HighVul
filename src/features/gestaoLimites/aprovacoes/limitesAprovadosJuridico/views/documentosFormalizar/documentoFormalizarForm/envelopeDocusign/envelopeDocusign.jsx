import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  InputAdornment, Stack, TextField, Typography,
} from '@mui/material';
import { Controller } from 'react-hook-form';
import { IconButtonTooltip } from 'common/controls/iconButtonTooltip/iconButtonTooltip';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { makeStyles } from '@material-ui/styles';
import Button from 'common/controls/button';
import { TextFieldStyle } from './envelopeDocusign.style';
import ModalHistoricoEnvelope from '../../modalHistoricoEnvelope';

const useStyles = makeStyles({
  button: {
    width: 400,
    height: 40,
    left: 8,
  },
});

const EnvelopeDocusign = ({
  fieldName, control, required, label, disabled, defaultValue,
  getDadosModal, dataSuccedModal, permissionList,
}) => {
  const classes = useStyles();
  const [showModalHistorico, setShowModalHistorico] = useState(false);
  const [showButtonHistorico, setShowButtonHistorico] = useState(true);

  useEffect(() => {
    if (!disabled) {
      setShowButtonHistorico(false);
      return;
    }
    setShowButtonHistorico(true);
  }, [disabled]);

  return (
    <Stack width={showButtonHistorico ? 800 : 550} rowGap="8px" padding="0px 16px">
      {label && (<Typography variant="12_regular" lineHeight="16px">{label}</Typography>)}
      <Stack direction="row">
        <Controller
          name={fieldName}
          control={control}
          rules={{ required }}
          shouldUnregister
          defaultValue={defaultValue}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              disabled={disabled}
              size="small"
              autoFocus
              placeholder="Insira o ID do envelope Docusign"
              fullWidth
              autoComplete="off"
              sx={TextFieldStyle(Boolean(field?.value), Boolean(error))}
              InputProps={{
                endAdornment: (!disabled && Boolean(field?.value)) && (
                <InputAdornment position="end" sx={{ height: 'auto', margin: 0 }}>
                  <IconButtonTooltip tooltip="Excluir" onClick={() => field?.onChange('')}>
                    <ClearRoundedIcon />
                  </IconButtonTooltip>
                </InputAdornment>
                ),
              }}
            />
          )}
        />
        {(showButtonHistorico && permissionList.isAll) && (
          <Button
            color="primary500"
            variant="contained"
            className={classes.button}
            onClick={() => {
              getDadosModal(defaultValue);
              setShowModalHistorico(true);
            }}
          >
            Histórico de assinaturas
          </Button>
        )}
      </Stack>
      <ModalHistoricoEnvelope
        idEnvelope={defaultValue}
        open={showModalHistorico && dataSuccedModal}
        onCloseModal={() => setShowModalHistorico(false)}
      />
    </Stack>
  );
};
EnvelopeDocusign.propTypes = {
  fieldName: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  label: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.string,
  getDadosModal: PropTypes.func,
  dataSuccedModal: PropTypes.bool,
  permissionList: PropTypes.object,
};

EnvelopeDocusign.defaultProps = {
  label: '',
  required: false,
  disabled: false,
  defaultValue: '',
  dataSuccedModal: false,
  getDadosModal: () => {},
  permissionList: null,
};

export default EnvelopeDocusign;
