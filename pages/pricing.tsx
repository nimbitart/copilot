import React from 'react';

export default function Pricing() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      {/* Header Section */}
      <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '60px 20px', textAlign: 'center', color: 'white' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', margin: '0 0 16px', letterSpacing: '-1px' }}>
          Simple, Transparent Pricing
        </h1>
        <p style={{ fontSize: '20px', margin: 0, opacity: 0.9 }}>
          Choose the perfect plan for your team
        </p>
      </div>

      {/* Pricing Cards */}
      <div style={{ maxWidth: '1200px', margin: '-80px auto 0', padding: '0 20px', position: 'relative', zIndex: 10 }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px',
          marginBottom: '100px'
        }}>
          
          {/* Free Plan */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            padding: '40px 30px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 30px 80px rgba(0,0,0,0.2)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.15)';
          }}>
            <h3 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0 0 8px', color: '#1a202c' }}>Free</h3>
            <p style={{ fontSize: '14px', color: '#718096', margin: '0 0 24px' }}>Perfect to start</p>
            
            <div style={{ margin: '30px 0', paddingBottom: '30px', borderBottom: '2px solid #e2e8f0' }}>
              <span style={{ fontSize: '42px', fontWeight: 'bold', color: '#1a202c' }}>$0</span>
              <span style={{ fontSize: '14px', color: '#718096', marginLeft: '8px' }}>/month</span>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px' }}>
              <li style={{ padding: '12px 0', color: '#2d3748', fontSize: '15px' }}>✓ 10 reviews/month</li>
              <li style={{ padding: '12px 0', color: '#2d3748', fontSize: '15px' }}>✓ Security checks</li>
              <li style={{ padding: '12px 0', color: '#2d3748', fontSize: '15px' }}>✓ Email support</li>
              <li style={{ padding: '12px 0', color: '#cbd5e0', fontSize: '15px' }}>✗ Team collaboration</li>
            </ul>

            <button style={{
              width: '100%',
              padding: '12px 24px',
              backgroundColor: '#edf2f7',
              border: 'none',
              borderRadius: '6px',
              color: '#667eea',
              fontSize: '15px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }} onMouseEnter={(e) => e.target.style.backgroundColor = '#e2e8f0'} onMouseLeave={(e) => e.target.style.backgroundColor = '#edf2f7'}>
              Get Started
            </button>
          </div>

          {/* Pro Plan (Featured) */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            padding: '40px 30px',
            boxShadow: '0 30px 80px rgba(102, 126, 234, 0.3)',
            border: '2px solid #667eea',
            transform: 'scale(1.05)',
            position: 'relative',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.08)';
            e.currentTarget.style.boxShadow = '0 40px 100px rgba(102, 126, 234, 0.4)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 30px 80px rgba(102, 126, 234, 0.3)';
          }}>
            <div style={{
              position: 'absolute',
              top: '-15px',
              left: '20px',
              backgroundColor: '#667eea',
              color: '#ffffff',
              padding: '4px 16px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '600'
            }}>
              ⭐ MOST POPULAR
            </div>

            <h3 style={{ fontSize: '24px', fontWeight: 'bold', margin: '16px 0 8px', color: '#1a202c' }}>Pro</h3>
            <p style={{ fontSize: '14px', color: '#718096', margin: '0 0 24px' }}>Best for teams</p>

            <div style={{ margin: '30px 0', paddingBottom: '30px', borderBottom: '2px solid #e2e8f0' }}>
              <span style={{ fontSize: '42px', fontWeight: 'bold', color: '#667eea' }}>$49</span>
              <span style={{ fontSize: '14px', color: '#718096', marginLeft: '8px' }}>/month</span>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px' }}>
              <li style={{ padding: '12px 0', color: '#2d3748', fontSize: '15px' }}>✓ Unlimited reviews</li>
              <li style={{ padding: '12px 0', color: '#2d3748', fontSize: '15px' }}>✓ Advanced security analysis</li>
              <li style={{ padding: '12px 0', color: '#2d3748', fontSize: '15px' }}>✓ Team collaboration</li>
              <li style={{ padding: '12px 0', color: '#2d3748', fontSize: '15px' }}>✓ Priority support</li>
              <li style={{ padding: '12px 0', color: '#2d3748', fontSize: '15px' }}>✓ Custom rules</li>
            </ul>

            <button style={{
              width: '100%',
              padding: '12px 24px',
              backgroundColor: '#667eea',
              border: 'none',
              borderRadius: '6px',
              color: '#ffffff',
              fontSize: '15px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }} onMouseEnter={(e) => e.target.style.backgroundColor = '#5568d3'} onMouseLeave={(e) => e.target.style.backgroundColor = '#667eea'}>
              <a href="https://buy.stripe.com/test_aFacN4arj7vM76ua8v5gc00" style={{ color: '#ffffff', textDecoration: 'none' }}>
                Start Free Trial
              </a>
            </button>
          </div>

          {/* Enterprise Plan */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            padding: '40px 30px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 30px 80px rgba(0,0,0,0.2)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.15)';
          }}>
            <h3 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0 0 8px', color: '#1a202c' }}>Enterprise</h3>
            <p style={{ fontSize: '14px', color: '#718096', margin: '0 0 24px' }}>Custom solutions</p>

            <div style={{ margin: '30px 0', paddingBottom: '30px', borderBottom: '2px solid #e2e8f0' }}>
              <span style={{ fontSize: '42px', fontWeight: 'bold', color: '#1a202c' }}>Custom</span>
              <span style={{ fontSize: '14px', color: '#718096', marginLeft: '8px' }}>/pricing</span>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px' }}>
              <li style={{ padding: '12px 0', color: '#2d3748', fontSize: '15px' }}>✓ Everything in Pro</li>
              <li style={{ padding: '12px 0', color: '#2d3748', fontSize: '15px' }}>✓ Dedicated support</li>
              <li style={{ padding: '12px 0', color: '#2d3748', fontSize: '15px' }}>✓ Custom integration</li>
              <li style={{ padding: '12px 0', color: '#2d3748', fontSize: '15px' }}>✓ SLA guarantee</li>
              <li style={{ padding: '12px 0', color: '#2d3748', fontSize: '15px' }}>✓ GitHub Enterprise</li>
            </ul>

            <button style={{
              width: '100%',
              padding: '12px 24px',
              backgroundColor: '#edf2f7',
              border: 'none',
              borderRadius: '6px',
              color: '#667eea',
              fontSize: '15px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }} onMouseEnter={(e) => e.target.style.backgroundColor = '#e2e8f0'} onMouseLeave={(e) => e.target.style.backgroundColor = '#edf2f7'}>
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={{ backgroundColor: '#f7fafc', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 'bold', margin: '0 0 16px', color: '#1a202c' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: '16px', color: '#718096', margin: 0 }}>
              Everything you need to know about Code Review Copilot
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
            
            {/* FAQ Item 1 */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '24px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 12px', color: '#1a202c' }}>
                How does Code Review Copilot integrate with GitHub?
              </h3>
              <p style={{ fontSize: '14px', color: '#4a5568', margin: 0, lineHeight: '1.6' }}>
                We automatically install as a GitHub App. Once installed, we analyze every PR in seconds with no setup needed. Just push code and get feedback instantly.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '24px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 12px', color: '#1a202c' }}>
                How much time will this save my team?
              </h3>
              <p style={{ fontSize: '14px', color: '#4a5568', margin: 0, lineHeight: '1.6' }}>
                On average, teams save 3-4 hours per week on code reviews. Instant feedback means faster PRs and fewer back-and-forths with reviewers.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '24px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 12px', color: '#1a202c' }}>
                What types of issues does it catch?
              </h3>
              <p style={{ fontSize: '14px', color: '#4a5568', margin: 0, lineHeight: '1.6' }}>
                Security vulnerabilities (SQL injection, hardcoded secrets), performance problems (N+1 queries, memory leaks), and code quality issues.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '24px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 12px', color: '#1a202c' }}>
                Is my code secure?
              </h3>
              <p style={{ fontSize: '14px', color: '#4a5568', margin: 0, lineHeight: '1.6' }}>
                Yes. We never store code - we analyze it in memory and discard immediately. HTTPS encryption on all data. SOC 2 Type II compliant.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '24px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 12px', color: '#1a202c' }}>
                Can I use it for multiple repositories?
              </h3>
              <p style={{ fontSize: '14px', color: '#4a5568', margin: 0, lineHeight: '1.6' }}>
                Yes! Pro plan covers unlimited repositories and unlimited team members. Perfect for organizations of any size.
              </p>
            </div>

            {/* FAQ Item 6 */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '24px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 12px', color: '#1a202c' }}>
                Can I cancel anytime?
              </h3>
              <p style={{ fontSize: '14px', color: '#4a5568', margin: 0, lineHeight: '1.6' }}>
                Absolutely. Cancel your subscription anytime with no penalties. We also offer a 30-day money-back guarantee if you're unsatisfied.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div style={{ backgroundColor: '#1a202c', padding: '80px 20px', textAlign: 'center', color: 'white' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', margin: '0 0 24px' }}>
          Ship better code, faster.
        </h2>
        <p style={{ fontSize: '16px', margin: '0 0 32px', opacity: 0.9 }}>
          Install Code Review Copilot on your GitHub repository today.
        </p>
        <button style={{
          padding: '12px 32px',
          backgroundColor: '#667eea',
          color: '#ffffff',
          border: 'none',
          borderRadius: '6px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'background-color 0.3s'
        }} onMouseEnter={(e) => e.target.style.backgroundColor = '#5568d3'} onMouseLeave={(e) => e.target.style.backgroundColor = '#667eea'}>
          <a href="https://copilot-roan.vercel.app" style={{ color: '#ffffff', textDecoration: 'none' }}>
            Install on GitHub →
          </a>
        </button>
      </div>
    </div>
  );
}
