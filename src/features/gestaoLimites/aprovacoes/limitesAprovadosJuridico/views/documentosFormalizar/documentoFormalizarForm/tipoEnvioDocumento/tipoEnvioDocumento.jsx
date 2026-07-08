import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Stack, Typography } from '@mui/material';
import colors from 'assets/styles/colors';

const tiposEnvio = [
  {
    text: 'Docusign',
    value: 'docusign',
  },
  {
    text: 'Anexo do dealer',
    value: 'anexo_do_dealer',
  },
  {
    text: 'Enviar doc. original',
    value: 'enviar_doc_original',
  },
];

const TipoEnvioDocumento = ({
  value, append, remove, disabled, text,
}) => {
  const handleChange = (isSelected, itemValue) => {
    if (isSelected) remove(itemValue, value?.findIndex((v) => v === itemValue));
    else append(itemValue);
  };

  const isDocusign = useMemo(() => value?.some((tipo) => tipo === 'docusign'), [value]);
  return (
    <Stack gap="4px">
      <Typography variant="12_regular" lineHeight="16px">
        {text}
      </Typography>
      <Stack direction="row" gap="8px">
        {
        tiposEnvio?.map((tipo, index) => {
          const selected = value.includes(tipo.value);
          const isDisabled = (tipo.value !== 'docusign' && isDocusign)
          || (tipo.value === 'docusign' && !isDocusign && value?.length > 0)
          || disabled;
          return (
            <Stack
              key={index}
              direction="row"
              gap="6px"
              justifyContent="start"
              alignItems="center"
              borderRadius="4px"
              width="138px"
              height="39px"
              padding="6px 4px"
              sx={{
                cursor: isDisabled ? 'default' : 'pointer',
                backgroundColor: colors.secundary_color_100_36,
                userSelect: 'none',
              }}
              onClick={() => !isDisabled && handleChange(selected, tipo?.value)}
            >
              <Checkbox
                checked={selected}
                disabled={isDisabled}
                disableRipple
                size="smaller"
                color="primary500"
                sx={{
                  padding: 0,
                  color: isDisabled ? colors.secundary_color_600 : colors.secundary_color_700,
                }}
              />
              <Typography
                variant="12_regular"
                lineHeight="24px"
                color={isDisabled ? colors.secundary_color_600 : colors.secundary_color_700}
              >
                {tipo.text}
              </Typography>
            </Stack>
          );
        })
      }
      </Stack>
    </Stack>
  );
};

TipoEnvioDocumento.propTypes = {
  value: PropTypes.array,
  append: PropTypes.func,
  remove: PropTypes.func,
  disabled: PropTypes.bool,
  text: PropTypes.string,
};

TipoEnvioDocumento.defaultProps = {
  value: [],
  append: () => {},
  remove: () => {},
  disabled: false,
  text: 'Opção de envio do arquivo',
};

export default TipoEnvioDocumento;
