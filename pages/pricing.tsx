import React from 'react';

export default function Pricing() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Header */}
      <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e5e7eb', padding: '2rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', margin: '0 0 0.5rem', color: '#111827' }}>
            Simple, Transparent Pricing
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#6b7280', margin: 0 }}>
            Choose the perfect plan for your team
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          
          {/* Free Plan */}
          <div style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e5e7eb',
            borderRadius: '0.75rem',
            padding: '2rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', margin: '0 0 0.5rem', color: '#111827' }}>
              Free
            </h2>
            <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: '0 0 1.5rem' }}>
              Perfect to start
            </p>
            
            <div style={{ margin: '1.5rem 0', paddingBottom: '1.5rem', borderBottom: '1px solid #e5e7eb' }}>
              <span style={{ fontSize: '2rem', fontWeight: '600', color: '#111827' }}>$0</span>
              <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>/month</span>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', fontSize: '0.875rem' }}>
              <li style={{ padding: '0.5rem 0', color: '#374151' }}>✓ 10 reviews/month</li>
              <li style={{ padding: '0.5rem 0', color: '#374151' }}>✓ Security checks</li>
              <li style={{ padding: '0.5rem 0', color: '#374151' }}>✓ Email support</li>
              <li style={{ padding: '0.5rem 0', color: '#9ca3af' }}>✗ Team collaboration</li>
              <li style={{ padding: '0.5rem 0', color: '#9ca3af' }}>✗ Priority support</li>
            </ul>

            <button style={{
              width: '100%',
              padding: '0.75rem 1rem',
              backgroundColor: 'transparent',
              border: '1px solid #d1d5db',
              borderRadius: '0.375rem',
              color: '#111827',
              fontSize: '0.875rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }} onMouseEnter={(e) => e.target.style.backgroundColor = '#f3f4f6'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
              Get Started
            </button>
          </div>

          {/* Pro Plan (Featured) */}
          <div style={{
            backgroundColor: '#ffffff',
            border: '2px solid #6366f1',
            borderRadius: '0.75rem',
            padding: '2rem',
            boxShadow: '0 4px 12px rgba(99, 102, 241, 0.15)',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '-12px',
              left: '1.5rem',
              backgroundColor: '#6366f1',
              color: '#ffffff',
              fontSize: '0.75rem',
              padding: '0.25rem 0.75rem',
              borderRadius: '0.25rem',
              fontWeight: '500'
            }}>
              Most Popular
            </div>

            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', margin: '0 0 0.5rem', color: '#111827' }}>
              Pro
            </h2>
            <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: '0 0 1.5rem' }}>
              Best for teams
            </p>

            <div style={{ margin: '1.5rem 0', paddingBottom: '1.5rem', borderBottom: '1px solid #e5e7eb' }}>
              <span style={{ fontSize: '2rem', fontWeight: '600', color: '#111827' }}>$49</span>
              <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>/month</span>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', fontSize: '0.875rem' }}>
              <li style={{ padding: '0.5rem 0', color: '#374151' }}>✓ Unlimited reviews</li>
              <li style={{ padding: '0.5rem 0', color: '#374151' }}>✓ Advanced security analysis</li>
              <li style={{ padding: '0.5rem 0', color: '#374151' }}>✓ Team collaboration</li>
              <li style={{ padding: '0.5rem 0', color: '#374151' }}>✓ Priority support</li>
              <li style={{ padding: '0.5rem 0', color: '#374151' }}>✓ Custom rules</li>
            </ul>

            <button style={{
              width: '100%',
              padding: '0.75rem 1rem',
              backgroundColor: '#6366f1',
              border: '1px solid #6366f1',
              borderRadius: '0.375rem',
              color: '#ffffff',
              fontSize: '0.875rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }} onMouseEnter={(e) => e.target.style.backgroundColor = '#4f46e5'} onMouseLeave={(e) => e.target.style.backgroundColor = '#6366f1'}>
              <a href="https://buy.stripe.com/test_aFacN4arj7vM76ua8v5gc00" style={{ color: '#ffffff', textDecoration: 'none' }}>
                Start Free Trial
              </a>
            </button>
          </div>

          {/* Enterprise Plan */}
          <div style={{
            backgroundColor: '#ffffff',
            border: '1px solid #e5e7eb',
            borderRadius: '0.75rem',
            padding: '2rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', margin: '0 0 0.5rem', color: '#111827' }}>
              Enterprise
            </h2>
            <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: '0 0 1.5rem' }}>
              Custom solutions
            </p>

            <div style={{ margin: '1.5rem 0', paddingBottom: '1.5rem', borderBottom: '1px solid #e5e7eb' }}>
              <span style={{ fontSize: '2rem', fontWeight: '600', color: '#111827' }}>Custom</span>
              <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>/pricing</span>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', fontSize: '0.875rem' }}>
              <li style={{ padding: '0.5rem 0', color: '#374151' }}>✓ Everything in Pro</li>
              <li style={{ padding: '0.5rem 0', color: '#374151' }}>✓ Dedicated support</li>
              <li style={{ padding: '0.5rem 0', color: '#374151' }}>✓ Custom integration</li>
              <li style={{ padding: '0.5rem 0', color: '#374151' }}>✓ SLA guarantee</li>
              <li style={{ padding: '0.5rem 0', color: '#374151' }}>✓ GitHub Enterprise</li>
            </ul>

            <button style={{
              width: '100%',
              padding: '0.75rem 1rem',
              backgroundColor: 'transparent',
              border: '1px solid #d1d5db',
              borderRadius: '0.375rem',
              color: '#111827',
              fontSize: '0.875rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }} onMouseEnter={(e) => e.target.style.backgroundColor = '#f3f4f6'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem 4rem' }}>
        <h2 style={{ fontSize: '1.875rem', fontWeight: '700', marginBottom: '1rem', color: '#111827', textAlign: 'center' }}>
          Frequently Asked Questions
        </h2>
        <p style={{ fontSize: '1rem', color: '#6b7280', textAlign: 'center', marginBottom: '3rem' }}>
          Everything you need to know about Code Review Copilot
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          
          {/* FAQ Item 1 */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '0.75rem', padding: '1.5rem', border: '1px solid #e5e7eb' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: '600', margin: '0 0 0.75rem', color: '#111827' }}>
              How does Code Review Copilot integrate with GitHub?
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0, lineHeight: '1.5' }}>
              We automatically install as a GitHub App. Once installed, we analyze every PR in seconds with no setup needed. Just push code and get feedback instantly.
            </p>
          </div>

          {/* FAQ Item 2 */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '0.75rem', padding: '1.5rem', border: '1px solid #e5e7eb' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: '600', margin: '0 0 0.75rem', color: '#111827' }}>
              How much time will this save my team?
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0, lineHeight: '1.5' }}>
              On average, teams save 3-4 hours per week on code reviews. Instant feedback means faster PRs and fewer back-and-forths with reviewers.
            </p>
          </div>

          {/* FAQ Item 3 */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '0.75rem', padding: '1.5rem', border: '1px solid #e5e7eb' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: '600', margin: '0 0 0.75rem', color: '#111827' }}>
              What types of issues does it catch?
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0, lineHeight: '1.5' }}>
              Security vulnerabilities (SQL injection, hardcoded secrets), performance problems (N+1 queries, memory leaks), and code quality issues (error handling, naming, best practices).
            </p>
          </div>

          {/* FAQ Item 4 */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '0.75rem', padding: '1.5rem', border: '1px solid #e5e7eb' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: '600', margin: '0 0 0.75rem', color: '#111827' }}>
              Is my code secure?
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0, lineHeight: '1.5' }}>
              Yes. We never store code - we analyze it in memory and discard immediately. HTTPS encryption on all data. SOC 2 Type II compliant.
            </p>
          </div>

          {/* FAQ Item 5 */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '0.75rem', padding: '1.5rem', border: '1px solid #e5e7eb' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: '600', margin: '0 0 0.75rem', color: '#111827' }}>
              Can I use it for multiple repositories?
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0, lineHeight: '1.5' }}>
              Yes! Pro plan covers unlimited repositories and unlimited team members. Perfect for organizations of any size.
            </p>
          </div>

          {/* FAQ Item 6 */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '0.75rem', padding: '1.5rem', border: '1px solid #e5e7eb' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: '600', margin: '0 0 0.75rem', color: '#111827' }}>
              Can I cancel anytime?
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0, lineHeight: '1.5' }}>
              Absolutely. Cancel your subscription anytime with no penalties. We also offer a 30-day money-back guarantee if you're unsatisfied.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ backgroundColor: '#f3f4f6', padding: '3rem 1rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: '700', margin: '0 0 1rem', color: '#111827' }}>
            Ready to improve your code quality?
          </h2>
          <p style={{ fontSize: '1rem', color: '#6b7280', marginBottom: '2rem' }}>
            Start your free 14-day trial today. No credit card required.
          </p>
          <button style={{
            padding: '0.875rem 2rem',
            backgroundColor: '#6366f1',
            color: '#ffffff',
            border: 'none',
            borderRadius: '0.5rem',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }} onMouseEnter={(e) => e.target.style.backgroundColor = '#4f46e5'} onMouseLeave={(e) => e.target.style.backgroundColor = '#6366f1'}>
            <a href="https://copilot-roan.vercel.app" style={{ color: '#ffffff', textDecoration: 'none' }}>
              Install on GitHub →
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
