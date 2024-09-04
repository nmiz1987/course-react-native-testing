import TabOneScreen from "@/app/(tabs)";
import GalacticCounter from "@/components/GalacticCounter";
import { render, screen, userEvent } from "@testing-library/react-native";

describe("<TabOneScreen />", () => {
  it("Update the counter", async () => {
    render(<GalacticCounter />);
    const user = userEvent.setup({
      advanceTimers: jest.advanceTimersByTime,
    });

    jest.useFakeTimers();

    const add = screen.getByText("Add");
    const decrease = screen.getByText("Decrease");

    await user.press(add);
    await user.press(add);

    await user.press(decrease);
    await user.press(decrease);
    await user.press(decrease);

    expect(screen.getByText("Stars: -1")).toBeTruthy();
  });
});
