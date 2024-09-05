import TabOneScreen from "@/app/(tabs)";
import { render, screen, fireEvent } from "@testing-library/react-native";

describe("<TabOneScreen />", () => {
  test("Shows 'Galaxies Feed' text by test ID", () => {
    const { getByTestId } = render(<TabOneScreen />);
    const title = getByTestId("title").props.children;
    expect(title).toBe("Galaxies Feed");
  });

  test("Shows 'Galaxies Feed' text by text v1", () => {
    const { getByText } = render(<TabOneScreen />);
    const title = getByText("Galaxies Feed");
    expect(title).toBeTruthy;
  });

  test("Shows 'Galaxies Feed' text by text v2", () => {
    render(<TabOneScreen />);
    const title = screen.getByText("Galaxies Feed");
    expect(title).toBeTruthy();
  });

  test("Shows the logo", () => {
    render(<TabOneScreen />);
    const logo = screen.getByRole("img");
    expect(logo.props.source.uri).toEqual("https://galaxies.dev/img/logos/logo--blue.png");
  });

  test("Shows the separator", () => {
    render(<TabOneScreen />);
    const separator = screen.getByTestId("separator");
    expect(separator).toBeTruthy();
  });

  test("Shows the search input", () => {
    render(<TabOneScreen />);
    const search = "my search screen";
    fireEvent.changeText(screen.getByPlaceholderText("Search galaxies"), search);
    expect(screen.getByDisplayValue(search)).toBeTruthy();
  });

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
