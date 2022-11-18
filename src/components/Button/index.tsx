import { ButtonHTMLAttributes } from 'react';
import { ButtonContainer } from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  variant?: string
}

export function Button({variant = "primary", ...props}: Props) {
  return (
    <ButtonContainer {...props} variant={variant}>{props.title}</ButtonContainer>
  )
}
