import { Trophy, Crown, Medal, Flame, Star } from "lucide-react";
import RankCard from "./RankCard";

interface PlayerRank {
  rank: number;
  name: string;
  points: number;
  title: string;
  avatarUrl: string;
  wins: number;
  losses: number;
  winRate: number;
  badges: string[];
  level: number;
  xp: number;
  xpNeeded: number;
}

const mockTopPlayers: PlayerRank[] = [
  {
    rank: 1,
    name: "Raheem Termeh",
    points: 12500,
    title: "KING OF MAFIA",
    avatarUrl: "/images/photo_3_2025-11-08_12-13-29.jpg",
    wins: 242,
    losses: 32,
    winRate: 88,
    badges: ["MAFIA MASTER", "NIGHT HUNTER", "SHARP MIND"],
    level: 57,
    xp: 8400,
    xpNeeded: 10000,
  },
  {
    rank: 2,
    name: "Neon_Shadow",
    points: 10200,
    title: "Master Strategist",
avatarUrl: "/images/photo_1_2025-11-08_12-13-29.jpg",    wins: 190,
    losses: 51,
    winRate: 78,
    badges: ["STRATEGIST", "DEEP THINKER"],
    level: 54,
    xp: 7000,
    xpNeeded: 10000,
  },
  {
    rank: 3,
    name: "Cyber_Queen",
    points: 8850,
    title: "Rumi Specialist",
avatarUrl: "/images/photo_2_2025-11-08_12-13-29.jpg",    wins: 165,
    losses: 60,
    winRate: 73,
    badges: ["RUMI SPECIALIST", "LOGICIAN"],
    level: 49,
    xp: 6100,
    xpNeeded: 9000,
  },
];

const MonthlyTopPlayers = ({ topPlayers = mockTopPlayers }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-end lg:items-center gap-10 p-6">
      {/* Rank #2 */}
      <div className="order-2 lg:order-1 lg:mt-20 w-full lg:w-1/3 flex justify-center">
        <RankCard player={topPlayers[1]} />
      </div>

      {/* Rank #1 */}
      <div className="order-1 lg:order-2 w-full lg:w-1/3 flex justify-center">
        <RankCard player={topPlayers[0]} isChampion />
      </div>

      {/* Rank #3 */}
      <div className="order-3 lg:order-3 lg:mt-20 w-full lg:w-1/3 flex justify-center">
        <RankCard player={topPlayers[2]} />
      </div>
    </div>
  );
};

export default MonthlyTopPlayers;
