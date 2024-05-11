import React from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Explore from "../../assets/icons/explore.svg";
export const Categories = () => {
 

  return (
    <ScrollView  horizontal showsHorizontalScrollIndicator={false}  >
      <View className="p-2 mt-2 flex-row items-center">
        <TouchableOpacity>
          <View className="rounded-lg mr-2 bg-gray-100 px-3 py-0.5">
            <Explore className="py-1 px-3 font-semibold " />
          </View>
        </TouchableOpacity>
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
              <View className="rounded-lg mr-2 bg-gray-100 ">
                <Text className="py-1 px-3 font-semibold">{item.key}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  );
};