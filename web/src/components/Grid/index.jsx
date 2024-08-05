import { Table, Tbody, Td, Th, Thead, Tr } from './styles'
import { FaTrash, FaEdit } from 'react-icons/fa'
import { toast } from 'react-toastify'
import axios from 'axios'

export function Grid({ users, setUsers, setOnEdit }) {
  function handleEdit(item) {
    setOnEdit(item)
  }
  async function handleDelete(id) {
    await axios
      .delete('http://localhost:8800/' + id)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.id !== id)

        setUsers(newArray)
        toast.success(data)
      })
      .catch(({ data }) => toast.error(data))
    setOnEdit(null)
  }
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>E-Mail</Th>
          <Th onlyWeb>Telefone</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((item, i) => (
          <Tr key={i}>
            <Td width="30%">{item.nome}</Td>
            <Td width="30%">{item.email}</Td>
            <Td width="20%" onlyWeb>
              {item.fone}
            </Td>
            <Td alignCenter width="5%">
              <FaEdit onClick={() => handleEdit(item)} />
            </Td>
            <Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item.id)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}
