import { useRouteError, Link, isRouteErrorResponse } from 'react-router-dom';

const errorPageStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  fontFamily: 'var(--font-heading)',
  color: 'var(--brand-primary)',
  textAlign: 'center',
  padding: '2rem',
};

const errorCodeStyle: React.CSSProperties = {
  fontSize: '6rem',
  fontWeight: '800',
  margin: 0,
  lineHeight: 1,
};

const errorMessageStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  fontWeight: '700',
  margin: '0.5rem 0 2rem 0',
};

const linkStyle: React.CSSProperties = {
  color: 'var(--brand-primary)',
  fontWeight: 'bold',
  textDecoration: 'underline',
  fontSize: '1rem',
};

export function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error)) {
    return (
      <div style={errorPageStyle}>
        <h1 style={errorCodeStyle}>{error.status}</h1>
        <p style={errorMessageStyle}>{error.statusText}</p>
        {error.data?.message && <p>{error.data.message}</p>}
        <br />
        <Link to="/" style={linkStyle}>Voltar para a página inicial</Link>
      </div>
    );
  }

  if (error instanceof Error) {
    return (
      <div style={errorPageStyle}>
        <h1 style={errorCodeStyle}>Oops!</h1>
        <p style={errorMessageStyle}>Ocorreu um erro inesperado.</p>
        <p>
          <i>{error.message}</i>
        </p>
        <br />
        <Link to="/" style={linkStyle}>Voltar para a página inicial</Link>
      </div>
    );
  }

  return (
    <div style={errorPageStyle}>
      <h1 style={errorCodeStyle}>Erro</h1>
      <p style={errorMessageStyle}>Um erro desconhecido ocorreu.</p>
      <br />
      <Link to="/" style={linkStyle}>Voltar para a página inicial</Link>
    </div>
  );
}