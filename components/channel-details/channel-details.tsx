import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";
import YourAccount from "../../assets/icons/Your-account.svg";
import Bell from "../../assets/icons/bell.svg";
import Down from "../../assets/icons/down.svg";
import Next from "../../assets/icons/next.svg";
import { Link } from "expo-router";
import { ResizeMode, Video } from "expo-av";
import You from "../../assets/icons/you.svg";
import More from "../../assets/icons/more.svg";
import { useTheme } from "@react-navigation/native";


export const ChannelDetails = () => {
  const [status, setStatus] = React.useState({});
  const theme = useTheme();


  return (
    <View className="flex-1 mx-2">
      <View className=" my-2">
        <Image
          className="w-full aspect-[9/3] rounded-2xl"
          source="https://picsum.photos/seed/696/3000/2000"
          contentFit="cover"
          transition={1000}
        />
      </View>

      <View className="flex-row">
        <View>
          <YourAccount />
        </View>
        <View className="ml-2">
          <Text className="font-bold text-2xl">Ruhi Çenet</Text>
          <Text className="text-xs text-gray-700">@ruhicenetmedyaglobal</Text>
          <View className="flex-row">
            <Text className="text-xs text-gray-700">8,72 Mn abone</Text>
            <Text className="text-xs text-gray-700"> • 410 video</Text>
          </View>
        </View>
      </View>

      <View className="flex-row my-3 items-center">
        <Text className="text-xs text-gray-700 ">
          Alti kitada, 65 ülkede ulagilmasi güg yerleri ziyaret ederek
          olaganüstü hikayeleri dijital platformlara tasimistir.
        </Text>

        <View className="ml-7">
          <Next width={22} height={22} color={theme.colors.text}/>
        </View>
      </View>

      <View className="flex-row items-center bg-stone-700 rounded-full py-2 my-3  justify-center">
        <Bell width={22} height={22} color={theme.colors.text}/>
        <Text className="text-white font-medium">Abone olundu</Text>
        <Down  width={22} height={22} color={theme.colors.text}/>
      </View>


<View className="flex-row gap-2 ">
 <Text>Home</Text>
 <Text>Videos</Text>
 <Text>Shorts</Text>
 <Text>Community</Text>


</View>

<View>
      <Video
        className="w-full h-[200px] mt-4"
        source={{
          uri:'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls={false}
        resizeMode={ResizeMode.COVER}
        isLooping
        shouldPlay
        isMuted
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />

<View className="flex-row my-2">
        <View>
          <You />
        </View>
        <View className="ml-2 ">
          <View className="flex-row">
          <Text className="mr-12 ">Dünyanin En Kalabalik Adasinda 48 Saat (Gördüklerimi unutamiyorum)</Text>
          <More />
          </View>
          <View className="flex-row">
            <Text className="text-xs text-gray-700">Ruhi Cenet</Text>
            <Text className="text-xs text-gray-700"> • 21 Mn goruntuleme</Text>
            <Text className="text-xs text-gray-700"> • 2 ay once</Text>
          </View>
        </View>
      </View>
    </View>

    </View>
  );
};
