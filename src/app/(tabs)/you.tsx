import Next from "@assets/icons/next.svg";
import React from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import YourAccount from "@assets/icons/Your-account.svg";
import AddAccount from "@assets/icons/add-account.svg";
import Channel from "@assets/icons/channel.svg";
import Data from "@assets/icons/data.svg";
import Help from "@assets/icons/help.svg";
import Incognito from "@assets/icons/incognito.svg";
import Music from "@assets/icons/music.svg";
import Premium from "@assets/icons/premium.svg";
import Purchase from "@assets/icons/purchase.svg";
import Settings from "@assets/icons/settings.svg";
import Studio from "@assets/icons/studio.svg";
import Time from "@assets/icons/time.svg";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function You() {
  const theme = useTheme();
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View className="flex-1" style={{ paddingTop: safeAreaInsets.top + 0 }}>
      <Pressable className="p-0" onPress={() => router.replace("/(tabs)")}>
        <Feather name="chevron-left" size={32} color="black" />
      </Pressable>

      <ScrollView>
        <View className="w-full px-3 flex-row justify-between  items-center">
          <YourAccount />
          <View>
            <Text className="dark:text-white font-extrabold text-xl">
              Ruxsara Habibova
            </Text>
            <Text className="text-gray-500 text-lg">@ruxsarahabibova</Text>
            <Text className="text-blue-400 text-lg">
              Manage your Google Account
            </Text>
          </View>
          <Next width={22} height={22} color={theme.colors.text} />
        </View>
        <View className="items-start w-full mt-3 px-3">
          <TouchableOpacity>
            <View className="flex-row items-center py-3">
              <Channel width={22} height={22} color={theme.colors.text} />
              <Text className="dark:text-white text-lg font-medium ml-3">
                Your Channel
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row items-center py-3">
              <Incognito width={22} height={22} color={theme.colors.text} />
              <Text className="dark:text-white text-lg font-medium ml-3">
                Turn on lncognito
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row items-center py-3">
              <AddAccount width={22} height={22} color={theme.colors.text} />
              <Text className="dark:text-white text-lg font-medium ml-3">
                Add Account
              </Text>
            </View>
          </TouchableOpacity>
          <View className="w-full bg-gray-600 h-[0.5px] my-3" />

          <TouchableOpacity>
            <View className="flex-row items-center py-3">
              <Premium width={22} height={22} color={theme.colors.text} />
              <Text className="dark:text-white text-lg font-medium ml-3">
                Get Youtube Premium
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row items-center py-3">
              <Purchase width={22} height={22} color={theme.colors.text} />
              <Text className="dark:text-white text-lg font-medium ml-3">
                Purchases and memberships
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row items-center py-3">
              <Time width={22} height={22} color={theme.colors.text} />
              <Text className="dark:text-white text-lg font-medium ml-3">
                Time watched
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="flex-row items-center py-3">
              <Data width={22} height={22} color={theme.colors.text} />
              <Text className="dark:text-white text-lg font-medium ml-3">
                Your data in Youtube
              </Text>
            </View>
          </TouchableOpacity>
          <View className="w-full bg-gray-400 h-[0.5px] my-3" />

          <TouchableOpacity>
            <View className="flex-row items-center py-3">
              <Settings width={22} height={22} color={theme.colors.text} />
              <Text className="dark:text-white text-lg font-medium ml-3">
                Settings
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row items-center py-3">
              <Help width={22} height={22} color={theme.colors.text} />
              <Text className="dark:text-white text-lg font-medium ml-3">
                Help & feedback
              </Text>
            </View>
          </TouchableOpacity>
          <View className="w-full bg-gray-600 h-[0.5px] my-3" />

          <TouchableOpacity>
            <View className="flex-row items-center py-3">
              <Studio />
              <Text className="dark:text-white text-lg font-medium ml-3">
                YouTube Studio
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex-row items-center py-3">
              <Music width={22} height={22} color={theme.colors.text} />
              <Text className="dark:text-white text-lg font-medium ml-3">
                YouTube Music
              </Text>
            </View>
          </TouchableOpacity>

          <View className="flex-row w-full justify-center my-4">
            <Text className=" text-gray-400 font-medium">Privacy Policy ·</Text>
            <Text className="text-gray-400 font-medium">Terms of Service</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
