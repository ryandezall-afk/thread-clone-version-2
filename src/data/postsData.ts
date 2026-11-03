export interface Post {
  id: string;
  username: string;
  avatar: string;
  isVerified?: boolean;
  time?: string;
  uniqueContent?: string;
  paragraphs?: string[];
  content?: string;
  images?: string[];
  likes?: number | string;
  comments?: number | string;
  reposts?: number | string;
  shares?: number | string;
  views?: number | string;
  replies?: PostReplies[];
}

export interface PostReplies {
  id: string;
  username: string;
  avatar: string;
  content: string;
  time: string;
  likes?: number | string;
}

export const INITIAL_POSTS: Post[] = [
  {
    id: "1",
    username: "lucky_duck187",
    avatar: "https://i.pravatar.cc/150?img=12",
    time: "2h",
    uniqueContent: "What's New?",
    views: "1,240",
    replies: [
      {
        id: "rep-1-1",
        username: "pixel_craftsman",
        avatar: "https://i.pravatar.cc/150?img=59",
        content:
          "Working on a new mobile app layout! Loving Expo Router so far.",
        time: "3h",
        likes: "5",
      },
      {
        id: "rep-1-2",
        username: "samantha.codes",
        avatar: "https://i.pravatar.cc/150?img=44",
        content:
          "Just finished debugging an async state issue. Time for coffee ☕️",
        time: "2h",
        likes: "12",
      },
      {
        id: "rep-1-3",
        username: "urban_wanderer_",
        avatar: "https://i.pravatar.cc/150?img=17",
        content: "Heading out for an evening street photography walk!",
        time: "45m",
        likes: "3",
      },
    ],
  },
  {
    id: "2",
    username: "catchmenever_68_.ach",
    avatar: "https://i.pravatar.cc/150?img=33",
    time: "10h",
    paragraphs: [
      "Check out this amazing sunset! I went hiking today and captured this beautiful moment.",
      "Golden hour hit the ridge just right tonight. Still can’t believe we caught the sky looking like painted watercolor.",
      "The trek back down in the dark was an adventure in itself, but views like this make every steep step completely worth it. Definitely making this trail a regular weekend spot.",
    ],
    images: [
      "https://picsum.photos/seed/hike1/600/450",
      "https://picsum.photos/seed/hike2/600/450",
      "https://picsum.photos/seed/hike3/600/450",
    ],
    likes: "678",
    comments: "61",
    reposts: "18",
    shares: "13",
    views: "18,450",
    replies: [
      {
        id: "rep-2-1",
        username: "pixel_craftsman",
        avatar: "https://i.pravatar.cc/150?img=59",
        content:
          "That sky gradient in the second slide is unreal. What camera did you take this on?",
        time: "4h",
        likes: "24",
      },
      {
        id: "rep-2-2",
        username: "mountain_air_explores",
        avatar: "https://i.pravatar.cc/150?img=50",
        content:
          "Which trail is this? Looks like the Ha Ling ridge trail in Canmore!",
        time: "3h",
        likes: "18",
      },
      {
        id: "rep-2-3",
        username: "urban_wanderer_",
        avatar: "https://i.pravatar.cc/150?img=17",
        content:
          "Hiking back down in the dark is always an adrenaline rush haha. Worth it for that view.",
        time: "1h",
        likes: "9",
      },
      {
        id: "rep-2-4",
        username: "retro_vibes99",
        avatar: "https://i.pravatar.cc/150?img=47",
        content: "Adding this to my weekend bucket list immediately 🙌",
        time: "20m",
        likes: "4",
      },
    ],
  },
  {
    id: "3",
    username: "streamer_conspiracy",
    avatar: "https://i.pravatar.cc/150?img=60",
    isVerified: true,
    time: "1w",
    paragraphs: [
      "Remember when streaming was supposed to save us from cable? For a glorious few years, paying $8 a month gave you instant access to virtually every movie and show you actually cared about, with zero commercial interruptions and an interface that just worked. It felt like the future had finally arrived, completely dismantling the bloated, predatory channel bundles that made traditional television so unbearable to deal with.",
      'Fast forward to today, and we’ve somehow engineered an ecosystem that is exponentially worse and more expensive than cable ever was. Every legacy media studio decided they needed their own proprietary platform, chopped up classic catalogs into exclusive licensing silos, and steadily hiked prices every six months. Now you need four or five separate subscriptions just to follow basic pop culture, only to still get hit with 90-second unskippable ad breaks on an "ad-supported tier" you are literally already paying for.',
    ],
    likes: "2,345",
    comments: "101",
    reposts: "59",
    shares: "45",
    views: "94,320",
    replies: [
      {
        id: "rep-3-1",
        username: "dev_daily_dose",
        avatar: "https://i.pravatar.cc/150?img=15",
        content:
          "Physical media is making a comeback for this exact reason. You never truly own digital streaming.",
        time: "6h",
        likes: "89",
      },
      {
        id: "rep-3-2",
        username: "synthwave_dreams",
        avatar: "https://i.pravatar.cc/150?img=36",
        content:
          "I cancelled 3 subscriptions last month and set up a home Plex server. Best decision ever.",
        time: "5h",
        likes: "42",
      },
      {
        id: "rep-3-3",
        username: "retro_gamer_rob",
        avatar: "https://i.pravatar.cc/150?img=52",
        content:
          "The ad tier on a paid subscription is the most insulting development in tech history.",
        time: "3h",
        likes: "135",
      },
      {
        id: "rep-3-4",
        username: "tech_insider_yyc",
        avatar: "https://i.pravatar.cc/150?img=11",
        content:
          "Spot on. We came full circle right back to 1990s cable bundles, just with logins instead of coax cables.",
        time: "1h",
        likes: "31",
      },
    ],
  },
  {
    id: "4",
    username: "dev_danielle",
    avatar: "https://i.pravatar.cc/150?img=47",
    isVerified: true,
    time: "3w",
    paragraphs: [
      "There is no greater panic than code that works flawlessly on your laptop, but throws a 30-line red screen error the second you test it on your physical phone at midnight.",
      "Root cause? A missing semicolon in a JSON file.",
    ],
    likes: "1,892",
    comments: "214",
    reposts: "140",
    shares: "88",
    views: "45,800",
    replies: [
      {
        id: "rep-4-1",
        username: "samantha.codes",
        avatar: "https://i.pravatar.cc/150?img=44",
        content:
          "Wait until you spend 3 hours debugging only to find out you forgot to re-run npm install 😂",
        time: "5h",
        likes: "67",
      },
      {
        id: "rep-4-2",
        username: "pixel_craftsman",
        avatar: "https://i.pravatar.cc/150?img=59",
        content:
          "The universal developer rite of passage! Glad it wasn't a memory leak.",
        time: "4h",
        likes: "21",
      },
      {
        id: "rep-4-3",
        username: "coffee_and_syntax",
        avatar: "https://i.pravatar.cc/150?img=28",
        content:
          "Always the tiniest punctuation mark causing the biggest existential crisis.",
        time: "2h",
        likes: "40",
      },
    ],
  },
  {
    id: "5",
    username: "neon_wanderer",
    avatar: "https://i.pravatar.cc/150?img=15",
    time: "9h",
    paragraphs: [
      "Tokyo rainy nights hit completely different. Neon reflections in the Shibuya puddles make the entire city look like Blade Runner.",
    ],
    images: [
      "https://picsum.photos/seed/tokyo1/600/450",
      "https://picsum.photos/seed/tokyo2/600/450",
      "https://picsum.photos/seed/tokyo3/600/450",
    ],
    likes: "4,120",
    comments: "89",
    reposts: "312",
    shares: "95",
    views: "112,600",
    replies: [
      {
        id: "rep-5-1",
        username: "neo_tokyo.drift",
        avatar: "https://i.pravatar.cc/150?img=68",
        content:
          "Shibuya crossing in the rain with clear umbrellas is pure cinema.",
        time: "8h",
        likes: "54",
      },
      {
        id: "rep-5-2",
        username: "chill_lofi_beats",
        avatar: "https://i.pravatar.cc/150?img=53",
        content:
          "This photo needs a lo-fi soundtrack playing behind it immediately.",
        time: "6h",
        likes: "33",
      },
      {
        id: "rep-5-3",
        username: "urban_wanderer_",
        avatar: "https://i.pravatar.cc/150?img=17",
        content:
          "Incredible color grading on these shots. Did you shoot with a prime lens?",
        time: "3h",
        likes: "15",
      },
    ],
  },
  {
    id: "6",
    username: "daily_minimalist",
    avatar: "https://i.pravatar.cc/150?img=20",
    time: "8h",
    content: "Less is more. Especially when writing CSS.",
    likes: "8,921",
    comments: "430",
    reposts: "1,120",
    shares: "340",
    views: "295,576",
    replies: [
      {
        id: "rep-6-1",
        username: "samantha.codes",
        avatar: "https://i.pravatar.cc/150?img=44",
        content: "100%! The best code is the code you don't have to write.",
        time: "7h",
        likes: "82",
      },
      {
        id: "rep-6-2",
        username: "dev_daily_dose",
        avatar: "https://i.pravatar.cc/150?img=15",
        content:
          "Flexbox and CSS Grid replaced 200 lines of float hackery, bless modern web standards.",
        time: "5h",
        likes: "49",
      },
      {
        id: "rep-6-3",
        username: "pixel_craftsman",
        avatar: "https://i.pravatar.cc/150?img=59",
        content: "Keep it simple, keep it fast 🎯",
        time: "1h",
        likes: "19",
      },
    ],
  },
  {
    id: "7",
    username: "coffee_and_syntax",
    avatar: "https://i.pravatar.cc/150?img=28",
    time: "5h",
    paragraphs: [
      "Weekend coding sprint fueled by double-shot oat flat whites and lo-fi beats. Building a mobile app in Expo React Native today!",
    ],
    images: [
      "https://picsum.photos/seed/coffee1/600/450",
      "https://picsum.photos/seed/coffee2/600/450",
    ],
    likes: "542",
    comments: "38",
    reposts: "14",
    shares: "9",
    views: "14,890",
    replies: [
      {
        id: "rep-7-1",
        username: "espresso_enthusiast",
        avatar: "https://i.pravatar.cc/150?img=32",
        content:
          "Oat flat whites are the superior developer fuel. Good luck with the sprint!",
        time: "4h",
        likes: "11",
      },
      {
        id: "rep-7-2",
        username: "dev_danielle",
        avatar: "https://i.pravatar.cc/150?img=47",
        content:
          "Expo Router makes multi-screen setups so clean. Enjoy the build!",
        time: "2h",
        likes: "8",
      },
      {
        id: "rep-7-3",
        username: "lucky_duck187",
        avatar: "https://i.pravatar.cc/150?img=12",
        content: "Drop the lo-fi playlist link when you get a chance!",
        time: "1h",
        likes: "5",
      },
    ],
  },
  {
    id: "8",
    username: "retro_gamer_rob",
    avatar: "https://i.pravatar.cc/150?img=52",
    time: "12h",
    paragraphs: [
      "Nothing in modern tech will ever match the sheer terror and adrenaline of waiting to see if your scratched PlayStation 2 disc would boot past the startup sound.",
    ],
    likes: "12.4K",
    comments: "812",
    reposts: "2.3K",
    shares: "650",
    views: "348,200",
    replies: [
      {
        id: "rep-8-1",
        username: "retro_vibes99",
        avatar: "https://i.pravatar.cc/150?img=47",
        content:
          "That red screen of death with the swirling cubes gave an entire generation trust issues.",
        time: "10h",
        likes: "194",
      },
      {
        id: "rep-8-2",
        username: "streamer_conspiracy",
        avatar: "https://i.pravatar.cc/150?img=60",
        content:
          "Wiping the disc on your t-shirt like that would magically fix the laser calibration 😂",
        time: "7h",
        likes: "112",
      },
      {
        id: "rep-8-3",
        username: "vinyl_archive",
        avatar: "https://i.pravatar.cc/150?img=28",
        content:
          "Putting the console vertically or upside down was peak desperate engineering.",
        time: "4h",
        likes: "78",
      },
      {
        id: "rep-8-4",
        username: "synthwave_dreams",
        avatar: "https://i.pravatar.cc/150?img=36",
        content:
          "Still have my PS2 hooked up to a CRT in the basement. Pure nostalgia.",
        time: "2h",
        likes: "35",
      },
    ],
  },
  {
    id: "9",
    username: "arch_digest_daily",
    avatar: "https://i.pravatar.cc/150?img=68",
    time: "6h",
    paragraphs: [
      "Brutalist architecture in modern Scandinavian libraries. The raw concrete angles paired with warm natural timber create insane geometric shadows.",
    ],
    images: [
      "https://picsum.photos/seed/arch1/600/450",
      "https://picsum.photos/seed/arch2/600/450",
    ],
    likes: "1,670",
    comments: "54",
    reposts: "72",
    shares: "31",
    views: "52,140",
    replies: [
      {
        id: "rep-9-1",
        username: "urban_wanderer_",
        avatar: "https://i.pravatar.cc/150?img=17",
        content:
          "The contrast between cold concrete and warm birch wood is unbeatable.",
        time: "5h",
        likes: "27",
      },
      {
        id: "rep-9-2",
        username: "daily_minimalist",
        avatar: "https://i.pravatar.cc/150?img=20",
        content:
          "Natural lighting geometry done right. Amazing reference photo.",
        time: "3h",
        likes: "14",
      },
      {
        id: "rep-9-3",
        username: "pixel_craftsman",
        avatar: "https://i.pravatar.cc/150?img=59",
        content:
          "Would love to spend a quiet rainy afternoon working in that library.",
        time: "1h",
        likes: "8",
      },
    ],
  },
  {
    id: "10",
    username: "tech_insider_yyc",
    avatar: "https://i.pravatar.cc/150?img=11",
    time: "7h",
    paragraphs: [
      "Serious question: What's one mobile app whose UI design you genuinely enjoy opening every day? For me it's Linear and Threads.",
    ],
    likes: "740",
    comments: "310",
    reposts: "45",
    shares: "19",
    views: "29,400",
    replies: [
      {
        id: "rep-10-1",
        username: "samantha.codes",
        avatar: "https://i.pravatar.cc/150?img=44",
        content:
          "Raycast on desktop and Craft on mobile. Both have insane micro-animations.",
        time: "6h",
        likes: "39",
      },
      {
        id: "rep-10-2",
        username: "coffee_and_syntax",
        avatar: "https://i.pravatar.cc/150?img=28",
        content:
          "Airbnb's bottom sheet gesture animations are the gold standard for React Native.",
        time: "4h",
        likes: "25",
      },
      {
        id: "rep-10-3",
        username: "dev_danielle",
        avatar: "https://i.pravatar.cc/150?img=47",
        content:
          "Threads dark mode aesthetic is super clean and minimalist. Great choice.",
        time: "2h",
        likes: "18",
      },
      {
        id: "rep-10-4",
        username: "lucky_duck187",
        avatar: "https://i.pravatar.cc/150?img=12",
        content:
          "Flighty and Bear! The typography attention to detail is unmatched.",
        time: "30m",
        likes: "10",
      },
    ],
  },
];
