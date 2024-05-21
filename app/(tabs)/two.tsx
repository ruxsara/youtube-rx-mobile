import { ScrollView } from "react-native";

import { Text, View } from "@/components/Themed";
import { ResizeMode, Video } from "expo-av";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MusicCard from "../../assets/icons/Music-card.svg";
import Camera from "../../assets/icons/camera.svg";
import Comment from "../../assets/icons/comment.svg";
import Dislike from "../../assets/icons/dislike.svg";
import Like from "../../assets/icons/like.svg";
import More from "../../assets/icons/more.svg";
import MusicNote from "../../assets/icons/music-note.svg";
import Reshare from "../../assets/icons/reshare.svg";
import Search from "../../assets/icons/search.svg";
import Share from "../../assets/icons/share.svg";
import You from "../../assets/icons/you.svg";
import { useTheme } from "@react-navigation/native";

export default function TabTwoScreen() {
  const theme = useTheme();

  const safeAreaInsets = useSafeAreaInsets();

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <ScrollView
      className="w-full h-full"
      style={{ paddingTop: safeAreaInsets.top + 0 }}
    >
      <Video
        ref={video}
        className="w-full h-[712px] relative"
        source={{
          uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        useNativeControls={true}
        resizeMode={ResizeMode.STRETCH}
        isLooping
        shouldPlay
        isMuted
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View className="absolute flex-row bg-transparent right-0 gap-6 top-4">
        <Search width={26} height={26} color={theme.colors.text} />
        <Camera width={26} height={26} color={theme.colors.text} />
        <More width={26} height={26} color={theme.colors.text} />
      </View>
      <View className="w-full absolute bottom-2 bg-transparent">
        <View className="flex-row items-center mx-2  bg-transparent">
          <You />
          <Text className="ml-2 font-semibold text-white">
            @Ruxsara Habibova
          </Text>
          <View className=" bg-red-600 p-2 rounded-md mx-2">
            <Text className="font-extrabold text-white ">Subscribe</Text>
          </View>
        </View>
        <Text className="mr-8 ml-2 text-base my-2 text-white font-medium">
          Salam necesiz salam necesiz salam necesiz salam necesiz
        </Text>
        <View className="bg-transparent flex-row justify-between mx-2 ">
          <View className="flex-row bg-transparent items-center gap-2">
            <MusicNote width={26} height={26} color={theme.colors.text} />
            <Text className="text-base text-white">Original Music </Text>
          </View>
          <MusicCard />
        </View>
      </View>
      <View className=" bg-transparent absolute right-2 bottom-28 py-2 gap-8">
        <Like width={30} height={30} color={theme.colors.card} />
        <Dislike width={30} height={30} color={theme.colors.text} />
        <Comment width={30} height={30} color={theme.colors.text} />
        <Share width={30} height={30} color={theme.colors.text} />
        <Reshare width={30} height={30} color={theme.colors.text} />
      </View>
    </ScrollView>
  );
}
