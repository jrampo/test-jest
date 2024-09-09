import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App.js";

describe("testes para o componente react", () => {
  test("deve renderizar certo", () => {
    render(<App />);
    expect(screen.getByText("cadastrar")).toBeInTheDocument();
  });
});

test('deve adicionar "estudar react" na lista', () => {
  fireEvent.change(screen.getByTestId("campo-tarefa"), {
    target: {
      value: "estudar react",
    },
  });
  fireEvent.click(screen.getByTestId("btn-cadastrar"));
  expect(screen.getByText("estudar react")).toBeInTheDocument();
});
