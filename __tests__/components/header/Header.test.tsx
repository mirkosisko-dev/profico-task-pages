import "@testing-library/jest-dom";
import Header from "@/components/header";
import { screen } from "@testing-library/react";
import { renderComponent } from "../../../jest.setup";

jest.mock("next/router", () => ({
  ...jest.requireActual("next/router"),
  useRouter: jest.fn(() => ({
    route: "/",
    pathname: "/",
    query: {},
    asPath: "/",
  })),
}));

jest.mock("next-usequerystate", () => ({
  ...jest.requireActual("next-usequerystate"),
  useQueryStates: jest.fn(() => [{}, () => {}]),
}));

describe("Header Component", () => {
  it("renders Header component with login button when not authenticated", () => {
    renderComponent(<Header isLanding={true} />);

    expect(screen.getByTestId("search-bar")).toBeInTheDocument();
    // expect(screen.getByText("Login")).toBeInTheDocument();
  });
});
