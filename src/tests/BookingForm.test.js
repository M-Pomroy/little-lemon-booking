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

  test("Form submits with correct data", async () => {
    render(
      <MemoryRouter>
        <BookingForm {...props} />
      </MemoryRouter>
    );

    const dateInput = screen.getByLabelText("Choose date");
    fireEvent.change(dateInput, { target: { value: "2025-04-13" } });

    const timeInput = screen.getByRole("combobox", {
      name: "Choose time",
    });
    fireEvent.change(timeInput, { target: { value: "17:00" } });

    const guestsInput = screen.getByLabelText("Number of guests");
    fireEvent.change(guestsInput, { target: { value: "5" } });

    const occasionInput = screen.getByRole("combobox", { name: "Occasion" });
    fireEvent.change(occasionInput, { target: { value: "birthday" } });

    const submitButton = screen.getByRole("button");
    expect(submitButton).not.toBeDisabled();

    const form = screen.getByRole("form");
    fireEvent.submit(form);
    expect(mockSubmitHandler).toHaveBeenCalled();
  });
});
