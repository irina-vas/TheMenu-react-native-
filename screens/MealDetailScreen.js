import { Image, StyleSheet, Text, View } from 'react-native';
import { MealDetails } from '../components/MealDetails';
import { MEALS } from '../data';

export const MealDetailScreen = ({ route }) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find(({ id }) => id === mealId);

  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} />
      <Text>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <Text>Ingredients</Text>
      <Text>Steps</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
