import { ImageSourcePropType } from "react-native";

export interface Conversation {
  id: string;
  username: string;
  lastMessage: string;
  time: string;
  avatar: ImageSourcePropType;
}

export const CONVERSATIONS: Conversation[] = [
  {
    id: "1",
    username: "ryan_.dzyn",
    lastMessage: "Sent a post",
    time: "48w",
    avatar: { uri: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" },
  },
  {
    id: "2",
    username: "lucky_duck187",
    lastMessage: "Did you see that new update?",
    time: "2d",
    avatar: { uri: "https://i.pravatar.cc/150?img=12" },
  },
  {
    id: "3",
    username: "catchmenever_68_.ach",
    lastMessage: "Shared a thread",
    time: "5d",
    avatar: { uri: "https://i.pravatar.cc/150?img=33" },
  },
  {
    id: "4",
    username: "streamer_conspiracy",
    lastMessage: "Check the latest drop 🔥",
    time: "1w",
    avatar: { uri: "https://i.pravatar.cc/150?img=60" },
  },
  {
    id: "5",
    username: "retro_vibes99",
    lastMessage: "Sent an attachment",
    time: "3w",
    avatar: { uri: "https://i.pravatar.cc/150?img=47" },
  },
  {
    id: "6",
    username: "neo_tokyo.drift",
    lastMessage: "Check out this reel haha",
    time: "4h",
    avatar: { uri: "https://i.pravatar.cc/150?img=68" },
  },
  {
    id: "7",
    username: "pixel_craftsman",
    lastMessage: "Are we still meeting up tomorrow?",
    time: "6h",
    avatar: { uri: "https://i.pravatar.cc/150?img=59" },
  },
  {
    id: "8",
    username: "chill_lofi_beats",
    lastMessage: "Sent a voice message (0:42)",
    time: "12h",
    avatar: { uri: "https://i.pravatar.cc/150?img=53" },
  },
  {
    id: "9",
    username: "espresso_enthusiast",
    lastMessage: "Reacted ❤️ to your story",
    time: "1d",
    avatar: { uri: "https://i.pravatar.cc/150?img=32" },
  },
  {
    id: "10",
    username: "samantha.codes",
    lastMessage: "Did you finish the assignment yet?",
    time: "2d",
    avatar: { uri: "https://i.pravatar.cc/150?img=44" },
  },
  {
    id: "11",
    username: "urban_wanderer_",
    lastMessage: "Sent a photo",
    time: "3d",
    avatar: { uri: "https://i.pravatar.cc/150?img=17" },
  },
  {
    id: "12",
    username: "vinyl_archive",
    lastMessage: "Shared a song link",
    time: "4d",
    avatar: { uri: "https://i.pravatar.cc/150?img=28" },
  },
  {
    id: "13",
    username: "dev_daily_dose",
    lastMessage: "That new React 19 compiler is wild",
    time: "1w",
    avatar: { uri: "https://i.pravatar.cc/150?img=15" },
  },
  {
    id: "14",
    username: "synthwave_dreams",
    lastMessage: "Sent a post",
    time: "2w",
    avatar: { uri: "https://i.pravatar.cc/150?img=36" },
  },
  {
    id: "15",
    username: "mountain_air_explores",
    lastMessage: "Sounds good, see you then!",
    time: "3w",
    avatar: { uri: "https://i.pravatar.cc/150?img=50" },
  },
];
