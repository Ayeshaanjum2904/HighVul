import React, {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import { VariableSizeList } from 'react-window';

const OuterElementContext = createContext({});

const OuterElement = (props, ref) => {
  const outerProps = useContext(OuterElementContext);
  return React.createElement('div', { ref, ...props, ...outerProps });
};
const OuterElementType = forwardRef(OuterElement);

const renderRow = ({ data, index, style }) => React.cloneElement(data[index], { style });
renderRow.propTypes = {
  data: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

const useResetCache = (itemCount) => {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current != null) {
      ref.current.resetAfterIndex(0, true);
    }
  }, [itemCount]);
  return ref;
};

export const createVirtualizedListbox = ({ itemHeight, maxVisibleItems }) => {
  const Listbox = ({ children, ...other }, ref) => {
    const itemData = React.Children.toArray(children);
    const itemCount = itemData.length;
    const listHeight = Math.min(itemCount, maxVisibleItems) * itemHeight;
    const gridRef = useResetCache(itemCount);

    return (
      <div ref={ref}>
        <OuterElementContext.Provider value={other}>
          <VariableSizeList
            itemData={itemData}
            height={listHeight}
            width="100%"
            ref={gridRef}
            outerElementType={OuterElementType}
            innerElementType="ul"
            itemSize={() => itemHeight}
            itemCount={itemCount}
          >
            {renderRow}
          </VariableSizeList>
        </OuterElementContext.Provider>
      </div>
    );
  };

  Listbox.propTypes = {
    children: PropTypes.node,
  };

  Listbox.defaultProps = {
    children: null,
  };

  return forwardRef(Listbox);
};
