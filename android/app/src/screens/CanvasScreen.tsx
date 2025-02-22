import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text , Alert } from 'react-native';
import DraggableMedia from '../components/DraggableMedia';
import Toolbar from '../components/Toolbar';
import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';


interface MediaItem {
  type: 'image' | 'video' | 'text';
  source?: { uri: string };
  text?: string;
}

const CanvasScreen: React.FC = () => {
  const [mediaList, setMediaList] = useState<MediaItem[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);

  const handleAddText = () => {
    setMediaList([...mediaList, { type: 'text', text: 'New Text' }]);
  };

  const handleAddImage = () => {
    setMediaList([...mediaList, { type: 'image', source: { uri: 'https://via.placeholder.com/150' } }]);
  };

  const handleAddVideo = () => {
    // alert('Add Video Clicked');
  };

  const handleEnableDrawing = () => {
    setIsDrawing(!isDrawing);
  };

  return (
    <View style={styles.container}>
      <Toolbar
        onAddText={handleAddText}
        onAddImage={handleAddImage}
        onAddVideo={handleAddVideo}
        onEnableDrawing={handleEnableDrawing}
      />
      <View style={styles.canvas}>
        {isDrawing && (
          <SketchCanvas
            style={styles.drawingBoard}
            strokeColor="black"
            strokeWidth={3}
            onSketchSaved={(success, filePath) =>
              success ? Alert.alert(`Saved at ${filePath}`) : Alert.alert('Failed to save')
            }
          />
        )}
        {mediaList.map((item, index) => {
          if (item.type === 'image' && item.source) {
            return <DraggableMedia key={index} source={item.source} />;
          }
          if (item.type === 'text') {
            return (
              <TextInput
                key={index}
                style={styles.textInput}
                defaultValue={item.text}
                editable
                multiline
              />
            );
          }
          return null;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  canvas: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    position: 'relative',
  },
  textInput: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderColor: '#000',
    borderWidth: 1,
    padding: 5,
  },
  drawingBoard: {
    flex: 1,
    zIndex: 1,
  },
});

export default CanvasScreen;
