import { GlobalStyles } from './styles/global'
import styled from 'styled-components'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Form } from './components/Form'
import { Grid } from './components/Grid'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

export function App() {
  const [users, setUsers] = useState([])
  const [onEdit, setOnEdit] = useState(null)

  async function getUsers() {
    try {
      const res = await axios.get('http://localhost:8800')
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)))
    } catch (error) {
      toast.error(error)
    }
  }
  useEffect(() => {
    getUsers()
  }, [setUsers])
  return (
    <>
      <GlobalStyles />
      <ToastContainer autoClose={3000} position={'bottom-left'} />
      <Container>
        <h2>Usuários</h2>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
        <Grid users={users} setUsers={setUsers} setOnEdit={setOnEdit} />
      </Container>
    </>
  )
}
