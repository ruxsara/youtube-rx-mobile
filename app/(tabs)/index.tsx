import { View } from "@/components/Themed";
import { Categories } from "@/components/categories";
import { Header } from "@/components/header";
import { Videos } from "@/components/videos";
import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabOneScreen() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <ScrollView>
      <View className="flex-1 " style={{ paddingTop: safeAreaInsets.top + 0 }}>
        {/* header */}
        <Header />

        {/* categories */}
        <Categories />

        {/* Videos */}
        <Videos />
      </View>
    </ScrollView>
  );
}
