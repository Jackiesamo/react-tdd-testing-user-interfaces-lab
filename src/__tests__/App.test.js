
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

// Test 1 — Top-level heading
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

// Test 2 — Image of yourself
test("displays an image of myself with descriptive alt text", () => {
  render(<App />);
  const image = screen.getByAltText(/photo|portrait|profile|me/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src");
});

// Test 3 — About Me section heading
test("displays a second-level heading with the text `About Me`", () => {
  render(<App />);
  const aboutHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });
  expect(aboutHeading).toBeInTheDocument();
});

// Test 4 — Biography paragraph
test("displays a paragraph for my biography", () => {
  render(<App />);
  const paragraph = screen.getByText(/i am|developer|student|love/i);
  expect(paragraph).toBeInTheDocument();
});

// Test 5 — Links to GitHub and LinkedIn
test("displays links to my GitHub and LinkedIn profiles", () => {
  render(<App />);

  const githubLink = screen.getByRole("link", { name: /github/i });
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });

  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href", expect.stringContaining("github"));

  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute("href", expect.stringContaining("linkedin"));
});