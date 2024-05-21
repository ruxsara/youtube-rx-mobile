import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function VideoDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  
  if (false) {
    return <Text>Event does not exist or has been deleted</Text>;
  }

  return (
    <View className="flex-1">
      <Text>{id}</Text>
    </View>
  );
}
