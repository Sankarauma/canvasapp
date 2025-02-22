import React, { useRef } from 'react';
import { StyleSheet, View, PanResponder, Animated } from 'react-native';

const DrawingCanvas = () => {
  const lines = useRef<Animated.ValueXY[]>([]);
  const currentLine = useRef<Animated.ValueXY | null>(null);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      currentLine.current = new Animated.ValueXY();
      lines.current.push(currentLine.current);
    },
    onPanResponderMove: (_, gesture) => {
      if (currentLine.current) {
        currentLine.current.setValue({ x: gesture.moveX, y: gesture.moveY });
      }
    },
    onPanResponderRelease: () => {
      currentLine.current = null;
    },
  });

  return (
    <View style={styles.canvas} {...panResponder.panHandlers}>
      {lines.current.map((line, index) => (
        <Animated.View
          key={index}
          style={[styles.line, { left: line.x, top: line.y }]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  line: {
    position: 'absolute',
    width: 5,
    height: 5,
    backgroundColor: 'black',
    borderRadius: 2.5,
  },
});

export default DrawingCanvas;
