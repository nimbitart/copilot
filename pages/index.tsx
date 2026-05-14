export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <header style={{ 
        backgroundColor: '#007bff', 
        color: 'white', 
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '48px', margin: '0 0 10px 0' }}>
          🤖 Code Review Copilot
        </h1>
        <p style={{ fontSize: '20px', margin: '0', opacity: 0.9 }}>
          AI-Powered Code Reviews for GitHub
        </p>
      </header>

      {/* Hero */}
      <section style={{ 
        padding: '60px 20px', 
        maxWidth: '1000px', 
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '36px', color: '#333', marginBottom: '20px' }}>
          Get Instant AI Code Reviews
        </h2>
        <p style={{ fontSize: '18px', color: '#666', marginBottom: '40px', lineHeight: '1.6' }}>
          Our AI bot automatically analyzes your pull requests and provides instant feedback on security, performance, and best practices.
        </p>
        
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/pricing" style={{
            padding: '15px 40px',
            fontSize: '18px',
            backgroundColor: '#007bff',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            fontWeight: 'bold'
          }}>
            View Pricing
          </a>
          <a href="https://github.com/apps/codereviewcopilot" style={{
            padding: '15px 40px',
            fontSize: '18px',
            backgroundColor: '#28a745',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            fontWeight: 'bold'
          }}>
            Install on GitHub
          </a>
        </div>
      </section>

      {/* Features */}
      <section style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '60px 20px'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '40px', color: '#333' }}>
            Why Code Review Copilot?
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div style={{ 
              backgroundColor: 'white', 
              padding: '30px', 
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '15px' }}>🔒</div>
              <h3 style={{ color: '#333' }}>Security Focused</h3>
              <p style={{ color: '#666' }}>Detects vulnerabilities before they reach production</p>
            </div>

            <div style={{ 
              backgroundColor: 'white', 
              padding: '30px', 
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '15px' }}>⚡</div>
              <h3 style={{ color: '#333' }}>Lightning Fast</h3>
              <p style={{ color: '#666' }}>Get instant feedback in seconds, not hours</p>
            </div>

            <div style={{ 
              backgroundColor: 'white', 
              padding: '30px', 
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '40px', marginBottom: '15px' }}>📚</div>
              <h3 style={{ color: '#333' }}>Best Practices</h3>
              <p style={{ color: '#666' }}>Learn with AI-powered suggestions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ 
        backgroundColor: '#007bff', 
        color: 'white', 
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>
          Ready to Improve Your Code?
        </h2>
        <a href="/pricing" style={{
          padding: '15px 40px',
          fontSize: '18px',
          backgroundColor: 'white',
          color: '#007bff',
          textDecoration: 'none',
          borderRadius: '5px',
          fontWeight: 'bold',
          display: 'inline-block'
        }}>
          View Pricing
        </a>
      </section>

      {/* Footer */}
      <footer style={{ 
        backgroundColor: '#333', 
        color: 'white', 
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <p style={{ margin: '0', opacity: 0.8 }}>
          © 2025 Code Review Copilot
        </p>
      </footer>
    </div>
  );
}