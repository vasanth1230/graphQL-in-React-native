import React from 'react';
import {SafeAreaView, ScrollView, View, Text, FlatList} from 'react-native';
import {useQuery} from '@apollo/client';
import gql from 'graphql-tag';

const CHAPTERS_QUERY = gql`
  query Chapters {
    chapters {
      id
      number
      title
    }
  }
`;

const Demo = () => {
  const {data, loading} = useQuery(CHAPTERS_QUERY);
  console.log('data', data);
  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View
            style={{
              height: 100,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 25,
                fontWeight: 'bold',
              }}>
              GraphQL Query Data
            </Text>
          </View>
          <View
            style={{
              flex: 1,
            }}>
            <FlatList
              data={data.chapters}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({item}) => (
                <View
                  style={{
                    height: 50,
                    margin: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#e9e9e9',
                    borderRadius: 5,
                  }}>
                  <Text style={{fontSize: 15}}>{item.title}</Text>
                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Demo;
