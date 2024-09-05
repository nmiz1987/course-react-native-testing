import { render, fireEvent } from "@testing-library/react-native";
import TabOneScreen from "../../app/(tabs)/index";

describe("TabOneScreen", () => {
  it("renders correctly", () => {
    const { getByTestId, getByPlaceholderText, getByRole } = render(<TabOneScreen />);

    expect(getByRole("img")).toBeTruthy();
    expect(getByTestId("title").props.children).toBe("Galaxies Feed");
    expect(getByTestId("separator")).toBeTruthy();
    expect(getByPlaceholderText("Search galaxies")).toBeTruthy();
  });

  it("updates search text correctly", () => {
    const { getByPlaceholderText, getByText } = render(<TabOneScreen />);
    const searchInput = getByPlaceholderText("Search galaxies");

    fireEvent.changeText(searchInput, "Milky Way");
    expect(getByText("Searched for: Milky Way")).toBeTruthy();
  });

  it("does not show searched text when input is empty", () => {
    const { queryByText } = render(<TabOneScreen />);

    expect(queryByText(/Searched for:/)).toBeNull();
  });
});
