import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import DraggableItem from '../components/DraggableItem';

interface SidebarProps {
  onDrop: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onDrop }) => {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <View style={styles.sidebar}>
      {items.map((item, index) => (
        <DraggableItem key={index} label={item} onDrop={onDrop} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: 200,
    backgroundColor: '#ddd',
    padding: 10,
    zIndex: 5,
  },
});

export default Sidebar;