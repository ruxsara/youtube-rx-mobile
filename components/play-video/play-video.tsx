import { ResizeMode, Video } from "expo-av";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Down from "../../assets/icons/down.svg";
import NotificationOff from "../../assets/icons/notification-off.svg";
import You from "../../assets/icons/you.svg";
import { Videos } from "../videos";
import Like from '../../assets/icons/like.svg'
import DisLike from '../../assets/icons/dislike.svg'
import Share from '../../assets/icons/share.svg'
import Download from '../../assets/icons/download.svg'
import Clip from '../../assets/icons/clip.svg'
export const PlayVideo = () => {
  const safeAreaInsets = useSafeAreaInsets();

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <ScrollView >
     <Video
        ref={video}
        className="w-full h-[200px]"
        source={{
          uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        useNativeControls={true}
        resizeMode={ResizeMode.COVER}
        isLooping
        shouldPlay
        isMuted
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <Text className="ml-2 mr-4 mt-3 text-lg ">
        Build your design system - Lesson 3 : Introduction to design systems
      </Text>

      <View className="ml-2">
        <Text className=" text-xs text-gray-700">
          270K views 3 days ago Config 2022... MORE{" "}
        </Text>
      </View> 

      <View className="my-4 mx-2 flex-row justify-between ">
        <View className="flex-row gap-2 items-center">
          <You />
          <Text className="text-base">Figma</Text>
          <Text className="text-xs text-gray-500 ">222K</Text>
        </View>
        <View className="bg-[#e5e5e5] flex-row p-2 rounded-2xl">
          <NotificationOff  />
          <Down />
        </View>
      </View>

      <ScrollView horizontal>
        <View className="flex-row gap-2 p-2 ">


       <View className="p-2 bg-[#e5e5e5] flex-row rounded-2xl items-center">
            <Like width={22}  height={22}/>
            <Text  className="ml-2">222</Text>

            <View  className="h-full bg-[#bbb] w-[1px] mr-2 ml-4"/>
            <DisLike width={22}  height={22}/>


        </View>
        
        
        
        
        <View className="p-2 bg-[#e5e5e5] flex-row rounded-2xl items-center">
            <Share width={22}  height={22}/>
            <Text  className="ml-2">Share</Text>
        </View>
        
        <View className="p-2 bg-[#e5e5e5] flex-row rounded-2xl items-center">
            <Download width={22}  height={22}/>
            <Text  className="ml-2">Download</Text>
        </View><View className="p-2 bg-[#e5e5e5] flex-row rounded-2xl items-center">
            <Clip width={22}  height={22}/>
            <Text  className="ml-2">Clip</Text>
        </View>
       </View>
      </ScrollView>

      {/* comments */}

      <View className=" bg-[#e5e5e] mx-3  p-4 rounded-xl">
        <View className="flex-row ">
            <Text className="font-bold">Comments</Text>
            <Text className="text-xs text-[#9a9a9a] ml-1">22</Text>
        </View>

        <View className="flex-row gap-3 mt-1 ">
            <You />
            <Text className="mr-12 text-justify text-xs"> accusamus fuga quia repellat reiciendis architecto quo similique sint! Nulla, modi provident quas porro cum amet sit fugi</Text>
        </View>
       </View>
       <Videos />
       

    </ScrollView>
  );
};
