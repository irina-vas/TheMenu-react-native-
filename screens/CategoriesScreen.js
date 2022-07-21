import { StyleSheet, FlatList } from 'react-native';
import { CategoriesGridTile } from '../components/CategoryGridTile';
import { CATEGORIES } from '../data';

export const CategoriesScreen = () => {
  const renderCategoryItem = (itemData) => {
    return <CategoriesGridTile title={itemData.item.title} color={itemData.item.color} />;
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderCategoryItem}
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
