import React from 'react';
import PropTypes from 'prop-types';

import MsgIcon from '@material-ui/icons/InsertComment';

const MessageIcon = ({
  checked,
}) => (
  <div>
    {
        checked ? (
          <MsgIcon className="Message-Icon" style={{ color: '#8f9bb3' }} />
        )
          : ('')
      }
  </div>
);

MessageIcon.propTypes = {
  checked: PropTypes.bool.isRequired,
};

export default MessageIcon;
