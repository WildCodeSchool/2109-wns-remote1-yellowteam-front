/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Button as BaseButton, ButtonProps } from '@chakra-ui/react';

export type IButton = ButtonProps;

export const Button: React.FC<IButton> = ({ ...rest }) => (
  <div>
    <BaseButton {...rest} />
  </div>
);
