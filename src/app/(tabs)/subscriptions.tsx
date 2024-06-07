import { Categories } from "@components/categories";
import { Header } from "@components/header";
import { Subscriptions } from "@components/subscriptions";
import { Videos } from "@components/videos";
import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Sara() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View className="flex-1 " style={{ paddingTop: safeAreaInsets.top + 0 }}>
      <Header />
      <Subscriptions />

      <Categories />

      <Videos />
    </View>
  );
}
