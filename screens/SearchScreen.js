import { StyleSheet, Text, View, SafeAreaView, TextInput, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { Feather } from "@expo/vector-icons";
import debounce from 'lodash.debounce';
import { getAllCities } from "../requests/api";
import SearchResults from "../components/SearchResult";
import styles from "../styles/styles";

const SearchScreen = () => {
    const [input, setInput] = useState("");
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(false);

    //make api call after 5 seconds when the user stops typing
    const debouncedSave = useCallback(
        debounce((newValue) => getSuggestions(newValue), 500),
        []
    );

    const getSuggestions = async (word) => {
        if (word) {
            setLoading(true);
            let response = await getAllCities(word);
            setOptions(response);
            setLoading(false);
        } else {
            setOptions([]);
        }
    };

    const updateValue = (newValue) => {
        setInput(newValue);
        debouncedSave(newValue);
    };

    return (
        <SafeAreaView>
            <View style={styles.searchResultContainer}>
                <TextInput
                    value={input}
                    onChangeText={updateValue}
                    placeholder="Enter Your Destination"
                    style={styles.input}
                />
                <Feather name="search" size={22} color="black" />
            </View>

            {loading ? (
                <Text style={{ marginLeft: 10 }}>Loading...</Text>
            ) : (
                <SearchResults data={options} input={input} setInput={setInput} />
            )}
        </SafeAreaView>
    );
};


export default SearchScreen;
