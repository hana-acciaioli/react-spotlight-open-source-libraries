import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css';
import userData from '../../users.json';

// const dataList = [
//   { id: 1, name: 'a', email: 'a@email.com', avartar: '...' },
//   { id: 2, name: 'b', email: 'b@email.com', avartar: '...' },
//   { id: 3, name: 'c', email: 'c@email.com', avartar: '...' },
// ];

const ImageCell = ({ rowData, dataKey, ...rest }) => (
  <Cell {...rest}>
    <img src={rowData[dataKey]} width="50" />
  </Cell>
);

const TableComponent = () => (
  <Table data={userData} height={1000}>
    <Column width={100} sortable fixed resizable>
      <HeaderCell>ID</HeaderCell>
      <Cell dataKey="id" />
    </Column>

    <Column width={100} sortable resizable>
      <HeaderCell>Name</HeaderCell>
      <Cell dataKey="first_name" />
    </Column>

    <Column width={100} sortable resizable>
      <HeaderCell>Email</HeaderCell>
      <Cell>
        {(rowData, rowIndex) => {
          return <a href={`mailto:${rowData.email}`}>{rowData.email}</a>;
        }}
      </Cell>
    </Column>

    <Column width={100} resizable>
      <HeaderCell>Avatar</HeaderCell>
      <ImageCell dataKey="avartar" />
    </Column>
  </Table>
);
export default TableComponent;
