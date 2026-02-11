export default function Home() {
  return (
    <main className="bg-white text-gray-900">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-8 py-5 flex items-center justify-between">

          <span className="text-base tracking-tight font-medium text-gray-900">
            Sense<span className="text-blue-500">+</span>
          </span>

          <a
            href="https://www.linkedin.com/company/senseplusapp"
            target="_blank"
            className="text-sm text-gray-500 hover:text-gray-800 transition"
          >
            LinkedIn
          </a>
        </div>
      </nav>


      {/* Hero */}
      <section className="min-h-[85vh] flex items-center justify-center px-8">
        <div className="max-w-3xl text-center pt-20">

          <h1 className="text-[64px] md:text-[88px] font-light tracking-[-0.02em] leading-[1.1] text-gray-900">
            Sense<span className="text-blue-500">+</span>
          </h1>

          <p className="mt-8 text-xl md:text-2xl font-normal text-gray-700 leading-relaxed">
            Built for your health.
          </p>

          <p className="mt-5 text-base text-gray-500 leading-relaxed max-w-xl mx-auto">
            Sense+ helps you make sense of symptoms using artificial intelligence, analyzing what you see and feel when clarity matters most.
          </p>

          <div className="mt-10">
            <span className="text-sm text-gray-400 tracking-wide">
              Launching soon on iOS and Android
            </span>
          </div>

        </div>
      </section>


      {/* Divider */}
      <div className="h-px bg-gray-100 max-w-4xl mx-auto" />


      {/* Value Section */}
      <section className="py-40 px-8">
        <div className="mx-auto max-w-4xl text-center space-y-16">

          <div>
            <h2 className="text-4xl md:text-4xl font-light tracking-tight text-gray-900">
              Clarity through intelligence.
            </h2>
            <p className="mt-6 text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
              Simple. Intelligent. Responsible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-left max-w-5xl mx-auto">

            <div className="space-y-4">
              <h3 className="text-base font-medium text-gray-900">
                Visual analysis
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Upload images of visible symptoms and let Sense+ help identify what they could mean.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-medium text-gray-900">
                Symptom intelligence
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Describe what you’re experiencing and receive AI-assisted insights designed to inform, not alarm.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-medium text-gray-900">
                Clarity first
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Built to support informed decisions and encourage professional care.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* Footer */}
      <footer className="py-14 px-8 border-t border-gray-100 text-center">
        <div className="space-y-6 text-sm text-gray-400">

          <p>
            Sense+ does not provide medical diagnoses and does not replace professional medical advice.
          </p>

          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/company/senseplusapp"
              target="_blank"
              className="hover:text-gray-700 transition"
            >
              LinkedIn
            </a>
          </div>

          <p>© {new Date().getFullYear()} Sense+</p>

        </div>
      </footer>

    </main>
  );
}
