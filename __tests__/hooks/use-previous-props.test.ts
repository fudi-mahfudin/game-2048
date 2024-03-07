import usePreviousProps from "@/hooks/use-previous-props";
import { renderHook } from "@testing-library/react";

describe("usePreviousProps", () => {
  test("should return undefined for the first render", () => {
    const { result } = renderHook(() => usePreviousProps("initial value"));

    expect(result.current).toBeUndefined();
  });

  test("should return the previous value of the prop", () => {
    const { result, rerender } = renderHook(
      ({ value }) => usePreviousProps(value),
      { initialProps: { value: "initial value" } }
    );

    rerender({ value: "updated value" });

    expect(result.current).toEqual("initial value");
  });
});
