const ErrorFallback = ({ error }) => {
  return (
    <main className="main-container">
      <div className="error-page-container">
        <h1>Something went wrong</h1>
        <p role="alert" className="error-detail">Unable to load the requested page click to try again. 
        If problem persists please contact the site administrator at <a href="mailto:hello@openreferraluk.org">hello@openreferraluk.org</a></p>
        <a href="/" className="button button-secondary button-header">Open Referral UK Home</a>
      </div>
    </main>
  );
};

export default ErrorFallback;
