import { afterEach, expect, test } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Toggle from "./02-Toggle";

afterEach(() => {
    cleanup();
});

test("Test Toggle", () => {
    //Arrange
    render(<Toggle />);

    //Act
    const off = screen.getByText("OFF");

    //Assert
    expect(off).toBeInTheDocument();
});

test("Test Toggle Click", () => {
    //Arrange
    render(<Toggle />);

    //Act
    const off = screen.getByText("OFF");
    fireEvent.click(off);

    const on =  screen.getByText("ON");
    screen.debug(on);

    //Assert
    expect(screen.getByText("ON")).toBeInTheDocument();
});

test("Test Toggle Click Twice", () => {
    //Arrange
    render(<Toggle />);

    //Act
    const off = screen.getByText("OFF");
    fireEvent.click(off);

    const on = screen.getByText("ON");
    fireEvent.click(on);

    //Assert
    expect(screen.getByText("OFF")).toBeInTheDocument();
});