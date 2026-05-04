import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Code Review Copilot</title>
        <meta name="description" content="AI-powered code reviews for GitHub pull requests" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Header */}
        <header className="border-b border-slate-200 bg-white">
          <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">CR</span>
                </div>
                <h1 className="text-2xl font-bold text-slate-900">Code Review Copilot</h1>
              </div>
              <a
                href="https://github.com/apps/code-review-copilot"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                Install App
              </a>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              AI-Powered Code Reviews
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Instant feedback on security, performance, and best practices. 
              Your second set of eyes for every pull request.
            </p>
            <a
              href="https://github.com/apps/code-review-copilot"
              className="inline-flex items-center px-8 py-3 rounded-lg bg-blue-600 text-white font-medium text-lg hover:bg-blue-700 transition"
            >
              Install on GitHub →
            </a>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 my-16">
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Security</h3>
              <p className="text-slate-600">
                Detects common vulnerabilities and security anti-patterns before they reach production.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Performance</h3>
              <p className="text-slate-600">
                Identifies inefficient code, memory leaks, and optimization opportunities automatically.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Best Practices</h3>
              <p className="text-slate-600">
                Enforces code quality standards and catches potential bugs early in the review process.
              </p>
            </div>
          </div>

          {/* How it works */}
          <div className="bg-white rounded-lg p-8 border border-slate-200 my-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">How it works</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Install the app</h4>
                  <p className="text-slate-600">Add Code Review Copilot to your GitHub repository</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Open a PR</h4>
                  <p className="text-slate-600">Create a pull request as you normally would</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Get instant feedback</h4>
                  <p className="text-slate-600">AI review appears automatically as a PR comment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="my-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Pricing</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 border border-slate-200">
                <h4 className="text-xl font-bold text-slate-900 mb-2">Free</h4>
                <p className="text-3xl font-bold text-slate-900 mb-4">$0<span className="text-lg text-slate-600">/month</span></p>
                <ul className="space-y-2 text-slate-600 mb-6">
                  <li>✓ 5 reviews/month</li>
                  <li>✓ Basic security checks</li>
                  <li>✓ Community support</li>
                </ul>
                <button className="w-full px-4 py-2 rounded-lg bg-slate-200 text-slate-900 font-medium hover:bg-slate-300 transition">
                  Current Plan
                </button>
              </div>

              <div className="bg-blue-600 rounded-lg p-6 border-2 border-blue-600">
                <h4 className="text-xl font-bold text-white mb-2">Pro</h4>
                <p className="text-3xl font-bold text-white mb-4">$49<span className="text-lg text-blue-100">/month</span></p>
                <ul className="space-y-2 text-blue-100 mb-6">
                  <li>✓ Unlimited reviews</li>
                  <li>✓ All security & performance checks</li>
                  <li>✓ Custom rules & config</li>
                  <li>✓ Email support</li>
                </ul>
                <button className="w-full px-4 py-2 rounded-lg bg-white text-blue-600 font-medium hover:bg-blue-50 transition">
                  Coming Soon
                </button>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-white rounded-lg p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to improve your code?</h3>
            <p className="text-slate-600 mb-6">
              Install Code Review Copilot on your repository and get instant AI feedback on every pull request.
            </p>
            <a
              href="https://github.com/apps/code-review-copilot"
              className="inline-flex items-center px-8 py-3 rounded-lg bg-blue-600 text-white font-medium text-lg hover:bg-blue-700 transition"
            >
              Install on GitHub →
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-200 bg-white mt-16">
          <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-center text-slate-600">
            <p>Code Review Copilot • Powered by Claude AI</p>
          </div>
        </footer>
      </main>
    </>
  );
}
