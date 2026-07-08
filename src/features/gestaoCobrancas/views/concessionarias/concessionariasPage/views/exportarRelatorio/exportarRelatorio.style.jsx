import styled from 'styled-components';
import Button from 'common/controls/button';

export const ExportarRelatorioContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ExportarRelatorioButton = styled(Button)`
  background-color: transparent !important;
  border: 1px solid #3049b0 !important;
  height: 40px;
  width: 170px;
  .common__btn__content {
    color: #3049b0 !important;
  }
  &:hover {
    background-color: rgba(0, 95, 204, 0.1) !important;
  }
`;
