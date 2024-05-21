import React from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { VideoCard } from "../video-card";

export const Videos = () => {
  const videoList = [
    {
      id: 2222,
      title: 2,
      uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
      // data: eventList1?.attributes?.events?.data as EventEntity[],
    },
    {
      id: 22422,
      title: 3,
      uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",

      // data: eventList2?.attributes?.events?.data as EventEntity[],
    },
    {
      id: 2444222,
      title: 455,
      uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",

      // data: eventList3?.attributes?.events?.data as EventEntity[],
    },
  ];

  return (
    <SafeAreaView className="p-2 mt-2 flex-row items-center" >
      <FlatList
        data={videoList}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View>
              <VideoCard item={item} />
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
