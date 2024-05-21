import { Feather } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function VideoDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  if (false) {
    return <Text>Event does not exist or has been deleted</Text>;
  }

  return (
    <View>
      <TouchableOpacity className="p-0.5" onPress={()=>router.replace('/(tabs)')}>
        <Feather name="chevron-left" size={32} color="black" />
      </TouchableOpacity>
    </View>
  );
}
