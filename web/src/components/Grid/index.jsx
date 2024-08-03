import { Table, Tbody, Td, Th, Thead, Tr } from './styles'

export function Grid({ users }) {
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
      <Tbody>
        {users.map((item, i) => (
          <Tr key={i}>
            <Td></Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}
