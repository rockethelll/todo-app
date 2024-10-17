import { afterEach, beforeEach, describe, test, expect } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import { TodoProvider } from '../context/TodoContext';

describe('addNewTodo', () => {
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

  test('should display the new todo input', () => {
    const newTodoInput = screen.getByPlaceholderText(/create/i);
    expect(newTodoInput).toBeInTheDocument();
  });

  test('should add a new todo', async () => {
    const user = userEvent.setup();
    const input = screen.getByPlaceholderText(/create/i);
    await user.type(input, 'New todo{enter}');

    expect(screen.getByText('New todo')).toBeInTheDocument();
  });

  test('should clear the input field after adding a todo', () => {
    const user = userEvent.setup();
    const input = screen.getByPlaceholderText(/create/i);
    user.type(input, 'New todo{enter}');
    expect(input).toHaveValue('');
  });

  test('should focus the input field after adding a todo', async () => {
    const user = userEvent.setup();
    const input = screen.getByPlaceholderText(/create/i);
    await user.type(input, 'New todo{enter}');

    expect(input).toHaveFocus();
  });

  test('should not add a new todo if the input is empty', () => {
    const user = userEvent.setup();
    const input = screen.getByPlaceholderText(/create/i);
    user.type(input, '{enter}');

    expect(screen.queryByTestId('todo-item')).toBeNull();
  });
});
