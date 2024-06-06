import Ionicons from '@expo/vector-icons/Ionicons';
import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { DataTable } from 'react-native-paper';

const BoardMembersTable = () => {
  const [page, setPage] = React.useState<number>(0);
  const [numberOfItemsPerPageList] = React.useState([5, 10, 15, 20, 25, 30]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0]
  );

  const [items] = React.useState([
    {
      key: '1',
      pis: '123456789',
      memberName: 'John Doe',
      designation: 'CEO',
      location: 'New York',
      details: 'Details',
      actions: 'Actions',
    },
    {
      key: '2',
      pis: '123456789',
      memberName: 'John Doe',
      designation: 'CEO',
      location: 'New York',
      details: 'Details',
      actions: 'Actions',
    },
    {
      key: '3',
      pis: '123456789',
      memberName: 'John Doe',
      designation: 'CEO',
      location: 'New York',
      details: 'Details',
      actions: 'Actions',
    },
    {
      key: '4',
      pis: '123456789',
      memberName: 'John Doe',
      designation: 'CEO',
      location: 'New York',
      details: 'Details',
      actions: 'Actions',
    },
    {
      key: '5',
      pis: '123456789',
      memberName: 'John Doe',
      designation: 'CEO',
      location: 'New York',
      details: 'Details',
      actions: 'Actions',
    },
    {
      key: '6',
      pis: '123456789',
      memberName: 'John Doe',
      designation: 'CEO',
      location: 'New York',
      details: 'Details',
      actions: 'Actions',
    },
    {
      key: '7',
      pis: '123456789',
      memberName: 'John Doe',
      designation: 'CEO',
      location: 'New York',
      details: 'Details',
      actions: 'Actions',
    },
    {
      key: '8',
      pis: '123456789',
      memberName: 'John Doe',
      designation: 'CEO',
      location: 'New York',
      details: 'Details',
      actions: 'Actions',
    },
    {
      key: '9',
      pis: '123456789',
      memberName: 'John Doe',
      designation: 'CEO',
      location: 'New York',
      details: 'Details',
      actions: 'Actions',
    },
  ]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>PIS</DataTable.Title>
        <DataTable.Title>Member Name</DataTable.Title>
        <DataTable.Title>Designation </DataTable.Title>
        <DataTable.Title>Location</DataTable.Title>
        <DataTable.Title>Details</DataTable.Title>
        <DataTable.Title>Actions</DataTable.Title>
      </DataTable.Header>

      {items.slice(from, to).map((item) => (
        <DataTable.Row key={item.key}>
          <DataTable.Cell>{item.pis}</DataTable.Cell>
          <DataTable.Cell>{item.memberName}</DataTable.Cell>
          <DataTable.Cell>{item.designation}</DataTable.Cell>
          <DataTable.Cell>{item.location}</DataTable.Cell>
          <DataTable.Cell>
            <TouchableOpacity style={{ padding: 8 }}>
              <Ionicons name="eye-outline" size={20} />
            </TouchableOpacity>
          </DataTable.Cell>
          <DataTable.Cell
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              columnGap: 8,
              flex: 1,
            }}
          >
            <TouchableOpacity style={{ padding: 8 }}>
              <Ionicons name="create-outline" size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 8 }}>
              <Ionicons name="trash-bin-outline" color={'red'} size={20} />
            </TouchableOpacity>
          </DataTable.Cell>
        </DataTable.Row>
      ))}

      <DataTable.Pagination
        page={page}
        numberOfPages={Math.ceil(items.length / itemsPerPage)}
        onPageChange={(page) => setPage(page)}
        label={`${from + 1}-${to} of ${items.length}`}
        numberOfItemsPerPageList={numberOfItemsPerPageList}
        numberOfItemsPerPage={itemsPerPage}
        onItemsPerPageChange={onItemsPerPageChange}
        showFastPaginationControls
        selectPageDropdownLabel={'Rows per page'}
      />
    </DataTable>
  );
};

export default BoardMembersTable;
