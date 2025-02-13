// ListingScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const ListingScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1); // Track the page number for pagination
  const [hasMore, setHasMore] = useState(true); // Check if there are more items to load
  const navigation = useNavigation();

  useEffect(() => {
    fetchItems();
  }, [page]);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
      setData((prevData) => [...prevData, ...response.data]);
      setHasMore(response.data.length > 0);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const handleEndReached = () => {
    if (hasMore && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleItemPress = (item) => {
    // Navigate to Details Screen
    navigation.navigate('Details', { itemId: item.id });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => handleItemPress(item)}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.body.slice(0, 100)}...</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5} // Trigger load more when 50% from the bottom
        ListFooterComponent={loading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
        refreshing={loading}
        onRefresh={() => setPage(1)} // Pull to refresh
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});

export default ListingScreen;
