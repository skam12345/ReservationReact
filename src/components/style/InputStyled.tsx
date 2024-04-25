import styled from 'styled-components';

export const InputContainer = styled.div<{
  width?: number;
  height?: number;
}>`
  width: ${props => (props.width ? props.width : 33.25)}%;
  height: ${props => (props.height ? props.height : 100)}%;
  display: flex;
  padding: 0px 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const InputTag = styled.input<{
  borderRadius?: number;
  fontSize?: number;
  border?: string;
  fontWeight?: number;
  fontColor?: string;
}>`
  width: 100%;
  height: 100%;
  border-radius: ${props => (props.borderRadius ? props.borderRadius : 20)}px;
  border: ${props => (props.border ? props.border : '1px solid #A8A29E')};
  padding: 0px 8px;
  &::placeholder {
    font-size: ${props => (props.fontSize ? props.fontSize : 18)}px;
    font-weight: ${props => (props.fontWeight ? props.fontWeight : 600)};
    color: ${props => (props.fontColor ? props.fontColor : '#A8A29E')};
  }
  color: black;
  padding-left: 20px;
`;

export const InputEssentialDesign = styled.p<{
  fontSize?: number;
  fontWeight?: number;
  placeholderText: string;
}>`
  width: 10px;
  height: 10px;
  position: absolute;
  margin-left: ${props => -26}%;
  margin-top: ${-10 * 0.8}px;
  font-size: ${props => (props.fontSize ? props.fontSize : 18)}px;
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 600)};
  color: red;
`;
