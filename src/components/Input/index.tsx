import React, {
  useCallback,
  useRef,
  useState,
  InputHTMLAttributes,
  useEffect,
} from 'react';

import { IconBaseProps } from 'react-icons';

import { useField } from '@unform/core';
import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  disabledCursorPointer?: boolean;
  toggleVisiblePassword?(): void;
}

const Input: React.FC<IInputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, registerField, defaultValue } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    /* if (inputRef.current?.value) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    } */
    /* Caso seja verdadeiro, coloca true */
    /* Caso seja falso, coloca false */
    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
    </Container>
  );
};

export default Input;
