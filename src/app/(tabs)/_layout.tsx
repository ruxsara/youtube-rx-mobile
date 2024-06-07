import AddIcon from "@assets/icons/add.svg";
import Home from "@assets/icons/home.svg";
import Shorts from "@assets/icons/shorts.svg";
import Subscriptions from "@assets/icons/subscriptions.svg";
import You from "@assets/icons/you.svg";
import { PlusModal } from "@components/plus-modal";
import { useClientOnlyValue } from "@components/useClientOnlyValue";
import { useColorScheme } from "@components/useColorScheme";
import Colors from "@constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import React, { useState } from "react";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {openModal ? (
        <PlusModal openModal={openModal} setOpenModal={setOpenModal} />
      ) : (
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
            // Disable the static render of the header on web
            // to prevent a hydration error in React Navigation v6.
            headerShown: useClientOnlyValue(false, true),
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              tabBarIcon: ({ color }) => <Home color={color} />,
              headerShown: false,
            }}
          />
          <Tabs.Screen
            name="two"
            options={{
              headerShown: false,
              title: "Shorts",
              tabBarIcon: ({ color }) => <Shorts color={color} />,
            }}
          />

          <Tabs.Screen
            name="plus"
            options={{
              title: "",
              tabBarIcon: ({ color }) => <AddIcon color={color} />,
            }}
            listeners={() => ({
              tabPress: (e) => {
                console.log("saaaallam");
                e.preventDefault();
                setOpenModal(true);
              },
            })}
          />

          <Tabs.Screen
            name="subscriptions"
            options={{
              headerShown: false,
              title: "Subscriptions",
              tabBarIcon: ({ color }) => <Subscriptions color={color} />,
            }}
          />
          <Tabs.Screen
            name="you"
            options={{
              title: "You",
              tabBarIcon: ({ color }) => <You color={color} />,
              headerShown:false
            }}
          />
          
        
        </Tabs>
      )}
    </>
  );
}
