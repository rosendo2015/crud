import { useEffect, useRef } from 'react'
import { Button, FormContainer, Input, InputArea, Label } from './styles'
import { toast } from 'react-toastify'
import axios from 'axios'

export function Form({ onEdit, setOnEdit, getUser }) {
  const ref = useRef()

  useEffect(() => {
    if (onEdit) {
      const user = ref.current

      user.nome.value = onEdit.nome
      user.email.value = onEdit.email
      user.fone.value = onEdit.fone
      user.data_nascimento.value = onEdit.data_nascimento
    }
  }, [onEdit])

  async function handleSubmit(e) {
    e.preventDefault()
    const user = ref.current

    if (
      !user.nome.value ||
      !user.email.value ||
      !user.fone.value ||
      !user.data_nascimento.value
    ) {
      return toast.warn('Preencha todos os campos')
    }
    if (onEdit) {
      await axios
        .put('http://localhost:8800' + onEdit.id, {
          nome: user.nome.value,
          email: user.email.value,
          fone: user.fone.value,
          data_nascimento: user.data_nascimento.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data))
    } else {
      await axios
        .post('http://localhost:8800', {
          nome: user.nome.value,
          email: user.email.value,
          fone: user.fone.value,
          data_nascimento: user.data_nascimento.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data))
    }
    ;(user.nome.value = ''),
      (user.email.value = ''),
      (user.fone.value = ''),
      (user.data_nascimento.value = ''),
      setOnEdit(null)
    getUser()
  }

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label htmlFor="nome">Nome</Label>
        <Input id="nome" name="nome" type="text" />
      </InputArea>
      <InputArea>
        <Label htmlFor="email">E-Mail</Label>
        <Input id="email" name="email" type="email" />
      </InputArea>
      <InputArea>
        <Label htmlFor="fone">Celular</Label>
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
