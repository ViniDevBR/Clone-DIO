//HOOK FORM
import { InputHTMLAttributes, ReactNode } from "react";
//REACT HOOK FORM
import { Control, Controller, FieldValues } from "react-hook-form";
//STYLED-COMPONENTS
import {InputContainer, InputText, IconContainer } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  leftIcon: ReactNode
  control: Control<FieldValues, any>
  name: string
}

// 

export function Input({...props}: InputProps) {

  return (
    <InputContainer>
      {props.leftIcon ? (<IconContainer>{props.leftIcon}</IconContainer>) : null}
      
      <Controller
        name={props.name}
        control={props.control}
        render={({ field }) =>  <InputText {...field} {...props} />}
      />
    </InputContainer>
  )
}