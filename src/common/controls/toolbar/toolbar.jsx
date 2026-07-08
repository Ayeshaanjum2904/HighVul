import React from 'react';
import PropTypes from 'prop-types';

import TypographyButton from './views/typographyButton';
import AlignSelector from './views/alignSelectors';
import ColorSelector from './views/colorSelector';
import HighlightText from './views/highlightText';

const colors = ['', 'red', 'green', 'blue', 'orange', 'violet', '#d0d1d2'];
const highlights = ['yellow', 'red', 'green', 'blue', 'orange', 'violet', 'transparent'];
const Toolbar = ({ disabled, index, style }) => (
  <div
    id={`ql-toolbar-${index}`}
    style={{
      pointerEvents: disabled ? 'none' : '',
      ...style,
    }}
  >
    <TypographyButton />
    <AlignSelector />
    <ColorSelector colors={colors} />
    <HighlightText colors={highlights} />
  </div>
);

Toolbar.propTypes = {
  disabled: PropTypes.bool,
  index: PropTypes.any,
  style: PropTypes.object,
};

Toolbar.defaultProps = {
  disabled: false,
  index: '',
  style: {},
};

export default Toolbar;
