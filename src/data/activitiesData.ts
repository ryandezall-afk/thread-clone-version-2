// Assignment 2 - Threads Clone
// Data Model: ActivityItem & ActivitySection (Notifications, follow suggestions, post activity links)

import { INITIAL_POSTS, Post } from "./postsData";

export interface ActivityItem {
  id: string;
  type: "post" | "follow";
  time?: string;
  subtitle: string;
  post?: Post;
  user?: { username: string; avatar: string };
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
        subtitle: "Suggested thread",
        post: INITIAL_POSTS[1], // reuses catchmenever_68_.ach (has time: "10h" in postsData!)
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
          username: "for_the_people_456",
          avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
        },
      },
      {
        id: "act-3",
        type: "post",
        subtitle: "Because you follow",
        post: INITIAL_POSTS[2], // reuses streamer_conspiracy (has isVerified & time: "1w" in postsData!)
      },
      {
        id: "act-4",
        type: "post",
        subtitle: "Conversation you missed",
        post: INITIAL_POSTS[3], // reuses dev_danielle (has isVerified & time: "3w" in postsData!)
      },
    ],
  },
];
