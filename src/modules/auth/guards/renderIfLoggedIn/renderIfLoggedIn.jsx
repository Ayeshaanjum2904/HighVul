import PropTypes from 'prop-types';

const RenderIfLoggedIn = ({ isAuthenticated, children }) => (
  isAuthenticated
    ? (children)
    : null
);

RenderIfLoggedIn.propTypes = {
  children: PropTypes.node.isRequired,
  isAuthenticated: PropTypes.bool,
};

RenderIfLoggedIn.defaultProps = {
  isAuthenticated: false,
};

export default RenderIfLoggedIn;
