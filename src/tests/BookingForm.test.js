import { render, screen } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

test("Renders the BookingForm heading", () => {
  render(<BookingForm times={[]} dispatch={() => {}} />);
  const headingElement = screen.getByText("Booking a table");
  expect(headingElement).toBeInTheDocument();
});
