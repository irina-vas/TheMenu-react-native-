import { StyleSheet, View, Text, Pressable, Image, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MealDetails } from './MealDetails';

export const MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability
}) => {
  const navigation = useNavigation();
  const selectMealPressHandler = () => {
    navigation.navigate('MealDetail', {
      mealId: id
    });
  }
  return (
    <View style={styles.container}>
      <Pressable
        onPress={selectMealPressHandler}
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => pressed ? styles.buttonPressed : null}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails affordability={affordability} complexity={complexity} duration={duration} />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : null,
    backgroundColor: '#fff',
    elevation: 4,
    borderWidth: 0,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
    shadowColor: '#000',
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    margin: 8,
  },
  buttonPressed: {
    opacity: 0.5
  },
});
