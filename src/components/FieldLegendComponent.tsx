import React from 'react';
import {
  FieldEssentialBold,
  FieldLegend,
  FieldLegendFieldSet,
} from './style/FieldLegendStyled';

interface FieldProps {
  width: number;
  height: number;
  legendTitle: String;
  children: React.ReactNode;
}

const FieldLegendComponent = ({
  width,
  height,
  legendTitle,
  children,
}: FieldProps) => {
  return (
    <FieldLegendFieldSet width={width} height={height}>
      <FieldLegend>
        {legendTitle}
        <FieldEssentialBold>*</FieldEssentialBold>
      </FieldLegend>
      {children}
    </FieldLegendFieldSet>
  );
};

export default FieldLegendComponent;
