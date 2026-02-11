export default function Home() {
  return (
    <main className="bg-[#f5f5f7] text-gray-900">

      {/* Top Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f5f5f7]/80 backdrop-blur-md border-b border-gray-200/60">
        <div className="mx-auto max-w-6xl px-6 py-4 flex justify-center">
          <span className="text-lg font-semibold tracking-tight">
            Sense<span className="text-blue-600">+</span>
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl text-center pt-28">

          <h1 className="text-[72px] md:text-[110px] font-semibold tracking-[-0.02em] leading-[1.05]">
            Sense<span className="text-blue-600">+</span>
          </h1>

          <p className="mt-10 text-2xl md:text-3xl font-medium text-gray-800">
            Understand your health.
            <br className="hidden md:block" /> Clearly.
          </p>

          <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Sense+ helps you make sense of symptoms using artificial intelligence,
            analyzing what you see and feel when clarity matters most.
          </p>

          <div className="mt-14 flex justify-center gap-8">
            <button
              disabled
              className="rounded-full bg-gray-900 px-10 py-4 text-white text-base font-medium hover:bg-black transition"
            >
              Coming Soon
            </button>

            <button
              disabled
              className="text-base font-medium text-gray-600 hover:text-gray-900 transition"
            >
              Learn more →
            </button>
          </div>

          <p className="mt-16 text-sm text-gray-400">
            Available soon on iOS and Android
          </p>

        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto max-w-4xl" />

      {/* Value Section */}
      <section className="py-36 px-6">
        <div className="mx-auto max-w-5xl text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Built for your health.
          </h2>
          <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
            Simple. Intelligent. Responsible.
          </p>
        </div>

        <div className="mx-auto max-w-6xl grid gap-16 md:grid-cols-3 text-center">
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Visual awareness</h3>
            <p className="text-gray-500 leading-relaxed">
              Upload images of visible symptoms and let Sense+ help identify
              what they could mean.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Symptom intelligence</h3>
            <p className="text-gray-500 leading-relaxed">
              Describe what you’re experiencing and receive AI-assisted insights
              designed to inform, not alarm.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Clarity first</h3>
            <p className="text-gray-500 leading-relaxed">
              Built to support better decisions and encourage professional care
              when needed.
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 text-center text-sm text-gray-400 border-t border-gray-200/60">
        <p>
          Sense+ does not provide medical diagnoses and does not replace
          professional medical advice.
        </p>
        <p className="mt-4">© {new Date().getFullYear()} Sense+</p>
      </footer>

    </main>
  );
}
