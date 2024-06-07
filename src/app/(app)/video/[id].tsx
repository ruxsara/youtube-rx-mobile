import { PlayVideo } from "@components/play-video";
import { Feather } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function VideoDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const safeAreaInsets = useSafeAreaInsets();

  if (false) {
    return <Text>Event does not exist or has been deleted</Text>;
  }

  return (
    <View style={{ paddingTop: safeAreaInsets.top + 0 }}>
      <Pressable className="p-0" onPress={()=>router.replace('/(tabs)')}>
        <Feather name="chevron-left" size={32} color="black" />
        <PlayVideo/>
      </Pressable>
    </View>
  );
}
