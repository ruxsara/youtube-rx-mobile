import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Categories } from "@/components/categories";
import { Videos } from "@/components/videos";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import DarkBell from "../../assets/icons/dark/bell.svg"
import DarkCast from "../../assets/icons/dark/cast.svg";
import DarkLogo from "../../assets/icons/dark/logo.svg";
import DarkSearch from "../../assets/icons/dark/search.svg";
import Bell from "../../assets/icons/bell.svg";
import Cast from "../../assets/icons/cast.svg";
import Logo from "../../assets/icons/logo.svg";
import Search from "../../assets/icons/search.svg";
import { useTheme } from '@react-navigation/native';

export const Header = () => {
  const navTheme = useTheme();

  return (
    <View className="relative flex-row items-center justify-between p-2">
    <View>
      <Logo  /> 
    </View>
    <View className="absolute flex-row right-2 gap-x-3">
      <Cast />
      <Bell width={22} height={22} fill={'white'} />
      <Search />
    </View>
  </View>
  )
}

