import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../components/Atoms/Button";

test("renders button with label", () => {
  render(<Button onClick={() => {}}>Click Me</Button>);
  expect(screen.getByText("Click Me")).toBeInTheDocument();
});

test("calls onClick when clicked", () => {
  const onClick = vi.fn();

  render(<Button onClick={onClick}>Click Me</Button>);

  fireEvent.click(screen.getByText("Click Me"));

  expect(onClick).toHaveBeenCalledTimes(1);
});

test("does not call onClick if disabled", () => {
  const onClick = vi.fn();

  render(
    <Button onClick={onClick} loading>
      Click Me
    </Button>
  );

  fireEvent.click(screen.getByText("Click Me"));

  expect(onClick).not.toHaveBeenCalled();
});
