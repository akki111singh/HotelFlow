import React, { useState } from 'react';
import { Pressable, Text , Alert} from 'react-native';
import { Stack } from 'native-base';
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import DatePicker from '../components/DatePicker';
import styles from '../styles/styles';
import { getAllHotelListPage } from '../requests/api';
import { Button } from 'native-base';

const HomeScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [searchInput, setSearchInput] = useState('');

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate);
    };

    const handleSearch = async () => {
        if(!route?.params){
            Alert.alert("Error", "Please enter all the details")
            return
        }
        try {
            const hotelList = await getAllHotelListPage(route?.params.input);
            navigation.navigate("HotelsList", { hotelList });
        } catch (error) {
            console.error("Error fetching hotel list:", error);
        }
    };

    return (
        <Stack space={4} w="90%" maxW="300px" mx="auto" style={styles.container}>
            <Pressable
                onPress={() => navigation.navigate("Search")}
                style={styles.searchContainer}>
                <Feather name="search" size={24} color="black" />
                <Text
            placeholderTextColor="black"
            style={{ color: searchInput ? 'transparent' : 'black' }}
        >
            {searchInput ? '' : (route?.params ? route.params.input : "Enter Your Destination")}
        </Text>
            </Pressable>
            <DatePicker
                date={date}
                showDatePicker={showDatePicker}
                setShowDatePicker={setShowDatePicker}
                onDateChange={handleDateChange}
            />
            <Button title="Search" onPress={ handleSearch}>Search</Button>
        </Stack>
    );
}

export default HomeScreen;
