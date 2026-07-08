import styled from 'styled-components';
import Button from 'common/controls/button';

export const Row = styled.div`
  display: flex;
  align-items: end;
  gap: 16px;
`;

export const ClearButton = styled(Button)`
  width: 133px;
  height: 40px;
`;

export const ButtonIcon = styled.div`
  width: 15px;
  height: 15px;
  margin-right: 8px;
  display: flex;
  align-items: center;
`;

export const ExportButton = styled(Button)`
width: 177px;
height: 40px;
`;

export const StatusContainer = styled.div`
  width: 232px;
`;
