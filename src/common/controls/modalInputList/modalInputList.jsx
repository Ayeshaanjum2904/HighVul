import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import SvgX from 'assets/icons/x';
import { Divider, Modal } from '@mui/material';
import _ from 'lodash';
import AlertFilledIcon from 'assets/icons/alert-filled';
import colors from 'assets/styles/colors';
import InputCheckClear from '../inputsComponents/inputCheckClear/inputCheckClear';
import ModalInputListStyles from './modalInputList.style';
import ItemsList from '../itemsList/itemsList';
import NewButton from '../newButton/newButton';

const ModalInputList = ({
  open, handleClose, title, inputName, itemsListName, actionButtonText, onAction,
  items, setItems,
}) => {
  const [value, setValue] = useState(null);

  const buttonAlert = useRef(null);

  useEffect(() => {
    buttonAlert?.current?.closePopper();
  }, [value]);

  const onCloseModal = () => {
    handleClose();
    setItems([]);
    buttonAlert?.current?.closePopper();
  };

  const handleCheck = (item) => {
    setItems([...items, item]);
  };

  const handleCancel = () => {
    setItems([]);
  };

  const handleRemove = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const handleAction = () => {
    onAction(items);
    onCloseModal();
  };

  const renderMessageAlert = () => {
    if (!value) {
      return `Favor inserir um ${inputName.toLowerCase()}`;
    }
    return `É preciso clicar em salvar (\u2714) para inserir um ${inputName.toLowerCase()}`;
  };

  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      keepMounted
    >
      <ModalInputListStyles>
        <div className="modal-content_header">
          <h2>{title}</h2>
          <div className="modal-content_header_remove-icon">
            <SvgX onClick={onCloseModal} />
          </div>
        </div>
        <Divider />
        <span className="modal-content_subtitle">Insira um ou mais novos relacionamentos no campo abaixo:</span>
        <div className="modal-content_body">
          <InputCheckClear
            setValue={setValue}
            label={inputName}
            onCheck={handleCheck}
            onCancel={handleCancel}
            placeholder={`Digite o ${inputName.toLowerCase()}`} // colocar letra minuscula
          />
          {items?.length > 0 && (
          <ItemsList
            labelValue={itemsListName}
            items={items}
            onRemove={handleRemove}
          />
          )}
        </div>
        <Divider sx={{ marginTop: 'auto', marginBottom: '12px' }} />
        <div className="modal-content_footer">
          <NewButton
            className="dark_gray_border"
            onClick={onCloseModal}
          >
            <span>Cancelar</span>
          </NewButton>
          <NewButton
            className="gray"
            preventOnClick={!value || _.isEmpty(items)}
            onClick={handleAction}
            alertCardTitle={renderMessageAlert()}
            icone={<AlertFilledIcon width="8" height="8" />}
            widthCard={!value ? '260px' : '414px'}
            colorBase={colors.error_color_400}
            ref={buttonAlert}
          >
            <span>{actionButtonText}</span>
          </NewButton>
        </div>
      </ModalInputListStyles>
    </Modal>

  );
};

ModalInputList.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  title: PropTypes.string,
  inputName: PropTypes.string,
  itemsListName: PropTypes.string,
  actionButtonText: PropTypes.string,
  items: PropTypes.array,
  onAction: PropTypes.func,
  setItems: PropTypes.func,
};

ModalInputList.defaultProps = {
  open: false,
  handleClose: () => { },
  title: '',
  inputName: '',
  itemsListName: '',
  actionButtonText: '',
  items: [],
  onAction: () => { },
  setItems: () => { },
};

export default ModalInputList;
