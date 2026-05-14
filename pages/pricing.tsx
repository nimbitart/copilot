export default function Pricing() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <header style={{ 
        backgroundColor: '#007bff', 
        color: 'white', 
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '40px', margin: '0' }}>
          Simple, Transparent Pricing
        </h1>
        <p style={{ fontSize: '18px', margin: '10px 0 0 0', opacity: 0.9 }}>
          Choose the plan that fits your needs
        </p>
      </header>

      {/* Pricing Cards */}
      <section style={{ 
        padding: '60px 20px', 
        maxWidth: '1200px', 
        margin: '0 auto'
      }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '40px',
          marginTop: '40px'
        }}>
          {/* Free Plan */}
          <div style={{ 
            border: '2px solid #e0e0e0', 
            padding: '40px', 
            borderRadius: '8px',
            backgroundColor: 'white',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
          }}>
            <h2 style={{ fontSize: '28px', color: '#333', marginTop: '0' }}>Free</h2>
            <p style={{ fontSize: '14px', color: '#666' }}>Perfect for getting started</p>
            
            <div style={{ margin: '30px 0' }}>
              <span style={{ fontSize: '36px', fontWeight: 'bold', color: '#333' }}>$0</span>
              <span style={{ fontSize: '16px', color: '#666' }}>/month</span>
            </div>

            <ul style={{ listStyle: 'none', padding: '0', color: '#666' }}>
              <li style={{ padding: '12px 0', borderBottom: '1px solid #eee' }}>✅ 5 reviews/month</li>
              <li style={{ padding: '12px 0', borderBottom: '1px solid #eee' }}>✅ Basic feedback</li>
              <li style={{ padding: '12px 0', borderBottom: '1px solid #eee' }}>✅ Community support</li>
              <li style={{ padding: '12px 0', color: '#ccc' }}>❌ Unlimited reviews</li>
              <li style={{ padding: '12px 0', color: '#ccc' }}>❌ Priority support</li>
            </ul>

            <button style={{
              width: '100%',
              padding: '12px',
              marginTop: '30px',
              backgroundColor: '#f0f0f0',
              color: '#333',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'not-allowed',
              opacity: 0.6
            }} disabled>
              Current Plan
            </button>
          </div>

          {/* Pro Plan - FEATURED */}
          <div style={{ 
            border: '3px solid #007bff', 
            padding: '40px', 
            borderRadius: '8px',
            backgroundColor: '#f0f8ff',
            position: 'relative',
            transform: 'scale(1.05)',
            boxShadow: '0 10px 30px rgba(0, 123, 255, 0.2)'
          }}>
            <div style={{
              position: 'absolute',
              top: '-15px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#007bff',
              color: 'white',
              padding: '5px 15px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
              ⭐ MOST POPULAR
            </div>

            <h2 style={{ fontSize: '28px', color: '#333', marginTop: '20px' }}>Pro</h2>
            <p style={{ fontSize: '14px', color: '#666' }}>For serious developers</p>
            
            <div style={{ margin: '30px 0' }}>
              <span style={{ fontSize: '36px', fontWeight: 'bold', color: '#007bff' }}>$49</span>
              <span style={{ fontSize: '16px', color: '#666' }}>/month</span>
            </div>

            <ul style={{ listStyle: 'none', padding: '0', color: '#333' }}>
              <li style={{ padding: '12px 0', borderBottom: '1px solid #e0e0e0', fontWeight: 'bold' }}>✅ Unlimited reviews</li>
              <li style={{ padding: '12px 0', borderBottom: '1px solid #e0e0e0', fontWeight: 'bold' }}>✅ Advanced feedback</li>
              <li style={{ padding: '12px 0', borderBottom: '1px solid #e0e0e0', fontWeight: 'bold' }}>✅ Security focus</li>
              <li style={{ padding: '12px 0', borderBottom: '1px solid #e0e0e0', fontWeight: 'bold' }}>✅ Priority support</li>
              <li style={{ padding: '12px 0', fontWeight: 'bold' }}>✅ Custom rules</li>
            </ul>

            <a 
              href="https://buy.stripe.com/test_aFacN4arj7vM76ua8v5gc00"
              style={{
                width: '100%',
                padding: '12px',
                marginTop: '30px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                textAlign: 'center',
                display: 'block',
                textDecoration: 'none'
              }}
            >
              Start Free Trial
            </a>
            <p style={{ textAlign: 'center', fontSize: '12px', color: '#666', marginTop: '15px' }}>
  Cancel anytime - No long-term commitment
</p>
              Cancel anytime
            </p>
          </div>

          {/* Enterprise Plan */}
          <div style={{ 
            border: '2px solid #e0e0e0', 
            padding: '40px', 
            borderRadius: '8px',
            backgroundColor: 'white',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
          }}>
            <h2 style={{ fontSize: '28px', color: '#333', marginTop: '0' }}>Enterprise</h2>
            <p style={{ fontSize: '14px', color: '#666' }}>For large teams</p>
            
            <div style={{ margin: '30px 0' }}>
              <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>Custom</span>
            </div>

            <ul style={{ listStyle: 'none', padding: '0', color: '#666' }}>
              <li style={{ padding: '12px 0', borderBottom: '1px solid #eee' }}>✅ Unlimited everything</li>
              <li style={{ padding: '12px 0', borderBottom: '1px solid #eee' }}>✅ Custom integration</li>
              <li style={{ padding: '12px 0', borderBottom: '1px solid #eee' }}>✅ Dedicated support</li>
              <li style={{ padding: '12px 0', borderBottom: '1px solid #eee' }}>✅ SLA guarantee</li>
              <li style={{ padding: '12px 0' }}>✅ Team training</li>
            </ul>

            <button style={{
              width: '100%',
              padding: '12px',
              marginTop: '30px',
              backgroundColor: '#333',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '60px 20px'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '40px', color: '#333' }}>
            Common Questions
          </h2>

          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#333', fontSize: '18px' }}>Can I try Pro for free?</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Yes! We offer a 14-day free trial. No credit card required.
            </p>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#333', fontSize: '18px' }}>Can I cancel anytime?</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Absolutely. Cancel your subscription anytime with no penalties.
            </p>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#333', fontSize: '18px' }}>What payment methods?</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              We accept all major credit cards via Stripe. Payments are secure and encrypted.
            </p>
          </div>

          <div>
            <h3 style={{ color: '#333', fontSize: '18px' }}>Do you offer refunds?</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Yes. If unsatisfied in the first 30 days, we'll refund your money.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section style={{ 
        backgroundColor: '#007bff', 
        color: 'white', 
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>
          Start Your Free Trial Today
        </h2>
        <a href="https://buy.stripe.com/test_aFacN4arj7vM76ua8v5gc00" style={{
          padding: '15px 40px',
          fontSize: '18px',
          backgroundColor: 'white',
          color: '#007bff',
          textDecoration: 'none',
          borderRadius: '5px',
          fontWeight: 'bold',
          display: 'inline-block'
        }}>
          Get Started
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