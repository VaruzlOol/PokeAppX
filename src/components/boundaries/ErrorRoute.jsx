import { useRouteError, useNavigate, useLocation } from 'react-router-dom';

function ErrorsRoute(){
    const error = useRouteError();
    const navigate = useNavigate();
    const location = useLocation();

    console.log(error.message);
    
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

export default ErrorsRoute;