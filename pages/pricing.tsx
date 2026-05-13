export default function Pricing() {
  return (
    <div style={{ padding: '50px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h1>Code Review Copilot Pricing</h1>
      
      <div style={{ display: 'flex', gap: '40px', marginTop: '40px' }}>
        {/* Free Tier */}
        <div style={{ border: '1px solid #ccc', padding: '30px', borderRadius: '8px', flex: 1 }}>
          <h2>Free</h2>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>$0/month</p>
          <ul>
            <li>5 reviews per month</li>
            <li>Basic feedback</li>
            <li>Community support</li>
          </ul>
          <button disabled style={{ padding: '10px 20px', fontSize: '16px', cursor: 'not-allowed', backgroundColor: '#ccc' }}>
            Current Plan
          </button>
        </div>

        {/* Pro Tier */}
        <div style={{ border: '2px solid #007bff', padding: '30px', borderRadius: '8px', flex: 1, backgroundColor: '#f0f8ff' }}>
          <h2>Pro</h2>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>$49/month</p>
          <ul>
            <li>✅ Unlimited reviews</li>
            <li>✅ Advanced feedback</li>
            <li>✅ Security focus</li>
            <li>✅ Priority support</li>
          </ul>
          <a 
            href="https://buy.stripe.com/aFacN4arj7vM76ua8v5gc00"
            style={{ 
              padding: '10px 20px', 
              fontSize: '16px', 
              backgroundColor: '#007bff', 
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            Upgrade to Pro
          </a>
        </div>
      </div>
    </div>
  );
}