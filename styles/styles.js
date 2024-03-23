import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 20,
        borderColor: "#008cff",
        borderWidth: 3,
        borderRadius: 6,
        padding: 10,
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingHorizontal: 10,
        borderColor: "#008cff",
        borderWidth: 2,
        paddingVertical: 15
    },
    datePickerContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingHorizontal: 10,
        borderColor: "#008cff",
        borderWidth: 2,
        paddingVertical: 15,

    },
    button: {
        backgroundColor: "#008cff",
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    searchResultContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        margin:10,
        paddingHorizontal: 10,
        borderColor: "#008cff",
        borderWidth: 2,
        paddingVertical: 5
    },
    input: {
        flex: 1,
        height: 40,
        fontSize:15
    },
    hotelListContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    hotelItemContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    searchResultcontainer: {
        padding: 10,
    },
    searchResultitemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        marginLeft: 10,
    },
    searchResulttextContainer: {
        marginLeft: 10,
    },
    searchResultareaText: {
        fontSize: 15,
        fontWeight: '500',
    },
    searchResultcityText: {
        marginVertical: 4,
    },
    searchResultstateText: {
        color: 'gray',
        fontSize: 15,
    },
    hotelItemcontainer: {
        margin: 15,
        flexDirection: "row",
        backgroundColor: "white",
    },
    hotelIteminfoContainer: {
        padding: 10,
    },
    hotelItemtitleContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    hotelItemtitle: {
        width: 200,
        fontWeight: "bold",
    },
    hotelItemratingContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        marginTop: 7,
    },
    hotelItemaddress: {
        width: 210,
        marginTop: 6,
        color: "gray",
        fontWeight: "bold",
    },
    hotelItemreviewContainer: {
        marginTop: 6,
    },
    hotelItemreviewText: {
        fontSize: 16,
        color: "gray",
    },

});

export default styles;
