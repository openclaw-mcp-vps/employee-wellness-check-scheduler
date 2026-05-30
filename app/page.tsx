export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For HR &amp; People Ops
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Automate Employee{' '}
          <span className="text-[#58a6ff]">Wellness Check-Ins</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Schedule personalized wellness check-ins, track mental health trends across your team, and get AI-powered recommendations on when to intervene — before burnout happens.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start for $15/mo
          </a>
          <a
            href="#faq"
            className="inline-block border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { title: 'Automated Scheduling', desc: 'Set cadences and let the system send personalized check-in emails via Resend.' },
            { title: 'Trend Analytics', desc: 'Visualize mental health signals across teams with an intuitive dashboard.' },
            { title: 'AI Interventions', desc: 'Get notified when an employee shows early signs of burnout or disengagement.' },
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-4">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited employees',
              'Automated email check-ins',
              'Mental health trend dashboard',
              'AI intervention alerts',
              'CSV export & reporting',
              'Priority email support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-base"
          >
            Get Started
          </a>
          <p className="text-[#8b949e] text-xs mt-4">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does the automated scheduling work?',
              a: 'You set a check-in cadence (weekly, bi-weekly, monthly) per team or individual. The system automatically sends personalized wellness survey emails via Resend at the right time.',
            },
            {
              q: 'Is employee data kept private?',
              a: 'Yes. Individual responses are anonymized in aggregate views. Only HR admins can access individual responses, and all data is encrypted at rest.',
            },
            {
              q: 'What does the AI intervention recommendation do?',
              a: 'Our model analyzes response patterns over time and flags employees who may be at risk of burnout, giving HR a heads-up to schedule a 1:1 before the situation escalates.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} WellnessCheck. All rights reserved.
      </footer>
    </main>
  )
}
