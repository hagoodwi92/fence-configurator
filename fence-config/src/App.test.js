import { render, screen, fireEvent, getByRole } from "@testing-library/react";
import App from "./App";

describe('<form />', () => {
  const testValues = {
      username: 'FOO',
      password: 'BAZ',
      handleSubmit: jest.fn(),
  };

  it('Submit works', () => {
    const test = screen.getByLabelText('Linear Feet:');
    expect(fireEvent.submit(test)).toEqual(0);
  });
});  