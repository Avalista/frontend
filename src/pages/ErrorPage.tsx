import { useRouteError, Link } from 'react-router-dom';

const errorPageStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  fontFamily: 'var(--font-heading)',
  color: 'var(--color-primary)',
  textAlign: 'center',
};

const errorCodeStyle: React.CSSProperties = {
  fontSize: '5rem',
  fontWeight: 'bold',
  margin: 0,
};

const errorMessageStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    margin: '0 0 2rem 0',
};

const linkStyle: React.CSSProperties = {
    color: 'var(--color-primary)',
    fontWeight: 'bold',
    textDecoration: 'none',
};

export function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div style={errorPageStyle}>
      <h1 style={errorCodeStyle}>Oops!</h1>
      <p style={errorMessageStyle}>Ocorreu um erro inesperado.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <br />
      <Link to="/" style={linkStyle}>Voltar para a página inicial</Link>
    </div>
  );
}