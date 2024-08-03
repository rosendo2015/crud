import { useRef } from 'react'
import { Button, FormContainer, Input, InputArea, Label } from './styles'

export function Form({ onEdit }) {
  const ref = useRef()
  return (
    <FormContainer ref={ref}>
      <InputArea>
        <Label htmlFor="nome">Nome</Label>
        <Input id="nome" name="nome" type="text" />
      </InputArea>
      <InputArea>
        <Label htmlFor="email">E-Mail</Label>
        <Input id="email" name="email" type="email" />
      </InputArea>
      <InputArea>
        <Label htmlFor="fone">E-Mail</Label>
        <Input id="fone" name="fone" type="tel" />
      </InputArea>
      <InputArea>
        <Label htmlFor="data_nascimento">Data de Nasc.</Label>
        <Input id="data_nascimento" name="data_nascimento" type="date" />
      </InputArea>
      <Button type="submit">Salvar</Button>
    </FormContainer>
  )
}
