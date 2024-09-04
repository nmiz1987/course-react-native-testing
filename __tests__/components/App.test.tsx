import TabOneScreen from "@/app/(tabs)";
import TabTwoScreen from "@/app/(tabs)/two";
import { render } from "@testing-library/react-native";

describe("General App tests", () => {
  test("Renders Tab 1 correctly", () => {
    const tree = render(<TabOneScreen />);
    expect(tree).toMatchSnapshot();
  });

  test("Renders Tab 2 correctly", () => {
    const tree = render(<TabTwoScreen />);
    expect(tree).toMatchSnapshot();
  });
});
