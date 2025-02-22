import React from 'react';
import { StyleSheet, Text, PanResponder, Animated } from 'react-native';

interface DraggableItemProps {
  label: string;
  onDrop: (item: string) => void;
}

const DraggableItem: React.FC<DraggableItemProps> = ({ label, onDrop }) => {
  const position = new Animated.ValueXY();

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      { dx: position.x, dy: position.y },
    ], { useNativeDriver: false }),
    onPanResponderRelease: (_, gesture) => {
      if (gesture.moveY > 400) {
        onDrop(label);
      }
      position.setValue({ x: 0, y: 0 });
    },
  });

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[styles.item, position.getLayout()]}
    >
      <Text style={styles.text}>{label}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    marginVertical: 5,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
  },
});

export default DraggableItem;