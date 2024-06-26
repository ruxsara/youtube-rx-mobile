import Explore from "@assets/icons/explore.svg";
import { useTheme } from "@react-navigation/native";
import React from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export const Categories = () => {
  const theme = useTheme();

  return (
      <View className="p-2 mt-2 flex-row items-center">
        <Pressable>
          <View className="rounded-lg mr-2 bg-gray-200 dark:bg-[#272727] py-1.5 px-3">
            <Explore width={22} height={22} color={theme.colors.text} />
          </View>
        </Pressable>
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
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity>
              <View className="rounded-lg mr-2 bg-gray-200 dark:bg-[#272727] ">
                <Text className="py-1.5 px-3 font-semibold dark:text-white">
                  {item.key}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
  );
};
