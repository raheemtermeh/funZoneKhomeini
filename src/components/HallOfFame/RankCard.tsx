import { Crown, Medal, Flame, Star } from "lucide-react";

const RankCard = ({ player, isChampion = false }) => {
  const progress = (player.xp / player.xpNeeded) * 100;

  const medalColors = {
    1: "from-yellow-300 to-yellow-600 shadow-yellow-500/50",
    2: "from-gray-300 to-gray-500 shadow-gray-400/50",
    3: "from-orange-400 to-orange-700 shadow-orange-500/50",
  };

  return (
    <div
      className={`
        relative w-full max-w-xs p-6 rounded-2xl
        bg-gray-900/60 backdrop-blur-xl border border-white/10
        shadow-[0_0_30px_rgba(0,255,255,0.25)]
        transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/40
        ${isChampion ? "shadow-[0_0_45px_rgba(255,215,0,0.6)]" : ""}
      `}
    >
      {/* تاج ویژه نفر اول */}
      {isChampion && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2">
          <Crown className="w-14 h-14 text-yellow-400 drop-shadow-[0_0_20px_gold]" />
        </div>
      )}

      {/* مدال */}
      <div
        className={`
    absolute -top-4 -left-4 p-3 rounded-full shadow-lg
    bg-gradient-to-br ${medalColors[player.rank] || "from-cyan-400 to-cyan-700"}
  `}
      >
        <Medal className="w-6 h-6 text-yellow-500" />
      </div>

      <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg">
        <img
          src={player.avatarUrl}
          alt={player.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* نام و عنوان */}
      <div className="text-center mt-4">
        <h2 className="text-2xl font-extrabold text-white">{player.name}</h2>
        <p className="text-cyan-300 text-sm tracking-wide">{player.title}</p>
      </div>

      {/* XP Progress */}
      <div className="mt-4">
        <div className="flex justify-between text-xs text-gray-400">
          <span>Level {player.level}</span>
          <span>
            {player.xp}/{player.xpNeeded} XP
          </span>
        </div>

        <div className="w-full h-2 bg-gray-700 rounded-full mt-2 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* آمار */}
      <div className="mt-4 grid grid-cols-3 text-center">
        <div>
          <p className="text-xl font-bold text-green-400">{player.wins}</p>
          <p className="text-xs text-gray-500">Wins</p>
        </div>
        <div>
          <p className="text-xl font-bold text-red-400">{player.losses}</p>
          <p className="text-xs text-gray-500">Losses</p>
        </div>
        <div>
          <p className="text-xl font-bold text-yellow-400">{player.winRate}%</p>
          <p className="text-xs text-gray-500">Win Rate</p>
        </div>
      </div>

      {/* Badges */}
      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        {player.badges.map((badge, i) => (
          <span
            key={i}
            className="
              px-3 py-1 text-xs font-bold
              bg-cyan-500/20 text-cyan-300 border border-cyan-400
              rounded-full shadow-[0_0_10px_rgba(0,255,255,0.4)]
            "
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RankCard;
