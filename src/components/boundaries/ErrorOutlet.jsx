import { ErrorBoundary, useErrorBoundary } from 'react-error-boundary';
import { useNavigate, useLocation } from 'react-router-dom';

function ErrorOutlet({ children }){
    const location = useLocation();
  
    const ErrorBoundaryCustom = ({ error, resetErrorBoundary }) => {
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
        FallbackComponent = { ErrorBoundaryCustom } 
        onError = { LogError }  
        onReset = { LogReset } 
        resetKeys = { [location.pathname ] }
        >
            { 
              <>
                <span style = {{ display: 'none' }}>{ `[ErrorBoundary]` }</span>
                { children } 
              </>
            }
        </ErrorBoundary>
    )
}

export default ErrorOutlet;

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