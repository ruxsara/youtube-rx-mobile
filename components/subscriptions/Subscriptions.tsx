import React from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Explore from "../../assets/icons/explore.svg";
import Add from '../../assets/icons/Your-account.svg'
export const Subscriptions = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View className="p-2 mt-2 flex-row items-center">
       
        <FlatList
          data={[
            { key: "Devin",icon:<Add/> },
            { key: "Dan",icon:<Add/> },
            { key: "Dominic",icon:<Add/> },
            { key: "Jackson",icon:<Add/> },
            { key: "James" ,icon:<Add/>},
            { key: "Joel",icon:<Add/> },
            { key: "John",icon:<Add/>},
            { key: "Jillian",icon:<Add/> },
            { key: "Jimmy" ,icon:<Add/>},
          ]}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity>
              <View className="rounded-lg mr-2 bg-gray-100 items-center">
                <Text >{item.icon}</Text>
                <Text className="py-1 px-3 ">{item.key}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity>
        <Text className="text-blue-500">
          All
        </Text>
        </TouchableOpacity>
       
      </View>
    </ScrollView>
  );
};
