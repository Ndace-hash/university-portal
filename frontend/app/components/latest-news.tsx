import volleyballTeamImage from 'app/assets/images/volleyball-team.jpg';
import softwareVR from 'app/assets/images/software-vr.jpg'

export function LatestNews() {
  const news = [
    {
      id: 1,
      title: "ACE Women's Volleyball Team Finishes Second at Continental Championship",
      date: "October 28, 2024",
      description:
        "The women's volleyball team demonstrated exceptional skill and teamwork, securing second place at the continental championship. Lorem Ipsum is simply dummy text from the print industry.",
      image: volleyballTeamImage,
    },
    {
      id: 2,
      title: "ACE launches Center for Sustainable Technology and Design",
      date: "October 2, 2024",
      description:
        "The new center aims to bridge the gap between sustainable research and practical applications. This initiative will focus on developing innovative solutions for environmental challenges.",
      image: softwareVR,
    },
    {
      id: 3,
      title: "ACE launches Center for Sustainable Technology and Design",
      date: "August 14, 2024",
      description:
        "Building on our commitment to innovation, this center will serve as a hub for collaborative research and development in sustainable technologies and environmental design.",
      image: softwareVR,
    },
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="container px-4 md:px-8 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            LATEST NEWS
          </h2>
          <div className="w-16 h-1 bg-slate-800 mx-auto"></div>
        </div>

        {/* News Grid */}
        <div className="space-y-6">
          {news.map((article) => (
            <article key={article.id} className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition flex flex-col md:flex-row">
              {/* Image */}
              <div className="flex-shrink-0 w-full md:w-32 h-32 md:h-auto">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-grow flex flex-col justify-between p-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 hover:text-slate-600 cursor-pointer transition">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    {article.description}
                  </p>
                </div>
                <p className="text-xs text-slate-400 font-medium">{article.date}</p>
              </div>
            </article>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-slate-700 text-white font-semibold rounded hover:bg-slate-800 transition">
            View More News
          </button>
        </div>
      </div>
    </section>
  );
}
