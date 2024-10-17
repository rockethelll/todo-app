import { afterEach, beforeEach, describe, test, expect } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import { TodoProvider } from '../context/TodoContext';

describe('toggleTodo', () => {
  beforeEach(() => {
    localStorage.clear();
    render(
      <TodoProvider>
        <App />
      </TodoProvider>,
    );
  });

  afterEach(() => {
    cleanup();
  });

  test('should toggle a todo', async () => {
    const user = userEvent.setup();
    const input = screen.getByPlaceholderText(/create/i);
    user.type(input, 'New todo{enter}');

    const checkbox = screen.getAllByTestId('toggle-todo')[0];
    expect(checkbox).not.toBeChecked();

    await user.click(checkbox);
    expect(checkbox).toBeChecked();
  })
});