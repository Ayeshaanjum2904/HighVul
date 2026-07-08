import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import List, { ListContent } from 'common/layout/list';
import ListRow from './analistasListRow';

const AnalistasList = ({
  analistas, isLoading, isError, listTitle,
}) => (
  <List
    isLoading={isLoading}
    isError={isError}
    isEmpty={_.isEmpty(analistas)}
    autoHeight
    autoHeightMax="140px"
    autoHeightMin="30px"
  >
    <ListContent>
      {(Array.isArray(analistas) ? analistas : []).map((a, i) => (
        <ListRow analista={a} key={i} />
      ))}
    </ListContent>
    <ListContent type="empty">
      {listTitle}
    </ListContent>

    <ListContent type="error">
      Ocorreu um erro ao carregar os analistas.
    </ListContent>
  </List>
);

AnalistasList.propTypes = {
  analistas: PropTypes.array,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  listTitle: PropTypes.string,

};

AnalistasList.defaultProps = {
  analistas: null,
  isLoading: false,
  isError: false,
  listTitle: '',
};

export default AnalistasList;
