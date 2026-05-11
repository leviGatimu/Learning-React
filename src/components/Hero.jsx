function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-6">
          Karibu <span className="text-simba">Simba</span> Supermarket
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 mb-10">
          Fresh groceries, local favorites, and everyday essentials delivered right to your doorstep across Kigali.
        </p>
        <div className="relative mx-auto max-w-5xl group">
          <div className="absolute -inset-1 bg-gradient-to-r from-simba to-orange-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200" 
            alt="Fresh produce at a supermarket" 
            className="relative rounded-2xl shadow-2xl object-cover w-full h-[400px] sm:h-[500px] transition-transform duration-500 group-hover:scale-[1.01]"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero;