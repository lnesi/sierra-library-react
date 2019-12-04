//@flow
import React from 'react';
import PropTypes from 'prop-types';

type ButtonType =
  | 'primary'
  | 'secondary'
  | 'green'
  | 'red'
  | 'outlined'
  | 'transparent';

type ButtonSize = 'big' | 'small';

export type ButtonProps = {
  mobileFull: Boolean,
  label: String,
  size: ButtonSize,
  type: ButtonType
};

export default function Button(props: ButtonProps): React.ReactNode {
  const { type, label, size, mobileFull } = props;
  const sizeClassName = size ? 'button--' + size : '';
  const typeClassName = type ? 'button--' + type : '';
  const mobileFullClassName = mobileFull ? 'button--mobileFull' : '';
  return (
    <div
      className={`button  ${typeClassName} ${sizeClassName} ${mobileFullClassName}`}
    >
      {label}
    </div>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  mobileFull: PropTypes.bool,
  size: PropTypes.oneOf(['big', 'small']),
  type: PropTypes.oneOf([
    'primary',
    'secondary',
    'green',
    'red',
    'outlined',
    'transparent'
  ])
};
