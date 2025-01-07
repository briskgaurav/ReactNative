import {
    View,
    Text,
    FlatList,
    StyleSheet,
    ActivityIndicator,
    StatusBar,
  } from 'react-native';
  import React, { useEffect, useState } from 'react';
  import axios from 'axios';

  const ListScreen = () => {
    const [todos, setTodos] = useState([]);
    const [page, setPage] = useState(1);
    const [reached, setReached] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetchTodos(page);
    }, [page]);

    const fetchTodos = async (pageNumber) => {
      if (reached) return;
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/todos?_page=${pageNumber}&_per_page=10`
        );
        if (data.length > 0 ) {
          setTodos((prev) => [...prev, ...data]);
        } else {
          setReached(true);
        }
      } catch (error) {
        console.log('error', error);
      } finally {
        setLoading(false);
      }
    };

    const endScroll = () => {
      setPage((prev) => prev + 1);
    };

    return (
      <View style={styles.main}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#D3C0B9'} />
        <Text style={styles.heading}>INFINITE SCROLL</Text>
        {loading ? (
          <ActivityIndicator style={{flex:1}} color={'white'} size={'large'}/>
        ) : (
          <FlatList
            onEndReached={endScroll}
            showsVerticalScrollIndicator={false}
            data={todos}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.flat}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 16,
                      fontWeight: 'bold',
                      marginBottom: 5,
                    }}
                  >
                    S.No- {index + 1}
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 16,
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}
                  >
                    {item.title}
                  </Text>
                </View>
              );
            }}
          />
        )}
      </View>
    );
  };

  const styles = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: '#D3C0B9',
      display: 'flex',
      alignItems: 'center',
      padding: 20,
    },
    heading: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 35,
      marginBottom: 30,
    },
    flat: {
      width: '100%',
      padding: 20,
      marginBottom: 20,
      backgroundColor: '#E5A3A5',
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
    },
  });

  export default ListScreen;
