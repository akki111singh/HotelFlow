import AsyncStorage from "@react-native-async-storage/async-storage";

export const toggleBookmark = async (hotel,setIsBookmarked) => {
    try {
      let bookmarks = await AsyncStorage.getItem("bookmarks");
      bookmarks = bookmarks ? JSON.parse(bookmarks) : [];
      const hotelIndex = bookmarks.findIndex((item) => item.id === hotel.id);
      if (hotelIndex === -1) {
        // Hotel not bookmarked, add to bookmarks
        bookmarks.push(hotel);
        setIsBookmarked(true);
      } else {
        // Hotel already bookmarked, remove from bookmarks
        bookmarks.splice(hotelIndex, 1);
        setIsBookmarked(false);
      }
      await AsyncStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    } catch (error) {
      console.error("Error toggling bookmark:", error);
    }
  };

  export const fetchBookmarks = async (hotel) => {
    try {
      let bookmarks = await AsyncStorage.getItem("bookmarks");
      bookmarks = bookmarks ? JSON.parse(bookmarks) : [];
      const hotelIndex = bookmarks.findIndex((item) => item.id === hotel.id);
      return hotelIndex !== -1;
    } catch (error) {
      console.error("Error fetching bookmarks:", error);
      return false; // or handle error as needed
    }
  };