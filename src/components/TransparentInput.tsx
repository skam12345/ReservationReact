import React from 'react';
import { TransparentInputComponent } from './style/TransparentStyled';

interface TransparentProps {
  contentValue: string;
  setContentValue: React.Dispatch<React.SetStateAction<string>>;
}

const TransparentInput = ({
  contentValue,
  setContentValue,
}: TransparentProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContentValue(e.target.value);
  };
  return (
    <TransparentInputComponent
      type="text"
      value={contentValue}
      onChange={e => onChange(e)}
    />
  );
};

export default TransparentInput;
