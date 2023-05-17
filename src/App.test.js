import React from "react";
import {
  render,
  waitFor,
  waitForElementToBeRemoved,
  screen,
} from "@testing-library/react";
//import GridExample from "./GridExample";
import PhelpsExample from "./PhelpsExample";
import preview from "jest-preview";

test("renders all the headers", async () => {
  // Example of a test with unmocked useeffect and still no act warning
  const { getByText } = render(<PhelpsExample />);
  await waitFor(() => expect(getByText("Loading...")).toBeInTheDocument());
  await waitForElementToBeRemoved(screen.queryByText("Loading..."), {
    timeout: 5000,
  });
  await screen.findAllByText("Michael Phelps");
  preview.debug();
});

// describe("the tests", () => {
//   describe("headers", () => {
//     test("renders all the headers", async () => {
//       const { getByText } = render(<GridExample />);
//       expect(getByText("Make")).toBeInTheDocument(); // PASS
//       expect(getByText("Model")).toBeInTheDocument(); // PASS
//       expect(getByText("Price")).toBeInTheDocument(); // PASS
//       expect(getByText("Color")).toBeInTheDocument(); // PASS
//     });
//   });

//   describe("data", () => {
//     test("renders field for make", async () => {
//       const { getByText } = render(<GridExample />);
//       expect(getByText("Toyota")).toBeInTheDocument();
//     });

//     test("renders field for model", async () => {
//       const { getByText } = render(<GridExample />);
//       expect(getByText("Celica")).toBeInTheDocument();
//     });

//     test("renders field for price", async () => {
//       const { getByText } = render(<GridExample />);
//       expect(getByText("35000")).toBeInTheDocument();
//     });

//     test("renders field for color", () => {
//       const { getByText } = render(<GridExample />);
//       expect(getByText("blue")).toBeInTheDocument();
//     });
//   });
// });
