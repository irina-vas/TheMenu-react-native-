import { useLayoutEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { MealItem } from '../components/MealItem';
import { MEALS, CATEGORIES } from '../data';
// second way of getting route (from hook)
//import { useRoute } from '@react-navigation/native'

export const MealsOverviewScreen = ({ route, navigation }) => {
  const categoryId = route.params.categoryId;

  // second way of getting route (from hook)
  // const routeFromHook = useRoute();
  // const catID = routeFromHook.params.categoryId;

  const displayedMeals = MEALS.filter((meal) => {
    return (
      meal.categoryId.indexOf(categoryId) >= 0
    )
  });
  
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;
    navigation.setOptions({
      title: categoryTitle
    });
  }, [categoryId, navigation])

  const renderMealItem = (itemData) => {
    const item = itemData.item;
    const mealItenProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    }
    return (
      <MealItem {...mealItenProps} />
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
});
