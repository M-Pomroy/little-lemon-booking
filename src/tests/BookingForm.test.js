import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookingForm from "../components/BookingForm";

describe("Booking form", () => {
  const mockSubmitHandler = jest.fn();
  const props = {
    submitAPI: mockSubmitHandler,
    times: ["17:00"],
    dispatch: () => {},
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Renders the BookingForm heading", () => {
    render(
      <MemoryRouter>
        <BookingForm {...props} />
      </MemoryRouter>
    );
    const headingElement = screen.getByText("Booking a table");
    expect(headingElement).toBeInTheDocument();
  });

  test("Form does not submit with incorrect data", () => {
    render(
      <MemoryRouter>
        <BookingForm {...props} />
      </MemoryRouter>
    );

    const dateInput = screen.getByLabelText("Choose date");
    fireEvent.change(dateInput, { target: { value: "2015-03-12" } });

    const timeInput = screen.getByLabelText("Choose time");
    fireEvent.change(timeInput, { target: { value: "" } });

    const guestsInput = screen.getByLabelText("Number of guests");
    fireEvent.change(guestsInput, { target: { value: "11" } });

    const occasionInput = screen.getByLabelText("Occasion");
    fireEvent.change(occasionInput, { target: { value: "" } });

    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeDisabled();

    fireEvent.click(submitButton);
    expect(mockSubmitHandler).not.toHaveBeenCalled();
  });
});
