import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    width,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleRating: {
    fontWeight: '800',
    fontSize: 14, 
    lineHeight: 20, 
    textTransform: "uppercase",
  },
  flatList: {
    width,
    paddingHorizontal: 20,
  },
  flatListItem: {
    flexDirection: 'row',
    borderBottomColor: '#EEE',
    borderBottomWidth: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flatListTexts: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemPosition: {
    fontSize: 20,
    marginRight: 20,
  },
  imageProfile: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 8,
  },
  textName: {
    fontSize: 16,
  },
  textPts: {
    fontSize: 20,
    color: '#652CDB',
  },
});
