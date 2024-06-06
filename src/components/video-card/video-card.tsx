import { VideoEntity } from "@constants/types";
import { ResizeMode, Video } from "expo-av";
import { router } from "expo-router";
import * as React from "react";
import { TouchableOpacity } from "react-native";


interface VideoCardProps {
  video: VideoEntity;
}

export const VideoCard = ({ video }: VideoCardProps) => {
  const { id, uri } = video;
  const videoRef = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <TouchableOpacity onPress={() => router.replace(`/(app)/video/${id}`)}>
      <Video
        ref={videoRef}
        className="w-full h-[200px] mt-4"
        source={{
          uri: uri,
        }}
        useNativeControls={false}
        resizeMode={ResizeMode.COVER}
        isLooping
        shouldPlay
        isMuted
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </TouchableOpacity>
  );
};
