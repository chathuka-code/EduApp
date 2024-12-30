import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../redux/slices/clickSlice';
import axios from 'axios';

const HomeScreen = ({ route }) => {
  const { username } = route.params;
  const [items, setItems] = useState([]);
  const count = useSelector((state) => state.clicks.count);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setItems(response.data.slice(0, 10)))
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {username}</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => dispatch(increment())}
          >
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDescription}>{item.body}</Text>
          </TouchableOpacity>
        )}
      />
      <View style={styles.floatingButton}>
        <Text style={styles.buttonText}>{count}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    backgroundColor: '#f5f5f5' 
  },
  title: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    marginBottom: 16 
  },
  card: { 
    backgroundColor: '#fff', 
    padding: 16, 
    marginBottom: 16, 
    borderRadius: 8, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3 
  },
  cardTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 8 
  },
  cardDescription: { 
    fontSize: 14, 
    color: '#555' 
  },
  floatingButton: { 
    position: 'absolute', 
    bottom: 16, 
    right: 16, 
    backgroundColor: '#007bff', 
    width: 60, 
    height: 60, 
    borderRadius: 30, 
    justifyContent: 'center', 
    alignItems: 'center', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5 
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 20, 
    fontWeight: 'bold' 
  },
});

export default HomeScreen;
