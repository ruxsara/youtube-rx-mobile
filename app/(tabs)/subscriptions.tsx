import { Categories } from "@/components/categories";
import { Header } from "@/components/header";
import { Subscriptions } from "@/components/subscriptions";
import { Videos } from "@/components/videos";
import React from "react";
import { ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Sara() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <ScrollView>
      <View className="flex-1 " style={{ paddingTop: safeAreaInsets.top + 0 }}>
        {/* header */}
        <Header />
        <Subscriptions/>

        {/* categories */}
        <Categories />

        {/* Videos */}
        <Videos />
      </View>
    </ScrollView>
  );
}
