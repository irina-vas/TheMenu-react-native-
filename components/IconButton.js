import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const IconButton = ({ icon, color, onPress }) => {
  return (
    <Pressable style={({pressed}) => pressed ? [styles.pressed, styles.container] : styles.container} onPress={onPress}>
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  pressed: {
    opacity: 0.5
  }
});
