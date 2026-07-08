import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import List, { ListContent } from 'common/layout/list';

import TimelineGroup from './timelineListGroup/timelineGroup';

import './timeline.scss';

const TimeLine = ({
  gruposComentarios, isLoading,
}) => (
  <div className="common__comentarios-list__container">
    { !isLoading ? (
      <List
        isEmpty={_.isEmpty(gruposComentarios)}
        scrollToBottom
      >

        <ListContent>
          <div className="common__comentarios-list__container_content">
            {(Array.isArray(gruposComentarios) ? gruposComentarios : []).map((gc, i) => (
              <TimelineGroup grupoComentarios={gc} key={i} index={i} />
            ))}
          </div>
        </ListContent>

        <ListContent type="empty">
          <div className="common__comentarios-list__message-container">
            Nenhum comentário encontrado.
          </div>
        </ListContent>

      </List>
    ) : null}
  </div>
);

TimeLine.propTypes = {
  gruposComentarios: PropTypes.array,
  isLoading: PropTypes.bool,
};

TimeLine.defaultProps = {
  gruposComentarios: null,
  isLoading: false,
};

export default TimeLine;
