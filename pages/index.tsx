export default function Home() {
  return (
    <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>Code Review Copilot</h1>
      <p>AI-powered code reviews powered by Claude</p>
      
      <div style={{ marginTop: '30px' }}>
        <a href="/pricing" style={{ marginRight: '20px', fontSize: '18px', textDecoration: 'none', color: '#007bff' }}>
          View Pricing
        </a>
        <a href="https://github.com/apps/codereviewcopilot" style={{ fontSize: '18px', textDecoration: 'none', color: '#007bff' }}>
          Install on GitHub
        </a>
      </div>
    </div>
  );
}