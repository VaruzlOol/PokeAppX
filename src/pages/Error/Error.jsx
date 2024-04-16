import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  throw new Error('Error example');

  const error = useRouteError();
  if (error == null) {
    console.log('Not errors');
  }else{
    console.log('-- useRouteError --');
    console.log(error);
    console.log('---------------- --');
  }
  

  return (
    <div id="error-page">
      {
        error == null ? 
        <h1>PAGE NOT FOUND!</h1> : 
        <>
          <h1>Oops!</h1>
          <p>Sorry, an unexpected has occurred.</p>
          </>
      }
      <p>
        <i>{ error == null ? 'Not errors'  : error?.statusText || error?.message }</i>
      </p>
    </div>
  );
}