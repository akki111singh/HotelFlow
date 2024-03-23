import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import HotelListItem from '../components/HotelListItem';
import { getAllHotelListPage } from '../requests/api';
import styles from '../styles/styles';

const HotelsListScreen = () => {
    const route = useRoute();
    const { hotelList: initialHotelList } = route.params;
    const [hotelList, setHotelList] = useState(initialHotelList);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        //if from deeplining we get location in params
        if (route.params?.location) {
            fetchHotelList(route.params.location);
        }
    }, [route.params?.location]);

    const fetchHotelList = async (location) => {
        try {
            setLoading(true);
            const hotels = await getAllHotelListPage(location);
            setLoading(false);
            setHotelList(hotels);
        } catch (error) {
            console.error("Error fetching hotel list:", error);
        }
    };

    if (!hotelList || !Array.isArray(hotelList.hotels) || hotelList.hotels.length === 0) {
        return (
            <View style={styles.hotelListContainer}>
                <Text>No hotels found</Text>
            </View>
        );
    }

    return (
        <View style={styles.hotelListContainer}>
            {loading ? (
                <Text style={{ marginLeft: 10 }}>Loading...</Text>
            ) : (
                <FlatList
                    data={hotelList.hotels}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.hotelItemContainer}>
                            <HotelListItem hotel={item} />
                        </View>
                    )}
                />)}
        </View>
    );
}

export default HotelsListScreen;
