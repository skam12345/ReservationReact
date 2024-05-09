import React, { useState } from 'react';
import {
  InputContainer,
  InputEssentialDesign,
  InputTag,
} from './style/InputStyled';

interface inputProps {
  width?: number;
  height?: number;
  borderRadius?: number;
  border?: string;
  placeholderText: string;
  fontSize?: number;
  fontWeight?: number;
  fontColor?: string;
  essential: boolean;
  setData: Function;
}
const InputComponent = ({
  width,
  height,
  borderRadius,
  border,
  placeholderText,
  fontSize,
  fontWeight,
  fontColor,
  essential,
  setData,
}: inputProps) => {
  const [viewUpperStroper, setViewUpperStroper] = useState(true);
  const isInputText = (event: { target: { value: string } }) => {
    if (event.target.value !== '') {
      setViewUpperStroper(false);
    } else {
      setViewUpperStroper(true);
    }
    setData(event.target.value.toString());
  };
  return (
    <InputContainer width={width} height={height}>
      <InputTag
        borderRadius={borderRadius}
        border={border}
        fontSize={fontSize}
        fontWeight={fontWeight}
        fontColor={fontColor}
        placeholder={placeholderText}
        onChange={isInputText}
      />
      {essential && viewUpperStroper ? (
        <InputEssentialDesign
          fontSize={fontSize}
          fontWeight={fontWeight}
          placeholderText={placeholderText}
        >
          *
        </InputEssentialDesign>
      ) : null}
    </InputContainer>
  );
};

export default InputComponent;
