import { useState } from "react";
import { Splash } from "./components/birthday/Splash";
import { Welcome } from "./components/birthday/Welcome";
import { GiftBox } from "./components/birthday/GiftBox";
import { Letter } from "./components/birthday/Letter";
import { Reasons } from "./components/birthday/Reasons";
import { Game } from "./components/birthday/Game";
import { Countdown } from "./components/birthday/Countdown";
import { Final } from "./components/birthday/Final";

type Scene =
  | "splash"
  | "welcome"
  | "gift"
  | "letter"
  | "reasons"
  | "game"
  | "countdown"
  | "final";

const ORDER: Scene[] = [
  "splash",
  "welcome",
  "gift",
  "letter",
  "reasons",
  "game",
  "countdown",
  "final",
];

export default function App() {
  const [scene, setScene] = useState<Scene>("splash");

  const advance = () => {
    const i = ORDER.indexOf(scene);
    setScene(ORDER[Math.min(ORDER.length - 1, i + 1)]);
  };

  const restart = () => setScene("welcome");

  return (
    <main>
      {scene === "splash" && <Splash onDone={advance} />}
      {scene === "welcome" && <Welcome onStart={advance} />}
      {scene === "gift" && <GiftBox onOpen={advance} />}
      {scene === "letter" && <Letter onNext={advance} />}
      {scene === "reasons" && <Reasons onNext={advance} />}
      {scene === "game" && <Game onWin={advance} />}
      {scene === "countdown" && <Countdown onNext={advance} />}
      {scene === "final" && <Final onReplay={restart} />}
    </main>
  );
}