import { INITIAL_POSTS, Post } from "./postsData";

export interface ActivityItem {
    id: string;
    type: "post" | "follow";
    time: string;
    subtitle: string;
    isVerified?: boolean;
    post?: Post;
    user? : { username: string; avatar: string; };
}

export interface ActivitySection {
    title: string;
    data: ActivityItem[];
}

export const ACTIVITY_SECTIONS: ActivitySection[] = [
  {
    title: "Today",
    data: [
      {
        id: "act-1",
        type: "post",
        time: "10h",
        subtitle: "Suggested thread",
        post: INITIAL_POSTS[1], // reuses catchmenever_68_.ach (has image & text!)
      },
    ],
  },
  {
    title: "Last 30 days",
    data: [
      {
        id: "act-2",
        type: "follow",
        time: "4d",
        subtitle: "Follow suggestion",
        user: {
          username: "llyandro_",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
        },
      },
      {
        id: "act-3",
        type: "post",
        time: "1w",
        subtitle: "Because you follow",
        isVerified: true,
        post: INITIAL_POSTS[2], // reuses streamer_conspiracy
      },
      {
        id: "act-4",
        type: "post",
        time: "3w",
        subtitle: "Conversation you missed",
        isVerified: true,
        post: INITIAL_POSTS[3], // reuses dev_danielle
      },
    ],
  },
];