/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import { Scrollbars } from 'react-custom-scrollbars';

import './list.scss';

const ListContent = ({
  // eslint-disable-next-line no-unused-vars
  type, children,
}) => (
  // Componente usado para indicar o conteudo que será renderizado pela lista.
  // A props 'type' é usada por <List> para detectar qual tipo de conteúdo é.

  children
);

ListContent.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['content', 'error', 'empty', 'loading']),
};

ListContent.defaultProps = {
  children: null,
  type: 'content',
};

const List = ({
  isError, isLoading, isEmpty,
  children, scrollToBottom, disabledScrolls, ...other
}) => {
  const getListContentOfType = (type) => (
    React.Children.toArray(children).find((c) => c.props.type === type)
  );

  if (isError) {
    return (
      <div className="list__rendered-content">
        {getListContentOfType('error') || 'Ocorreu um erro.'}
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="list__rendered-content">
        {getListContentOfType('loading') || (
        <div className="list__loading-dots" />
        )}
      </div>
    );
  }

  if (isEmpty) {
    return (
      <div className="list__rendered-content">
        {getListContentOfType('empty') || ''}
      </div>
    );
  }

  return (
    !disabledScrolls ? (
      <div className="list__container-div">
        <Scrollbars
          ref={(scrollRef) => (scrollToBottom ? scrollRef?.scrollToBottom() : null)}
          renderTrackHorizontal={(props) => <div {...props} className="track-horizontal" style={{ display: 'none' }} />}
          renderThumbHorizontal={(props) => <div {...props} className="thumb-horizontal" style={{ display: 'none' }} />}
          {...other}
        >
          <div className="list__inner-div">
            {getListContentOfType('content')}
          </div>
        </Scrollbars>
      </div>
    ) : getListContentOfType('content')
  );
};

List.propTypes = {
  children: PropTypes.node,
  isError: PropTypes.bool,
  isLoading: PropTypes.bool,
  isEmpty: PropTypes.bool,
  scrollToBottom: PropTypes.bool,
  disabledScrolls: PropTypes.bool,
};

List.defaultProps = {
  children: null,
  isError: false,
  isLoading: false,
  isEmpty: false,
  scrollToBottom: false,
  disabledScrolls: false,
};

export { List, ListContent };
