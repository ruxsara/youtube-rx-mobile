import { View, Text } from "react-native";
import React from "react";
import { PlayVideo } from "@/components/play-video";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function () {
  const safeAreaInsets = useSafeAreaInsets();

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <View className="flex-1 " style={{ paddingTop: safeAreaInsets.top + 0 }}>
      <PlayVideo />
    </View>
  );
}
