import Close from "@assets/icons/close.svg";
import Live from "@assets/icons/live.svg";
import Create from "@assets/icons/post.svg";
import Short from "@assets/icons/shorts.svg";
import Upload from "@assets/icons/upload.svg";
import { useTheme } from "@react-navigation/native";
import React from "react";
import {
  Alert,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface PlusModalProps {
  openModal: boolean;
  setOpenModal: any;
}

export function PlusModal({ openModal, setOpenModal }: PlusModalProps) {
  const theme = useTheme();

  return (
    <View className="flex-1 justify-end ">
      <Modal
        animationType="slide"
        transparent={true}
        visible={openModal}
        onRequestClose={() => setOpenModal(false)}
      >
        <View className="flex-1 w-full justify-end">
          <View className="bg-[#373737] h-1/2">
            <View className="w-full flex-row justify-between py-4 px-3 items-center ">
              <Text className="text-xl font-bold text-white"> Create</Text>
              <Pressable onPress={() => setOpenModal(!openModal)}>
                <Close width={22} height={22} color={theme.colors.text} />
              </Pressable>
            </View>

            <View className="items-start w-full mt-4">
              <TouchableOpacity>
                <View className="flex-row items-center p-3">
                  <View className="bg-[#4e4c4c] p-3 rounded-full mr-2">
                    <Short width={22} height={22} color={theme.colors.text} />
                  </View>
                  <Text className="text-white text-lg font-medium">
                    Create a Short
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View className="flex-row items-center p-3">
                  <View className="bg-[#4e4c4c] p-3 rounded-full mr-2">
                    <Upload width={22} height={22} color={theme.colors.text} />
                  </View>
                  <Text className="text-white text-lg font-medium">
                    Upload a Video
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View className="flex-row items-center p-3">
                  <View className="bg-[#4e4c4c] p-3 rounded-full mr-2">
                    <Live width={22} height={22} color={theme.colors.text} />
                  </View>
                  <Text className="text-white text-lg font-medium">
                    Go Live
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View className="flex-row items-center p-3">
                  <View className="bg-[#4e4c4c] p-3 rounded-full mr-2">
                    <Create width={22} height={22} color={theme.colors.text} />
                  </View>
                  <Text className="text-white text-lg font-medium ">
                    Create a Post
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
