import React from 'react';
import PropTypes from 'prop-types';

import ButtonIcon from 'common/controls/buttonIcon';
import VoltarIcon from '@material-ui/icons/ArrowBack';

import './pageTitleDescontos.scss';

const PageTitleDescontos = ({ title, onClick }) => (
  <div className="descontos-detail__title__content">
    <div className="descontos-detail__title__content__button">
      <ButtonIcon
        onClick={() => onClick()}
      >
        <VoltarIcon />
      </ButtonIcon>
    </div>
    {title}
  </div>
);

PageTitleDescontos.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};

PageTitleDescontos.defaultProps = {
  title: '',
  onClick: () => {},
};

export default PageTitleDescontos;
