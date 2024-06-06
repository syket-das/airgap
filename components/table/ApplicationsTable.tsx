import Ionicons from '@expo/vector-icons/Ionicons';
import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { DataTable } from 'react-native-paper';
import { Text } from 'tamagui';

const ApplicationsTable = () => {
  const [page, setPage] = React.useState<number>(0);
  const [numberOfItemsPerPageList] = React.useState([5, 10, 15, 20, 25, 30]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0]
  );

  const [items] = React.useState([
    {
      key: '1',
      formId: '123456789',
      pis: '123456789',
      name: 'John Doe',
      ppt: 'PPT',
      pdf: 'PDF',
      directors: 'Directors',
      lab: 'Lab',
    },
    {
      key: '2',
      formId: '123456789',
      pis: '123456789',
      name: 'John Doe',
      ppt: 'PPT',
      pdf: 'PDF',
      directors: 'Directors',
      lab: 'Lab',
    },
    {
      key: '3',
      formId: '123456789',
      pis: '123456789',
      name: 'John Doe',
      ppt: 'PPT',
      pdf: 'PDF',
      directors: 'Directors',
      lab: 'Lab',
    },
    {
      key: '4',
      formId: '123456789',
      pis: '123456789',
      name: 'John Doe',
      ppt: 'PPT',
      pdf: 'PDF',
      directors: 'Directors',
      lab: 'Lab',
    },
    {
      key: '5',
      formId: '123456789',
      pis: '123456789',
      name: 'John Doe',
      ppt: 'PPT',
      pdf: 'PDF',
      directors: 'Directors',
      lab: 'Lab',
    },
    {
      key: '6',
      formId: '123456789',
      pis: '123456789',
      name: 'John Doe',
      ppt: 'PPT',
      pdf: 'PDF',
      directors: 'Directors',
      lab: 'Lab',
    },
    {
      key: '7',
      formId: '123456789',
      pis: '123456789',
      name: 'John Doe',
      ppt: 'PPT',
      pdf: 'PDF',
      directors: 'Directors',
      lab: 'Lab',
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
        <DataTable.Title>Form Id</DataTable.Title>
        <DataTable.Title>PIS</DataTable.Title>
        <DataTable.Title>Name</DataTable.Title>
        <DataTable.Title>PPT </DataTable.Title>
        <DataTable.Title>PDF</DataTable.Title>
        <DataTable.Title>Directors</DataTable.Title>
        <DataTable.Title>Lab</DataTable.Title>
        <DataTable.Title>Actions</DataTable.Title>
        <DataTable.Title>Schedule</DataTable.Title>
      </DataTable.Header>

      {items.slice(from, to).map((item) => (
        <DataTable.Row key={item.key}>
          <DataTable.Cell>{item.formId}</DataTable.Cell>

          <DataTable.Cell>{item.pis}</DataTable.Cell>
          <DataTable.Cell>{item.name}</DataTable.Cell>
          <DataTable.Cell>
            <TouchableOpacity
              style={{
                padding: 8,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Ionicons name="eye-outline" size={20} />
              <Text>View PPT</Text>
            </TouchableOpacity>
          </DataTable.Cell>
          <DataTable.Cell>
            <TouchableOpacity
              style={{
                padding: 8,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Ionicons name="eye-outline" size={20} />
              <Text>View PDF</Text>
            </TouchableOpacity>
          </DataTable.Cell>
          <DataTable.Cell>{item.directors}</DataTable.Cell>
          <DataTable.Cell>{item.lab}</DataTable.Cell>

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

          <DataTable.Cell>
            <TouchableOpacity style={{ padding: 8 }}>
              <Ionicons name="calendar-outline" size={20} />
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

export default ApplicationsTable;
