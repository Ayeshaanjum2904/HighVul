import React from 'react';
import PropTypes from 'prop-types';

import List, { ListContent } from 'common/layout/list';
import ErrorListRow from './errorListRow';
import ErrorListHeader from './errorListHeader';

import './errorList.scss';

const ErrorList = ({ errors }) => (
  <div className="descontos-details__list-error__container">
    <div className="descontos-details__list-error__container_list">
      <ErrorListHeader />
      <List
        autoHeight
      >
        <ListContent>
          {(Array.isArray(errors) ? errors : []).map((e, i) => (
            <ErrorListRow error={e} key={i} />
          ))}
        </ListContent>
      </List>
    </div>
  </div>
);

ErrorList.propTypes = {
  errors: PropTypes.array,
};

ErrorList.defaultProps = {
  errors: null,
};

export default ErrorList;
