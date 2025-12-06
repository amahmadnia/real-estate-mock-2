import { ArrowLeft, MapPin, Layers } from 'lucide-react';

const RelatedProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'برج آسمان',
      location: 'ولنجک، تهران',
      description: 'برج 15 طبقه با 45 واحد لوکس، دارای تمامی امکانات رفاهی و تفریحی',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
      floors: '15 طبقه',
      units: '45 واحد',
      status: 'تحویل داده شده',
      statusColor: 'bg-green-500'
    },
    {
      id: 2,
      title: 'پارک نور',
      location: 'نیاوران، تهران',
      description: 'مجموعه 6 طبقه با 18 واحد، چشم‌انداز به پارک و کوه',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
      floors: '6 طبقه',
      units: '18 واحد',
      status: 'در حال ساخت',
      statusColor: 'bg-burnt-peach'
    },
    {
      id: 3,
      title: 'رویای سبز',
      location: 'فرمانیه، تهران',
      description: 'ساختمان 8 طبقه با 24 واحد و فضای سبز اختصاصی',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80',
      floors: '8 طبقه',
      units: '24 واحد',
      status: 'پیش فروش',
      statusColor: 'bg-dusk-blue'
    }
  ];

  return (
    <section id="related-projects" className="section-padding bg-light-cyan">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="inline-block px-6 py-3 bg-gradient-to-r from-burnt-peach to-burnt-peach-dark text-white rounded-full text-lg font-bold mb-6 shadow-lg">
            پروژه‌های دیگر
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-jet-black mb-6">
            نمونه‌هایی از
            <span className="block mt-2 bg-gradient-to-r from-dusk-blue to-burnt-peach bg-clip-text text-transparent">کارهای ما</span>
          </h2>
          <p className="text-jet-black text-xl mt-6 leading-relaxed font-medium">
            مجموعه‌ای از پروژه‌های موفق ما در سراسر تهران
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="card-luxury group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="image-overlay"></div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-4 py-2 ${project.statusColor} text-white text-xs font-bold rounded-full shadow-lg`}>
                    {project.status}
                  </span>
                </div>

                {/* Stats Overlay */}
                <div className="absolute bottom-4 right-4 left-4 flex items-center gap-4 text-white">
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full">
                    <Layers className="w-4 h-4" />
                    <span className="text-sm font-semibold">{project.floors}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full">
                    <span className="text-sm font-semibold">{project.units}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-jet-black mb-2">
                  {project.title}
                </h3>

                <div className="flex items-center gap-2 text-warm-gray mb-4">
                  <MapPin className="w-4 h-4 text-dusk-blue" />
                  <span className="text-sm">{project.location}</span>
                </div>

                <p className="text-warm-gray leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* CTA Button */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-dusk-blue hover:text-dusk-blue-dark font-semibold transition-colors duration-300 group/btn"
                >
                  <span>مشاهده جزئیات</span>
                  <ArrowLeft className="w-4 h-4 group-hover/btn:-translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block px-10 py-4 bg-transparent border-2 border-dusk-blue text-dusk-blue rounded-sm font-semibold text-base tracking-wide uppercase transition-all duration-300 hover:bg-dusk-blue hover:text-white shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            مشاهده همه پروژه‌ها
          </a>
        </div>
      </div>
    </section>
  );
};

export default RelatedProjects;
