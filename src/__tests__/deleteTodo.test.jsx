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

  test('should delete a todo', async () => {
    const user = userEvent.setup();
    const input = screen.getByPlaceholderText(/create/i);
    user.type(input, 'New todo{enter}');

    const deleteButton = screen.getAllByTestId('delete-todo')[0];
    expect(deleteButton).toBeInTheDocument();

    await user.click(deleteButton);
    expect(deleteButton).not.toBeInTheDocument();
  });
});
