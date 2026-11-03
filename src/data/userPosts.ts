import { Post } from "./postsData";

export interface ProfileInterest {
  id: string;
  label: string;
}

export interface UserProfile {
  displayName: string;
  username: string;
  avatar: string;
  bio: string;
  link: string;
  followersCount: string;
  followerAvatars: string[];
  interests: ProfileInterest[];
  posts: Post[];
}

export const USER_PROFILE: UserProfile = {
  displayName: "Freddy",
  username: "freddy_123",
  avatar: "https://i.pravatar.cc/150?img=12",
  bio: "Movies, shows, music and culture.",
  link: "youtube.com/@ryandezall",
  followersCount: "34 followers",
  followerAvatars: [
    "https://i.pravatar.cc/150?img=33",
    "https://i.pravatar.cc/150?img=47",
  ],
  interests: [
    { id: "1", label: "🥊 Marvel" },
    { id: "2", label: "🪄 Star Wars" },
    { id: "3", label: "Music" },
  ],
  posts: [
    {
      id: "prof-1",
      username: "freddy_123",
      avatar: "https://i.pravatar.cc/150?img=12",
      uniqueContent: "What’s new?",
    },
    {
      id: "prof-2",
      username: "freddy_123",
      avatar: "https://i.pravatar.cc/150?img=12",
      time: "2d",
      paragraphs: [
        "Finally got around to rewatching Dune Part 2 in IMAX. The sound design alone deserves every award this season.",
        "That worm riding sequence was cinematic perfection.",
      ],
      images: ["https://picsum.photos/seed/dune/600/400"],
      likes: "142",
      comments: "18",
      reposts: "12",
      shares: "5",
      views: "2.4K",
    },
    {
      id: "prof-3",
      username: "freddy_123",
      avatar: "https://i.pravatar.cc/150?img=12",
      time: "4d",
      paragraphs: [
        "Andor season 2 cannot come soon enough. Still the best piece of Star Wars media we've had in a decade.",
      ],
      likes: "89",
      comments: "24",
      reposts: "7",
      shares: "2",
      views: "1.8K",
    },
    {
      id: "prof-4",
      username: "freddy_123",
      avatar: "https://i.pravatar.cc/150?img=12",
      time: "1w",
      paragraphs: [
        "New vinyl arrived today! Weekend listening sorted. Drop your current album on repeat below 🎧",
      ],
      images: [
        "https://picsum.photos/seed/vinyl/600/400",
        "https://picsum.photos/seed/record/600/400",
      ],
      likes: "67",
      comments: "15",
      reposts: "3",
      shares: "1",
      views: "980",
    },
    {
      id: "prof-5",
      username: "freddy_123",
      avatar: "https://i.pravatar.cc/150?img=12",
      time: "2w",
      paragraphs: [
        "Daredevil: Born Again filming leaks look incredible. If they keep the hallway fight choreography from season 1 we are in for a treat.",
      ],
      images: ["https://picsum.photos/seed/marvel/600/400"],
      likes: "210",
      comments: "42",
      reposts: "31",
      shares: "14",
      views: "4.1K",
    },
  ],
};
