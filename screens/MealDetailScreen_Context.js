import { useLayoutEffect, useContext } from 'react';
import { Image, StyleSheet, Text, ScrollView, View, Button } from 'react-native';
import { List } from '../components/MealDetail/List';
import { Subtitle } from '../components/MealDetail/Subtitle';
import { MealDetails } from '../components/MealDetails';
import { MEALS } from '../data';
import { IconButton } from '../components/IconButton';
import { FavoritesContext } from '../store/context/favorites-context';
import { useFavoritesContext } from '../store/context/favorites-context';

export const MealDetailScreen = ({ route, navigation }) => {
  const favoriteMealsCtx = useFavoritesContext();
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const mealIsFavorite = favoriteMealsCtx.favoriteMealIds.includes(mealId);
  //console.log('selectedMeal', selectedMeal);
  console.log('!!!!!mealIsFavorite!!!!', mealIsFavorite);
  //console.log('favoriteMealsCtx', favoriteMealsCtx)

  const changeFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
      favoriteMealsCtx.removeFavorite(mealId);
    } else if (!mealIsFavorite) {
      favoriteMealsCtx.addFavorite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
      return (
        <IconButton
          color="#fff"
          icon={mealIsFavorite ? "star" : "star-outline"}
          onPress={changeFavoriteStatusHandler}
        />
      )
    }
    })
  }, [navigation, changeFavoriteStatusHandler])

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: selectedMeal.imageUrl }}
        style={styles.image}
      />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    margin: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
    color: '#fff'
  },
  detailText: {
    color: '#fff'
  },
  listContainer: {
    width: '80%',
  },
  listOuterContainer: {
    alignItems: 'center'
  }
});
