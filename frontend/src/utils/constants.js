export const studyTips = [
  {
    title: "Turn your phone upside down",
    content:
      "While you're working on a study activity, eliminate distractions by keeping your screen out of view. Wait to read and respond to any non-urgent messages until your timer goes off.",
    img: "https://abcwildlife.com/wp-content/uploads/2016/02/Squirrel-Control-1080x675.jpg",
  },
  {
    title: "Find your study spot",
    content:
      "Think about finding a regular spot to study -- and only study. Studying in bed can be cozy, but it helps to have a place your brain associates with concentration and learning.",
    img: "https://abcwildlife.com/wp-content/uploads/2016/02/Squirrel-Control-1080x675.jpg",
  },
  {
    title: "Get a good night's sleep!",
    content:
      "Sleep is when you commit information to long-term memory. Give yourself plenty of time to rest and the material will stick with you for much longer.",
    img: "https://media.istockphoto.com/id/1280810562/photo/sleeping-beauty.jpg?s=612x612&w=0&k=20&c=N_gLDSrdVWMX2McVR_KTYfQ5V96_6MscffpQF33EGdY=",
  },
  {
    title: "Go get some water",
    content:
      "Move around, stay hydrated. Your body needs to be healthy and comfortable for your mind to concentrate.",
    img: "https://imgcdn.stablediffusionweb.com/2024/3/27/e18aa0dd-6070-477e-909e-67b0f1c06fe4.jpg",
  },
  {
    title: "Treat yourself",
    content:
      "Do something that makes you happy. Chat with a friend, watch a funny video or eat a chocolate. Rewarding yourself when you meet a goal can help form good habits.",
    img: "https://img.freepik.com/premium-photo/squirrel-wearing-glasses-that-say-squirrel_825862-468.jpg",
  },
  {
    title: "Plan ahead",
    content:
      "You don't have to do everything today. Go ahead and make a study plan for the next couple of days and reserve specific blocks of time in your calendar.",
    img: "https://t4.ftcdn.net/jpg/06/09/07/89/240_F_609078976_AE3GkSdlJCIi5AwdxmaunW0mb8RwDf3h.jpg",
  },
  {
    title: "Find a study buddy",
    content:
      "Friends can help you stay accountable to a study plan. And explaining new material to someone else is one of the best ways to check your memory and understanding.",
    img: "https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/website/uploaded/squirrel-8367079-1280-1724852308.jpg",
  },
];

export const breakPageButtons = [
  { text: "new activity", path: "/activity", class: "breakpage__activity-btn" },
  { text: "reset timer", path: "/studypage", class: "breakpage__reset-btn" },
];

export const breakPageText =
  "Good job! You've focused for 20 minutes and you should take a break, clear your mind, and reward yourself. Choose from your options below when you're ready to keep studying:";

export const threepeatButtons = [
  {
    text: "I'll work for 20 more minutes",
    path: "/studypage",
    class: "breakpage__continue-btn",
  },
  {
    text: "I'm done with this topic for now",
    path: "/",
    class: "threepeat__done-btn",
  },
  {
    text: "Log out",
    path: "/farewell",
    class: "threepeat__logout-btn",
  },
];

export const threepeatText =
  "Wow! You've been through 3 study sessions and we recommend taking a longer break. Most people can concentrate on a single task for about an hour. You can choose to continue on this activity for one more 20-minute session or step away for now. You can also click below for another tip before you go!";
