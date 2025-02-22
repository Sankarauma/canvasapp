/* src/components/Toolbar.tsx */
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

interface ToolbarProps {
  onAddText: () => void;
  onAddImage: () => void;
  onAddVideo: () => void;
  onEnableDrawing: () => void; // Ensure this is defined in the interface
}

const Toolbar: React.FC<ToolbarProps> = ({ onAddText, onAddImage, onAddVideo, onEnableDrawing }) => (
  <View style={styles.toolbar}>
    <Button title="Add Text" onPress={onAddText} />
    <Button title="Add Image" onPress={onAddImage} />
    <Button title="Add Video" onPress={onAddVideo} />
    <Button title="Enable Drawing" onPress={onEnableDrawing} /> {/* Match props */}
  </View>
);

const styles = StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default Toolbar;
