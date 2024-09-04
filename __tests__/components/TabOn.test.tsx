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
});
