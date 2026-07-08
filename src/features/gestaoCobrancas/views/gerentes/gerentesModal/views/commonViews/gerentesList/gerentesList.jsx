import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import List, { ListContent } from 'common/layout/list';
import ListRow from './gerentesListRow';

const GerentesList = ({
  gerentes, isLoading, isError, listTitle,
}) => (
  <List
    isLoading={isLoading}
    isError={isError}
    isEmpty={_.isEmpty(gerentes)}
    autoHeight
    autoHeightMax="140px"
    autoHeightMin="30px"
  >
    <ListContent>
      {(Array.isArray(gerentes) ? gerentes : []).map((g, i) => (
        <ListRow gerente={g} key={i} />
      ))}
    </ListContent>
    <ListContent type="empty">
      {listTitle}
    </ListContent>

    <ListContent type="error">
      Ocorreu um erro ao carregar os gerentes.
    </ListContent>
  </List>
);

GerentesList.propTypes = {
  gerentes: PropTypes.array,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  listTitle: PropTypes.string,

};

GerentesList.defaultProps = {
  gerentes: null,
  isLoading: false,
  isError: false,
  listTitle: '',
};

export default GerentesList;
