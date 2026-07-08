import React, {
  useState, useRef, useEffect,
} from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {
  SummaryContainer,
  DetailsContainer,
  DropDownLabel,
  TitleDropDown,
  ContainerSubmenu,
  SpanContainer,
  Span,
  Border,
  SubMenuPadding,
} from './subMenuDropDown.style';

const SubMenuDropDown = ({
  Icon,
  isActive,
  titleDropdown,
  options,
  dataCy,
  trackingMixPanel,
  colorSelected,
  margin,
  defaultOpen,
}) => {
  const [isRotated, setIsRotated] = useState(!defaultOpen);
  const detailsRef = useRef(null);

  const handleIconClick = () => {
    setIsRotated(!isRotated);
  };

  useEffect(() => {
    if (detailsRef.current) {
      detailsRef.current.open = defaultOpen;
    }
  }, []);

  const { url } = useRouteMatch();
  const history = useHistory();
  const selected = options && options.some((item) => item.isActive);
  const navTo = (item) => {
    history.replace(`${url}/${item}`);
  };
  return (
    <DetailsContainer ref={detailsRef}>
      <SummaryContainer
        isActive={isActive}
        onClick={handleIconClick}
        selected={selected}
        colorSelected={colorSelected}
        data-cy="DropDownSubmenu"
      >
        <DropDownLabel>
          {Icon
              && (
              <Icon
                color={isActive ? '#505669' : '#7C839A'}
                selected={selected}
              />
              )}
          {' '}
          <TitleDropDown
            isActive={isActive}
            selected={selected}
            margin={margin}
          >
            {titleDropdown}
          </TitleDropDown>
          {isRotated ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
        </DropDownLabel>
      </SummaryContainer>
      {isActive && options && options.map((item) => (
        <SubMenuPadding>
          <ContainerSubmenu
            onClick={() => {
              trackingMixPanel();
              navTo(item.urlRedirect);
            }}
            key={item.isActive}
            isActive={item.isActive}
            data-cy={dataCy}
          >
            <SpanContainer>
              <Border isActive={item.isActive} colorSelected={colorSelected} />
              <Span isActive={item.isActive} colorSelected={colorSelected}>
                {item.title}
              </Span>
            </SpanContainer>
          </ContainerSubmenu>
        </SubMenuPadding>
      ))}
    </DetailsContainer>

  );
};

SubMenuDropDown.propTypes = {
  isActive: PropTypes.bool.isRequired,
  Icon: PropTypes.any,
  titleDropdown: PropTypes.string.isRequired,
  dataCy: PropTypes.string,
  options: PropTypes.array,
  trackingMixPanel: PropTypes.func,
  colorSelected: PropTypes.string,
  margin: PropTypes.string,
  defaultOpen: PropTypes.bool,
};

SubMenuDropDown.defaultProps = {
  Icon: null,
  dataCy: null,
  options: [],
  trackingMixPanel: () => {},
  colorSelected: '#1B2961',
  margin: null,
  defaultOpen: true,
};

export default SubMenuDropDown;
