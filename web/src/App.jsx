import { GlobalStyles } from './styles/global'
import styled from 'styled-components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Form } from './components/Form'
import { Grid } from './components/Grid'
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
  return (
    <>
      <Container>
        <h1>Usuários</h1>
        <Form />
        <Grid />
      </Container>
      <ToastContainer autoClose={2000} position={'bottom-left'} />
      <GlobalStyles />
    </>
  )
}
