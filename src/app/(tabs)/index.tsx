import { Categories } from "@components/categories";
import { Header } from "@components/header";
import { Videos } from "@components/videos";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { RefreshControl, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabOneScreen() {
  const [refreshing, setRefreshing] = React.useState(false);
  const navTheme = useTheme();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const safeAreaInsets = useSafeAreaInsets();

  return (
    <ScrollView
      nestedScrollEnabled
      className="flex-1"
      style={{ paddingTop: safeAreaInsets.top + 0 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {/* categories */}

      <Header />

      <Categories />

      {/* Videos */}
      <Videos />
    </ScrollView>
  );
}
