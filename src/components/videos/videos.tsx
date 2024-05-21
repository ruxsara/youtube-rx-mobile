import { VideoCard } from "@components/video-card";
import React from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { VideoEntity } from "@constants/types";

export const Videos = () => {
  const videoList: VideoEntity[] = [
    {
      id: 2222,
      title: 'dh',
      uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    },
    {
      id: 22422,
      title: 'jedhe',
      uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    },
    {
      id: 2444222,
      title:'nhebdnjekm',
      uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    },
  ];

  return (
    <SafeAreaView className="p-2 mt-2 flex-row items-center">
      <FlatList
        data={videoList}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View>
              <VideoCard video={item} />
              <View className="flex-row mt-2 ">
                <View className="w-8 h-8 rounded-full bg-red-600 ml-2 "></View>
                <View className=" ml-3">
                  <Text className="mr-5 font-medium dark:text-white">
                    Config 2022 Opening Keynote - Dylan Field
                  </Text>
                  <Text className="text-[#828080] dark:text-[#D9D9D9]">
                    Figma · 437K views ·7 days ago
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};
