// DetailsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { itemId } = route.params;  // Get item ID passed from ListingScreen

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details for Item ID: {itemId}</Text>
      {/* Here you can add more details related to the item */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default DetailsScreen;
