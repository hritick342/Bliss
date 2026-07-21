export const RECIPIENT = {
  name: "Sipra",
  // Birthday: August 14
  birthMonth: 8,
  birthDay: 14,
};

export const LETTER = `My dearest Sipra,

Today the whole world gets to celebrate what I already knew — that you are one of a kind. Your laugh, your kindness, the way your eyes light up when you're excited about something small... every little thing about you makes this life warmer.

I built this tiny world just for you. Tap through it slowly. Every reason, every heart, every second on the clock — it's all a way of saying:

I'm so glad you were born. Happy Birthday. ❤️`;

export const FINAL_MESSAGE = `Thank you for being part of my life.\nHappy Birthday, Sipra ❤️`;

export const QUOTES: string[] = [
  "You are my favorite person.",
  "Every day with you is a gift.",
  "You make ordinary moments extraordinary.",
  "Forever starts with today.",
  "The world got softer the day you arrived.",
  "You are the reason I believe in good things.",
  "Your smile is my favorite view.",
  "I'd choose you in every version of this life.",
];

// 100 reasons — heartfelt, varied. Feel free to edit any line.
export const REASONS: string[] = [
  "You always make me smile.",
  "You inspire me every single day.",
  "You make every day better just by being in it.",
  "Your laugh is my favorite sound in the world.",
  "You believe in me even when I forget to.",
  "You're kind in the smallest, quietest ways.",
  "You're brave when it counts.",
  "You make ordinary days feel like celebrations.",
  "You listen like it's the most important thing you'll do all day.",
  "You have the softest heart and the strongest spirit.",
  "You care about people fiercely.",
  "You remember the little things.",
  "You're the calm in every one of my storms.",
  "You make my problems feel smaller.",
  "You make my joys feel bigger.",
  "You are my safe place.",
  "You are my favorite adventure.",
  "You're impossibly patient with me.",
  "You make me want to be better.",
  "You always find the light, even when it's hiding.",
  "Your hugs feel like home.",
  "You dance even when no one's watching.",
  "You sing off-key and make it beautiful.",
  "You cry at the good parts of movies. I love that.",
  "You send the sweetest good-morning messages.",
  "You are impossibly thoughtful.",
  "You forgive so gracefully.",
  "You never make me feel small.",
  "You root for the people you love, loudly.",
  "You have the most beautiful mind.",
  "You are so wildly creative.",
  "You are so wildly smart.",
  "You are so wildly YOU.",
  "You make me laugh until my stomach hurts.",
  "You know exactly when I need silence.",
  "You know exactly when I need words.",
  "You show up. Every time.",
  "You're the person I want to tell everything first.",
  "You make coffee taste better.",
  "You make rainy days feel cozy.",
  "You make sunny days feel golden.",
  "You are proof that gentle people are the strongest.",
  "You have the prettiest eyes.",
  "You have the softest hands.",
  "Your handwriting is a whole personality.",
  "You are effortlessly stylish.",
  "You are effortlessly kind — even when it's hard.",
  "You love without keeping score.",
  "You are patient with growth — mine and yours.",
  "You never stop learning.",
  "You ask the best questions.",
  "You give the best advice.",
  "You give even better hugs.",
  "You make silly voices when no one's around.",
  "You have a heart that notices lonely people.",
  "You are the reason many things in my life are beautiful.",
  "You make me feel chosen.",
  "You make me feel seen.",
  "You make me feel safe.",
  "You make me feel completely, ridiculously loved.",
  "You are the best storyteller.",
  "You laugh at your own jokes and it's the cutest thing.",
  "You take care of everyone around you.",
  "You deserve to be taken care of, too.",
  "You are somebody's favorite memory.",
  "You are somebody's happiest thought.",
  "You are somebody's answered prayer.",
  "You are mine.",
  "You are worth every single one of these 100 reasons.",
  "You handle hard days with so much grace.",
  "You keep going even when it's heavy.",
  "You cheer for tiny victories.",
  "You celebrate other people's wins like your own.",
  "You are unreasonably good at making a room feel warm.",
  "You are the reason ordinary songs make me emotional.",
  "You always find the best restaurants.",
  "You always order the best desserts.",
  "You always share your fries. That's love.",
  "You are the queen of little surprises.",
  "You make lists and cross things off dramatically.",
  "You're a soft place for tired people.",
  "You are proof that soft is powerful.",
  "You never let anyone dim your light.",
  "You never dim anyone else's.",
  "You are so, so easy to love.",
  "You are the reason my heart is louder.",
  "You make waking up something to look forward to.",
  "You make going to sleep feel peaceful.",
  "You are the middle of my every day.",
  "You are my best kind of ordinary.",
  "You are my favorite kind of extraordinary.",
  "You are the person I'd call at 3 a.m.",
  "You are the person I'd call at 3 p.m. just because.",
  "You have the most beautiful soul.",
  "You laugh with your whole body.",
  "You feel with your whole heart.",
  "You love with your whole self.",
  "You are magic in human form.",
  "You are proof that the universe pays attention.",
  "You matter. So much. To so many people.",
  "This world is a warmer place because you're in it.",
  "I hope this birthday is only the beginning.",
  "And I hope you know — you are so, so loved. ❤️",
];

// Days until next Aug 14 (from now)
export function getNextBirthday(now = new Date()): Date {
  const year = now.getFullYear();
  let bday = new Date(year, RECIPIENT.birthMonth - 1, RECIPIENT.birthDay, 0, 0, 0);
  if (bday.getTime() <= now.getTime()) {
    bday = new Date(year + 1, RECIPIENT.birthMonth - 1, RECIPIENT.birthDay, 0, 0, 0);
  }
  return bday;
}

export function getCountdown(now = new Date()) {
  const target = getNextBirthday(now);
  const diff = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  const seconds = Math.floor((diff % 60_000) / 1_000);
  return { days, hours, minutes, seconds, target };
}

// Deterministic daily quote based on day of year
export function getDailyQuote(now = new Date()): string {
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now.getTime() - start.getTime()) / 86_400_000);
  return QUOTES[dayOfYear % QUOTES.length];
}
