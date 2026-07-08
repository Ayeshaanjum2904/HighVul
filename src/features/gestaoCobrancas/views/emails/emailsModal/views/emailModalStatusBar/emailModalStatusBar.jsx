/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';

import StatusLabel from 'common/views/statusLabel';
import { ModalEmail } from '../../../../../redux/enums';

const NUM_EDICAO = 1;
const NUM_PREVIEW = 2;

const mapStatusToNumber = (currentStatus) => {
  switch (currentStatus) {
    case ModalEmail.edicaoEmail:
      return NUM_EDICAO;
    case ModalEmail.previewEmail:
      return NUM_PREVIEW;
    default:
      return 0;
  }
};

const createItems = (status) => {
  const statusNumber = mapStatusToNumber(status);
  return [
    {
      number: NUM_EDICAO,
      label: 'CONTEÚDO',
      checkmark: statusNumber > NUM_EDICAO,
      active: statusNumber === NUM_EDICAO,
      color: statusNumber > NUM_EDICAO ? 'blue' : 'gray',
    }, {
      number: NUM_PREVIEW,
      label: 'CONFIRMAÇÃO',
      checkmark: statusNumber > NUM_PREVIEW,
      active: statusNumber === NUM_PREVIEW,
      color: statusNumber > NUM_PREVIEW ? 'blue' : 'gray',
    },
  ];
};

const EmailModalStatusBar = ({
  status, isLoading,
}) => {
  const items = isLoading ? [] : createItems(status);
  return (
    <>
      { ((items || []).map((i, index) => (
        <StatusLabel
          number={i.number}
          label={i.label}
          color={i.color}
          checkmark={i.checked}
          active={i.active}
          key={index}
        />
      ))) }
    </>
  );
};

EmailModalStatusBar.propTypes = {
  status: PropTypes.string,
  isLoading: PropTypes.bool,
};

EmailModalStatusBar.defaultProps = {
  status: null,
  isLoading: null,
};

export default EmailModalStatusBar;
