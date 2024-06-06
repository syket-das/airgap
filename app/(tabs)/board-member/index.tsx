import { View, Text, StyleSheet } from 'react-native';

import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, H3, Input, ScrollView } from 'tamagui';
import Header from '@/components/Header';
import Ionicons from '@expo/vector-icons/Ionicons';
import BoardMembersTable from '@/components/table/BoardMembersTable';

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />

        <H3 style={styles.title}>Board Members</H3>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            alignItems: 'center',
          }}
        >
          <Input
            maxWidth={400}
            flex={1}
            size={'$5'}
            placeholder="Enter name.."
          />

          <View
            style={{
              flexDirection: 'row',
              columnGap: 16,
              alignItems: 'center',
            }}
          >
            <Button size={'$5'} variant="outlined">
              Add
            </Button>
            <Button
              style={{
                backgroundColor: 'rgba(65, 83, 239, 1)',
                color: 'white',
                padding: 10,
              }}
              alignSelf="center"
              icon={<Ionicons name="download-outline" size={20} />}
              size="$5"
            >
              Download
            </Button>
            <Button
              variant="outlined"
              style={{
                padding: 10,
              }}
              alignSelf="center"
              icon={<Ionicons name="cloud-upload-outline" size={20} />}
              size="$5"
            >
              Upload
            </Button>
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
          }}
        >
          <BoardMembersTable />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
