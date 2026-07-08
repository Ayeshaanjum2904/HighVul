import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import './detailsTimeLine.scss';
import moment from 'moment';
import _ from 'lodash';

const DetailsTimeLine = ({ items }) => {
  const [detailOpen, setDetailOpen] = useState(false);

  const copiaItems = [...items];
  const firstItem = copiaItems.shift();
  const lastItem = copiaItems.pop();

  const formatDate = (dataHora) => (
    moment(dataHora).format('DD-MM-YYYY')
  );

  const formatHour = (dataHora) => {
    const dataFormatada = moment(dataHora);
    const hora = dataFormatada.format('HH:mm'); // arrumar aqui pq ta pegando a hora do PC

    return hora;
  };

  const handleToggle = () => {
    setDetailOpen(!detailOpen);
  };

  const timelineDot = {
    backgroundColor: '#243782',
    margin: '0px',
  };

  const timelineTopDot = {
    backgroundColor: '#243782',
    margin: '10px 0px 0px 0px',
  };

  const timelineConnector = {
    backgroundColor: '#243782',
  };

  const timelineItem = {
    minHeight: '0px',
    padding: '0px',
    margin: '0px',
  };

  const timelineContainer = {
    padding: '0px 16px 0px 16px',
  };

  const timelineFirstContainer = {
    padding: '0px 16px 4px 16px',
  };

  const timelineLastContainer = {
    padding: '0px 16px 15px 16px',
  };

  return (
    <div className="details__container">
      {_.isEmpty(items) ? (
        <Timeline className="timeline__summary" sx={timelineFirstContainer}>
          <TimelineItem sx={timelineItem}>
            <TimelineDot sx={timelineTopDot} />
            <TimelineContent>
              <div className="timeline__summary-content">
                <span>Aguardando análise do financiamento rede</span>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      )
        : (
          <details id="details__timeline" open={detailOpen} onToggle={handleToggle}>
            <summary id="details__summary-timeline">
              {!detailOpen
                ? (
                  <Timeline className="timeline__summary" sx={timelineFirstContainer}>
                    <TimelineItem sx={timelineItem}>
                      <TimelineDot sx={timelineTopDot} />
                      <TimelineContent>
                        <div className="timeline__summary-content">
                          <div className="timeline__summary-content-bold-title">
                            {`${formatDate(lastItem?.dataHora)} | ${formatHour(lastItem?.dataHora)}`}
                          </div>
                          <div className="timeline__summary-content-bold-subtitle">
                            {lastItem?.descricao}
                          </div>
                        </div>
                      </TimelineContent>
                    </TimelineItem>
                  </Timeline>
                )
                : (
                  <Timeline className="timeline__summary" sx={timelineContainer}>
                    <TimelineItem sx={timelineItem}>
                      <TimelineSeparator>
                        <TimelineDot sx={timelineDot} />
                        <TimelineConnector sx={timelineConnector} />
                      </TimelineSeparator>
                      <TimelineContent>
                        <div className="timeline__summary-content">
                          <div className="timeline__summary-content-title">
                            {`${formatDate(firstItem?.dataHora)} | ${formatHour(firstItem?.dataHora)}`}
                          </div>
                          <div className="timeline__summary-content-title">
                            {firstItem?.descricao}
                          </div>
                        </div>
                      </TimelineContent>
                    </TimelineItem>
                  </Timeline>
                )}
            </summary>
            {copiaItems.map((item, index) => (
              <Timeline className="timeline__details-open" sx={timelineContainer} key={index}>
                <TimelineItem sx={timelineItem}>
                  <TimelineSeparator>
                    <TimelineDot sx={timelineDot} />
                    <TimelineConnector sx={timelineConnector} />
                  </TimelineSeparator>
                  <TimelineContent>
                    <div className="timeline__summary-content">
                      <div className="timeline__summary-content-title">
                        {`${formatDate(item?.dataHora)} | ${formatHour(item?.dataHora)}`}
                      </div>
                      <div className="timeline__summary-content-title">
                        {item?.descricao}
                      </div>
                    </div>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            ))}
            <Timeline className="timeline__details-open" sx={timelineLastContainer}>
              <TimelineItem sx={timelineItem}>
                <TimelineSeparator>
                  <TimelineDot sx={timelineDot} />
                </TimelineSeparator>
                <TimelineContent>
                  <div className="timeline__summary-content">
                    <div className="timeline__summary-content-bold-title">
                      {`${formatDate(lastItem?.dataHora)} | ${formatHour(lastItem?.dataHora)}`}
                    </div>
                    <div className="timeline__summary-content-bold-subtitle">
                      {lastItem?.descricao}
                    </div>
                  </div>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </details>
        )}
    </div>
  );
};

DetailsTimeLine.propTypes = {
  items: PropTypes.array,
};

DetailsTimeLine.defaultProps = {
  items: [],
};

export default DetailsTimeLine;
