import React from 'react';
import { StyleSheet, Text, View, FlatList, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/styles';

const SearchResults = ({ data, input, setInput }) => {
    const navigation = useNavigation();
    const navigateToHotels = (item) => {
        setInput(item.city);
        navigation.navigate('Hotels', {
            input: item.area
        });
    };

    return (
        <View style={{ padding: 10 }}>
            <FlatList
                data={data.cities}
                keyboardShouldPersistTaps='always' 
                renderItem={({ item }) => {
                    return (
                        <Pressable
                            onPress={() => navigateToHotels(item)}
                            style={styles.searchResultitemContainer}>
                            <View style={styles.searchResulttextContainer}>
                                <Text style={styles.searchResultareaText}>{item.area}</Text>
                                <Text style={styles.searchResultcityText}>{item.city}</Text>
                                <Text style={styles.searchResulstateText}>{item.state}</Text>
                            </View>
                        </Pressable>
                    );
                }
                }
            />
        </View>
    );
};

export default SearchResults;
