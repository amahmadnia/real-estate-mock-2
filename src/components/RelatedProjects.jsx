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
      statusColor: 'bg-accent'
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
      statusColor: 'bg-primary'
    }
  ];

  return (
    <section id="related-projects" className="py-20 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-bold mb-4">
            پروژه‌های دیگر
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            نمونه‌هایی از
            <span className="text-accent mr-2">کارهای ما</span>
          </h2>
          <p className="text-secondary text-lg">
            مجموعه‌ای از پروژه‌های موفق ما در سراسر تهران
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 ${project.statusColor} text-white text-xs font-bold rounded-full shadow-lg`}>
                    {project.status}
                  </span>
                </div>

                {/* Stats Overlay */}
                <div className="absolute bottom-4 right-4 left-4 flex items-center gap-3 text-white">
                  <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    <Layers className="w-3.5 h-3.5" />
                    <span className="text-xs font-semibold">{project.floors}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    <span className="text-xs font-semibold">{project.units}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {project.title}
                </h3>

                <div className="flex items-center gap-2 text-secondary mb-4">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-sm">{project.location}</span>
                </div>

                <p className="text-secondary/80 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* CTA Button */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary hover:text-accent font-semibold transition-colors duration-300 group/btn text-sm"
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
            className="inline-block px-8 py-3 border border-primary text-primary rounded-lg font-medium text-sm transition-all duration-300 hover:bg-primary hover:text-white"
          >
            مشاهده همه پروژه‌ها
          </a>
        </div>
      </div>
    </section>
  );
};

export default RelatedProjects;
