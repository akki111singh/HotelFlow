import * as Linking from "expo-linking";

export const linking = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Hotels: 'hotels',
      Search: 'search',
      HotelsList: {
        path: 'hotelslist/:location',
        parse: {
          location: (location) => decodeURIComponent(location),
        },
      },
    },
  },
};

