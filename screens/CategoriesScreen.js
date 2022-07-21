import { StyleSheet, FlatList } from 'react-native';
import { CategoriesGridTile } from '../components/CategoryGridTile';
import { CATEGORIES } from '../data';

export const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    const PressHandler = () => {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id
      });
    }
    return <CategoriesGridTile onPress={PressHandler} title={itemData.item.title} color={itemData.item.color} />;
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderCategoryItem.bind()}
      numColumns={2}
      key={CATEGORIES.id}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
