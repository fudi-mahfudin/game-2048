import Board from "@/components/board";
import Score from "@/components/score";
import GameProvider from "@/context/game-context";
import { fireEvent, render } from "@testing-library/react";

describe("GameProvider", () => {
  describe("startGame", () => {
    test("should start the game with two tiles", () => {
      const { container } = render(
        <GameProvider>
          <Board />
        </GameProvider>
      );

      expect(container.querySelectorAll(".tile")).toHaveLength(2);
    });
  });

  describe("getTiles", () => {
    test("should return tiles", () => {
      const { container } = render(
        <GameProvider>
          <Board />
        </GameProvider>
      );

      expect(container.querySelectorAll(".tile")).toHaveLength(2);
    });
  });

  describe("moveTiles", () => {
    test("should move tiles and merge them together", () => {
      const { container } = render(
        <GameProvider>
          <Board />
        </GameProvider>
      );

      expect(container.querySelectorAll(".tile4")).toHaveLength(0);
      expect(container.querySelectorAll(".tile2")).toHaveLength(2);

      fireEvent.keyDown(container, {
        key: "ArrowUp",
        code: "ArrowUp",
      });

      expect(container.querySelectorAll(".tile4")).toHaveLength(1);
      expect(container.querySelectorAll(".tile2")).toHaveLength(1);
    });
  });

  describe("score", () => {
    test("should return score", () => {
      const { container } = render(
        <GameProvider>
          <Score />
          <Board />
        </GameProvider>
      );

      expect(container.querySelector(".score > div")?.textContent).toEqual("0");
    });

    test("should refresh score after move", () => {
      const { container } = render(
        <GameProvider>
          <Score />
          <Board />
        </GameProvider>
      );

      expect(container.querySelector(".score > div")?.textContent).toEqual("0");

      fireEvent.keyDown(container, {
        key: "ArrowUp",
        code: "ArrowUp",
      });

      expect(container.querySelector(".score > div")?.textContent).toEqual("4");
    });
  });
});
