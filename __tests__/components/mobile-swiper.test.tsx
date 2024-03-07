import MobileSwiper from "@/components/mobile-swiper";
import { fireEvent, render, screen } from "@testing-library/react";

describe("MobileSwiper", () => {
  test("should trigger onSwipe with correct input on touch end", () => {
    const onSwipeMock = jest.fn();
    render(
      <MobileSwiper onSwipe={onSwipeMock}>
        <div data-testid="swipe-target">Swipe me!</div>
      </MobileSwiper>
    );

    const swipeTarget = screen.getByTestId("swipe-target");

    fireEvent.touchStart(swipeTarget, {
      touches: [{ clientX: 0, clientY: 0 }],
    });
    fireEvent.touchEnd(swipeTarget, {
      touches: [{ clientX: 50, clientY: 0 }],
    });

    expect(onSwipeMock).toHaveBeenCalledWith({ deltaX: 50, deltaY: 0 });
  });

  test.skip("should not trigger onSwipe if touch is outside the component", () => {
    const onSwipeMock = jest.fn();
    render(
      <MobileSwiper onSwipe={onSwipeMock}>
        <div data-testid="swipe-target">Swipe me!</div>
      </MobileSwiper>
    );
    const swipeTarget = screen.getByTestId("swipe-target");

    fireEvent.touchStart(swipeTarget, {
      touches: [{ clientX: 0, clientY: 0 }],
    });
    fireEvent.touchEnd(swipeTarget, {
      touches: [{ clientX: 50, clientY: 0 }],
    });

    expect(onSwipeMock).not.toHaveBeenCalled();
  });
});
