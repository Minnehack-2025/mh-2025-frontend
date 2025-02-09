export default function AuthErrorPage() {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
        <h1 className="text-2xl font-bold">Authentication Error</h1>
        <p>There was an error during the authentication process. Please try again.</p>
        <a href="/login" className="underline">Go back to login</a>
      </div>
    );
  }