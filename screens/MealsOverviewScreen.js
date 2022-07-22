import { useLayoutEffect } from 'react';
import { MealsList } from '../components/MealsList/MealsList';
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
  return <MealsList items={displayedMeals} />
}
