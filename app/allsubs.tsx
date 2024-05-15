import { Link } from "expo-router";
import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import Back from "../assets/icons/back.svg";
import Bell from "../assets/icons/bell.svg";
import Cast from "../assets/icons/cast.svg";
import Down from "../assets/icons/down.svg";
import Search from "../assets/icons/search.svg";
import You from "../assets/icons/you.svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const AllSubscriptions = () => {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <ScrollView
      className="flex-1 "
      style={{ paddingTop: safeAreaInsets.top + 6 }}
    >
      <View className="relative flex-row items-center justify-between p-2">
        <View className="flex-row items-center">
          <Link href={"/(tabs)/subscriptions"}>
            <Back />
          </Link>
          <Text className="font-extrabold text-2xl dark:text-white">
            All Subscription
          </Text>
        </View>
        <View className="absolute flex-row right-2 gap-x-3 ">
          <Cast />
          <Bell />
          <Search />
        </View>
      </View>
      <View className="flex-row items-center">
        <FlatList
          data={[
            { key: "Devin" },
            { key: "Dan" },
            { key: "Dominic" },
            { key: "Jackson" },
            { key: "James" },
            { key: "Joel" },
            { key: "John" },
            { key: "Jillian" },
            { key: "Jimmy" },
          ]}
          renderItem={({ item }) => (
            <View className="flex-row items-center justify-between mx-4 py-2">
              <View className="flex-row items-center">
                <You />
                <Text className="ml-2 text-base dark:text-white">
                  {" "}
                  {item.key}
                </Text>
              </View>
              <View className="flex-row items-center bg-gray-400 py-1 rounded-3xl px-3">
                <Bell />
                <Down />
              </View>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default AllSubscriptions;

const styles = StyleSheet.create({});
