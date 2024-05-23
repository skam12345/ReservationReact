import styled from 'styled-components';

export const FieldLegendFieldSet = styled.fieldset<{
  width?: number;
  height?: number;
}>`
  width: ${props => (props.width ? props.width : '27.25')}%;
  height: ${props => (props.height ? props.height : '15')}%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FieldLegend = styled.legend`
  font-size: 15px;
  font-weight: 500;
  color: #7c7c7c;
`;

export const FieldEssentialBold = styled.b`
  margin-left: 2.5px;
  font-size: 15px;
  font-weight: 500;
  color: red;
`;
