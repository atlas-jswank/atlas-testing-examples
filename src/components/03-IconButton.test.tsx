import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";
import IconButton from "./03-IconButton";

afterEach(() => {
    cleanup();
});

test("Test IconButton", () => {
    //Arrange
    render(<IconButton />);
    
    //Act
    const sun = screen.getByLabelText("Sun");
    
    //Assert
    expect(sun).toBeInTheDocument();
});

test("Test IconButton Toggle", () => {
    //Arrange
    render(<IconButton />);
    
    //Act
    const sun = screen.getByLabelText("Sun");
    fireEvent.click(sun);
    const moon = screen.getByLabelText("Moon");
    
    //Assert
    expect(moon).toBeInTheDocument();
});