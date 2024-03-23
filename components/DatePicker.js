import React from 'react';
import { Pressable, Text } from 'react-native';
import { Feather } from "@expo/vector-icons";
import RNDateTimePicker from '@react-native-community/datetimepicker';
import styles from '../styles/styles';

const DatePicker = ({ date, showDatePicker, setShowDatePicker, onDateChange }) => {
    return (
        <Pressable
            onPress={() => setShowDatePicker(true)}
            style={styles.datePickerContainer}
        >
            <Feather name="calendar" size={24} color="black" />
            {showDatePicker && (
                <RNDateTimePicker style={{flex: 1}} 
                    value={date}
                    mode="date"
                    display="default"
                    onChange={onDateChange}
                    minimumDate={new Date()} // Prevent selection of previous dates
                />
            )}
            <Text>{date.toLocaleDateString()}</Text>
        </Pressable>
    );
}

export default DatePicker;
