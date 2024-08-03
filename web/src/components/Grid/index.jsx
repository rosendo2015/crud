import { Table, Th, Thead, Tr } from './styles'

export function Grid() {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>E-Mail</Th>
          <Th onlyWeb>Fone</Th>
          <Th></Th>
        </Tr>
      </Thead>
    </Table>
  )
}
