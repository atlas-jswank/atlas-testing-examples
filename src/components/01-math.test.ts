
import { expect, test} from "vitest";
import { add } from "./01-math";

test("Test add", () => {
    //Arrange
    const a = 1;
    const b = 2;

    //Act
    const result = add(a, b);

    //Assert
    expect(result).toBe(3);
});