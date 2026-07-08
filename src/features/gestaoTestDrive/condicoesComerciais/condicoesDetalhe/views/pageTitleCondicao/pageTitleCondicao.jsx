import React from 'react';
import PropTypes from 'prop-types';

import ButtonIcon from 'common/controls/buttonIcon';
import VoltarIcon from '@material-ui/icons/ArrowBack';

import './pageTitleCondicao.scss';

const PageTitleCondicao = ({ title, onClick }) => (
  <div className="condicoes-details__title__content">
    <div className="condicoes-details__title__content__button">
      <ButtonIcon
        onClick={() => onClick()}
      >
        <VoltarIcon />
      </ButtonIcon>
    </div>
    {title}
  </div>
);

PageTitleCondicao.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};

PageTitleCondicao.defaultProps = {
  title: '',
  onClick: () => {},
};

export default PageTitleCondicao;
