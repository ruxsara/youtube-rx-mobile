import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Categories } from "@/components/categories";
import { Videos } from "@/components/videos";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Bell from "../../assets/icons/bell.svg";
import Cast from "../../assets/icons/cast.svg";
import Logo from "../../assets/icons/logo.svg";
import Search from "../../assets/icons/search.svg";

export const Header = () => {
  return (
    <View className="relative flex-row items-center justify-between p-2">
    <View>
      <Logo />
    </View>
    <View className="absolute flex-row right-2 gap-x-3">
      <Cast />
      <Bell />
      <Search />
    </View>
  </View>
  )
}

