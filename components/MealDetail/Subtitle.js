import { StyleSheet, Text, View } from 'react-native';

export const Subtitle = ({ children }) => {
  return (
    <View style={styles.subtitileContainer}>
      <Text style={styles.subtitile}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitile: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    color: '#e2b497',
  },
  subtitileContainer: {
    padding: 6,
    marginHorizontal: 12 ,
    marginVertical: 4,
    borderBottomWidth: 2,
    borderBottomColor: '#e2b497',
  }
});
