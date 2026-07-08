import React from 'react';
import PropTypes from 'prop-types';

import TimelineRow from '../timeLineListRow/timelineRow';

import './timelineGroup.scss';

const TimeLineGroup = ({ grupoComentarios, index }) => {
  if (grupoComentarios?.label) {
    return (
      <div className={`common__comentarios-list__content_outer${(index === 0) ? '' : '-border'}`}>
        <div className="common__comentarios-list__content">
          <div className="common__comentarios-list__content_label">
            {(grupoComentarios?.label || '').toUpperCase()}
          </div>
          <div className="common__comentarios-list__content_comentarios">
            {
          (grupoComentarios?.comentarios || []).map((c, i) => (
            <TimelineRow comentario={c} key={i} />
          ))
        }
          </div>
        </div>
      </div>
    );
  }
  return null;
};

TimeLineGroup.propTypes = {
  grupoComentarios: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default TimeLineGroup;
