import { ErrorBoundary, useErrorBoundary } from 'react-error-boundary';
import { useRouteError, useNavigate, useLocation } from 'react-router-dom';
import { Children, useEffect, useState } from 'react';

export default function ErrorsBoundary({ children }){
  const location = useLocation();

  const ErrorFallbackMain = ({ error, resetErrorBoundary }) => {
    const { resetBoundary } = useErrorBoundary();
    const navigate = useNavigate();
      
      return (
        <section>
          <div role="alert">
            <p>{`Date: ${new Date().toISOString()}`}</p>
            <p>Something went wrong: 'main'</p>
            <pre style = {{ color: "red" }}> error: { error?.message }</pre>
            <button onClick = {() => { navigate('/') }} >Back home</button>
            <button onClick = {() => { resetBoundary() }} >Try again</button>
          </div>
        </section>
      )
  };

  const LogError = ( error, info ) => {
    console.log('-- logError --');
    console.log('error, ' + error);
    console.log('info, ' + info);
    console.log('-- -------- --');
  };

  const LogReset = ( details ) => {
      console.log('-- LogReset --');
      console.log(details);
      console.log('-- -------- --');
  };
  
  return(
      <ErrorBoundary 
      FallbackComponent = { ErrorFallbackMain } 
      onError = { LogError }  
      onReset = { LogReset } 
      resetKeys = { [location.pathname ] }
      >
          { 
            <>
              <span style = {{ display: 'none' }}>{ `ErrorBoundary]` }</span>
              { children } 
            </>
          }
      </ErrorBoundary>
  )
}

export const ErrorFallbackRoot = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const location = useLocation();

  console.log(error?.message);

  return (
    <>
      <section>
        <h1>Error Boundaries</h1>
        <small>{error?.message}</small>
      </section>
      <section>
        <div role="alert">
          <p>Something went wrong: 'root'</p>
          <pre style = {{ color: "red" }}> location: { location.pathname }</pre>
          <pre style = {{ color: "red" }}> error: { error?.message }</pre>
          <button onClick = {() => { navigate('/') }} >Back home</button>
          <button onClick = {() => { navigate(location.pathname) } } >Try again</button>
        </div>
      </section>
    </>
  )
};




/**
 * import { useErrorBoundary } from "react-error-boundary";
 * const { showBoundary } = useErrorBoundary();
 useEffect(() => {
    fetchGreeting(name).then(
      response => {
        // Set data in state and re-render
      },
      error => {
        // Show error boundary
        showBoundary(error);
      }
    );
  });
 */