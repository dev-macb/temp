import { useRouteError } from "react-router-dom";

export default function Erro404() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Opa!</h1>
      <p>Desculpa, um erro inesperado aconteceu.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}