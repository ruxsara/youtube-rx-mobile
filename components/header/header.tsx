import React from "react";
import { View } from "react-native";
import Bell from "@assets/icons/bell.svg";
import Cast from "@assets/icons/cast.svg";
import Logo from "@assets/icons/logo.svg";
import Search from "@assets/icons/search.svg";
import { useTheme } from "@react-navigation/native";

export const Header = () => {
  const theme = useTheme();

  return (
    <View className="relative flex-row items-center justify-between p-2">
      <View>
        <Logo width={96} height={29} color={theme.colors.text} />
      </View>
      <View className="absolute flex-row right-2 gap-x-3">
        <Cast width={22} height={22} color={theme.colors.text} />
        <Bell width={22} height={22} color={theme.colors.text} />
        <Search width={22} height={22} color={theme.colors.text} />
      </View>
    </View>
  );
};





















