import { StyleSheet, View, Text } from 'react-native';

export const List = ({ data }) => {
  return (
      data.map((ingredient) => (
        <View key={ingredient} style={styles.container}>
          <Text style={styles.text}>{ingredient}</Text>
        </View>
      ))
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    backgroundColor: '#e2b497'
  },
  text: {
    color: '#24180f',
    textAlign: 'center',
  }
});
