import uniBackground from 'app/assets/images/uni-bg.jpg';
export function HeroSection() {
  const stats = [
    { number: "10", label: "Buildings" },
    { number: "20,000+", label: "Students" },
    { number: "80+", label: "Programs" },
    { number: "~2020", label: "Established" },
  ];

  return (
    <section className="relative w-full h-96 md:h-[520px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center min-h-screen"
        style={{
          backgroundImage: `url('${uniBackground}')`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/35"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-12">
        {/* Headline */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-pretty mb-6 leading-tight">
            Academy of<br />Cognitum Excellence
          </h1>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-3xl md:text-4xl font-bold text-white">{stat.number}</p>
              <p className="text-xs md:text-sm text-white/90 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 md:gap-4">
          <button className="px-6 py-2.5 border-2 border-white text-white font-semibold text-sm hover:bg-white/10 transition rounded">
            VIEW IN GALLERY
          </button>
          <button className="px-6 py-2.5 border-2 border-white text-white font-semibold text-sm hover:bg-white/10 transition rounded">
            CONTACT US
          </button>
          <button className="px-6 py-2.5 border-2 border-white text-white font-semibold text-sm hover:bg-white/10 transition rounded">
            GET OUR COURIER
          </button>
        </div>
      </div>
    </section>
  );
}
