import React from 'react';
import PropTypes from 'prop-types';
import HTMLReactParser from 'html-react-parser';
import List, { ListContent } from 'common/layout/list';
import { AuthStorage } from 'modules/auth/authStorage';
import CloseIcon from 'assets/icons/close';
import { formatDate, formatDateExtend } from 'utils/format';
import {
  Content,
  ModalContainer,
  Span,
  SpanContainer,
  TitleContainer,
  TitleEllipsis,
} from './resgatePrevForm.style';

const ResgatePrevForm = ({
  resgate,
  form,
  startDate,
  endDate,
}) => (
  <List>
    <ListContent>
      <Content>
        <Span>Confira os dados do seu alerta e faça a publicação:</Span>
        <SpanContainer>
          <Span fontWeight="500" color="#404154">Período de vigência:</Span>
          <Span>
            {' '}
            {formatDateExtend(startDate)}
            {' - '}
            {formatDateExtend(endDate)}
          </Span>
        </SpanContainer>
        <SpanContainer>
          <Span fontWeight="500" color="#404154">Código do usuário:</Span>
          <Span>
            {' '}
            {AuthStorage.getCurrentUser().name}
          </Span>
        </SpanContainer>
        <SpanContainer>
          <Span fontWeight="500" color="#404154">Recebimento do arquivo:</Span>
          <Span>
            {' '}
            {formatDate(resgate?.dataRecebimentoArquivo, 'DD/MM/YYYY - HH:mm')}
          </Span>
        </SpanContainer>
        <Span fontWeight="500" color="#404154">Pré-visualização:</Span>
        <ModalContainer>
          <TitleContainer>
            <TitleEllipsis
              fontWeight="500"
              color="#404154"
              fontSize="16px"
              title={form.titulo}
            >
              {form.titulo}
            </TitleEllipsis>
            <CloseIcon />
          </TitleContainer>
          <Span
            fontSize="16px"
            height="200px"
          >
            {HTMLReactParser(form.textoMensagem)}
          </Span>
        </ModalContainer>
      </Content>
    </ListContent>
  </List>
);

ResgatePrevForm.propTypes = {
  resgate: PropTypes.shape({
    dataRecebimentoArquivo: PropTypes.string,
  }),
  form: PropTypes.shape({
    titulo: PropTypes.string,
    textoMensagem: PropTypes.string,
  }),
  startDate: PropTypes.string,
  endDate: PropTypes.string,
};

ResgatePrevForm.defaultProps = {
  resgate: PropTypes.shape({
    dataRecebimentoArquivo: '',
  }),
  form: PropTypes.shape({
    titulo: '',
    textoMensagem: '',
  }),
  startDate: '',
  endDate: '',
};

export default ResgatePrevForm;
