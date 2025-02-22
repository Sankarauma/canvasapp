import React, { useState } from 'react';
import { View, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';

type DraggableMediaProps = {
  source: ImageSourcePropType;
};

const DraggableMedia: React.FC<DraggableMediaProps> = ({ source }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const onGestureEvent = (event: PanGestureHandlerGestureEvent) => {
    setPosition({
      x: event.nativeEvent.translationX,
      y: event.nativeEvent.translationY,
    });
  };

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <View
        style={[
          styles.mediaContainer,
          { transform: [{ translateX: position.x }, { translateY: position.y }] },
        ]}
      >
        <Image source={source} style={styles.media} />
      </View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  mediaContainer: {
    position: 'absolute',
  },
  media: {
    width: 100,
    height: 100,
  },
});

export default DraggableMedia;