import { ResizeMode, Video } from "expo-av";
import * as React from "react";
import { View } from "react-native";

export const VideoCard = ({item}:any) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View>
      <Video
        ref={video}
        className="w-full h-[200px] mt-4"
        source={{
          uri: item.uri,
        }}
        useNativeControls={false}
        resizeMode={ResizeMode.COVER}
        isLooping
        shouldPlay
        isMuted
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
};
