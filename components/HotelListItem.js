import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { toggleBookmark } from "../helper/PrefHelper";
import { AntDesign } from "@expo/vector-icons";
import { useEffect,useState } from "react";
import { fetchBookmarks } from "../helper/PrefHelper";
import styles from "../styles/styles";


const HotelListItem = ({ hotel }) => {
    const [isBookmarked, setIsBookmarked] = useState(false);

    useEffect(() => {
        const fetchBookmarkStatus = async () => {
            const bookmarked = await fetchBookmarks(hotel);
            setIsBookmarked(bookmarked);
        };
        fetchBookmarkStatus();
    }, [hotel.id]);
    
    const handleToggleBookmark = async () => {
        await toggleBookmark(hotel, setIsBookmarked);
      };

    return (
        <View>
            <Pressable
                style={styles.hotelItemcontainer}
            >
                <View style={styles.hotelIteminfoContainer}>
                    <View style={styles.hotelItemtitleContainer}>
                        <Text style={styles.hotelItemtitle}>
                            {hotel.name || "Name not found"}
                        </Text>
                        <AntDesign
                            name={isBookmarked ? "heart" : "hearto"}
                            size={16}
                            color={isBookmarked ? "red" : "black"}
                            onPress={handleToggleBookmark}
                        />
                    </View>

                    <View style={styles.hotelItemratingContainer}>
                        <MaterialIcons name="stars" size={24} color="green" />
                        <Text>{hotel.hotel_star_rating || "No Rating Available"}</Text>
                    </View>

                    <Text style={styles.hotelItemaddress}>
                        {hotel.address.length > 50
                            ? hotel.address.substr(0, 50) + "..."
                            : hotel.address || "Address not available"}
                    </Text>

                    <View style={styles.hotelItemreviewContainer}>
                        <Text style={styles.reviewText}>
                            Reviews: {hotel.site_review_count || "No Reviews Available"}
                        </Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
};

export default HotelListItem;