import React from 'react';
import { Button } from 'antd';

const CustomButton = ({ children, ...rest }) => (
  <Button {...rest}>{children}</Button>
);

export default CustomButton;
