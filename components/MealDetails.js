import { StyleSheet, Text, View } from 'react-native';

export const MealDetails = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle
}) => {
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.detailItem}>{duration}m</Text>
      <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12
  },
});
