import { afterAll, afterEach, beforeAll, expect, test } from "vitest";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import { render, screen } from "@testing-library/react";
import Post from "./04-Post";

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/posts/1", () => {
    return HttpResponse.json({
      id: 1,
      title: "Lorem Ipsum",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    });
  }),
];

export const server = setupServer(...handlers);

// Start server before all tests run
beforeAll(() => {
  server.listen();
});

// Reset between tests to gaurantee test always start in the same state
afterEach(() => {
  server.resetHandlers();
});

// Shutdown at the end of tests
afterAll(() => {
  server.close();
});

test("Test Post", async () => {
  // Arrange
  render(<Post id={1} />);

  // Act
  const heading = await screen.findByRole("heading");
  const body = await screen.findByTestId("post-body");

  // Assert
  expect(heading).toHaveTextContent("Lorem Ipsum");
  expect(body).toHaveTextContent("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
});

test("Test Post", async () => {
  // Arrange
  render(<Post id={2} />);

  // Act
  const heading = await screen.findByRole("heading");
  const body = await screen.findByTestId("post-body");

  // Assert
  expect(heading).toHaveTextContent("Lorem Ipsum");
  expect(body).toHaveTextContent("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
});
