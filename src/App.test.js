import { fireEvent, render, screen } from "@testing-library/react"
import App from "./App"

test('check existence of elements', () => {
  render(<App />);
  expect(screen.getByText('Todo App')).toBeInTheDocument();

  expect(screen.getByPlaceholderText('enter a new task...')).toBeInTheDocument();

  expect(screen.getByText('Add Task')).toBeInTheDocument();

  expect(screen.getByText('No task found!!!')).toBeInTheDocument();
})

test('add functionality testing', () => {
  render(<App/>)
  const inputElement = screen.getByTestId('input');
  const addTaskBtn = screen.getByText('Add Task');
  
  fireEvent.change(inputElement, { target: { value: "test task" } });
  fireEvent.click(addTaskBtn);
  const removeBtn = screen.getByText('Remove Task');
  fireEvent.click(removeBtn);

  expect(screen.queryByText('Remove Task')).toBeNull();
})