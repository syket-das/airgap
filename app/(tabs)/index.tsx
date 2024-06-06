import { Image, StyleSheet, Platform, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/Header';
import { Card, H2, H3, H5, H6, Paragraph, ScrollView, View } from 'tamagui';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '@/constants/Colors';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />

        <H3 style={styles.title}>Dashboard</H3>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}
        >
          <Card
            size="$6"
            bordered
            animation="bouncy"
            width={250}
            scale={0.9}
            hoverStyle={{ scale: 0.925 }}
            pressStyle={{ scale: 0.875 }}
            style={{ backgroundColor: 'rgba(210, 65, 110, 0.1)' }}
          >
            <Card.Header padded>
              <Ionicons
                name={'people'}
                size={30}
                color={'rgba(210, 65, 110, 1)'}
              />
              <H2 color={'rgba(210, 65, 110, 1)'}>1,200</H2>
              <Paragraph theme="alt2" color={'rgba(210, 65, 110, 0.5)'}>
                No. Of Candidates
              </Paragraph>
            </Card.Header>
          </Card>
          <Card
            size="$6"
            bordered
            animation="bouncy"
            width={250}
            scale={0.9}
            hoverStyle={{ scale: 0.925 }}
            pressStyle={{ scale: 0.875 }}
            style={{ backgroundColor: 'rgba(13, 177, 173, 0.1)' }}
          >
            <Card.Header padded>
              <Ionicons
                name={'id-card-outline'}
                size={30}
                color={'rgba(13, 177, 173, 1)'}
              />
              <H2 color={'rgba(13, 177, 173, 1)'}>1,160</H2>
              <Paragraph theme="alt2" color={'rgba(13, 177, 173, 0.5)'}>
                No. Of Applications
              </Paragraph>
            </Card.Header>
          </Card>

          <Card
            size="$6"
            bordered
            animation="bouncy"
            width={250}
            scale={0.9}
            hoverStyle={{ scale: 0.925 }}
            pressStyle={{ scale: 0.875 }}
            style={{ backgroundColor: 'rgba(112, 66, 201, 0.1)' }}
          >
            <Card.Header padded>
              <Ionicons
                name={'people-circle-outline'}
                size={30}
                color={'rgba(112, 66, 201, 1)'}
              />
              <H2 color={'rgba(112, 66, 201, 1)'}>110</H2>
              <Paragraph theme="alt2" color={'rgba(112, 66, 201, 0.5)'}>
                No. Of Interviewers
              </Paragraph>
            </Card.Header>
          </Card>

          <Card
            size="$6"
            bordered
            animation="bouncy"
            width={250}
            scale={0.9}
            hoverStyle={{ scale: 0.925 }}
            pressStyle={{ scale: 0.875 }}
            style={{ backgroundColor: '#cffafe' }}
          >
            <Card.Header padded>
              <Ionicons
                name={'easel-outline'}
                size={30}
                color={'rgba(25, 123, 210, 1)'}
              />
              <H2 color={'rgba(25, 123, 210, 1)'}>110</H2>
              <Paragraph theme="alt2" color={'rgba(25, 123, 210, 0.5)'}>
                No. Of Board Rooms
              </Paragraph>
            </Card.Header>
          </Card>
        </View>

        <View>
          <H3 style={styles.title}>Upload Module</H3>
          <View
            style={{
              justifyContent: 'space-between',
              marginTop: 20,
              flexDirection: 'row',
              columnGap: 100,
            }}
          >
            <View
              style={{
                flex: 1,
                rowGap: 20,
              }}
            >
              <H5>Upload PPT</H5>
              <TouchableOpacity
                style={{
                  borderWidth: 1,

                  borderColor: Colors.light.tabIconDefault,
                  height: 200,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 20,
                }}
              >
                <Ionicons
                  name="document-text"
                  size={50}
                  color={Colors.light.tabIconDefault}
                />
                <H3>Click to Upload</H3>
                <H6 color={Colors.light.tabIconDefault}>
                  Upload a presentation
                </H6>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 1,
                rowGap: 20,
              }}
            >
              <H5>Upload Using Bluetooth</H5>
              <TouchableOpacity
                style={{
                  borderWidth: 1,

                  borderColor: Colors.light.tabIconDefault,
                  height: 200,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 20,
                }}
              >
                <Ionicons
                  name="bluetooth"
                  size={50}
                  color={Colors.light.tabIconDefault}
                />
                <H3>Click to Connect</H3>
                <H6 color={Colors.light.tabIconDefault}>Connect to a device</H6>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

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
