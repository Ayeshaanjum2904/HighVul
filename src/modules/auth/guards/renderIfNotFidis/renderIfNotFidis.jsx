import PropTypes from 'prop-types';

const RenderIfNotFidis = ({ isFidis, children }) => (
  !isFidis
    ? (children)
    : null
);

RenderIfNotFidis.propTypes = {
  children: PropTypes.node.isRequired,
  isFidis: PropTypes.bool,
};

RenderIfNotFidis.defaultProps = {
  isFidis: false,
};

export default RenderIfNotFidis;
