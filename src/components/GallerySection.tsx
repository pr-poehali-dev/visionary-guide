import { cn } from '@/lib/utils';

const galleryItems = [
  {
    src: 'https://cdn.poehali.dev/projects/c25a432b-e7e9-42fd-a6c8-0808501abc23/bucket/7f88019d-1ff9-4624-a734-3b8658236e7e.jpg',
    title: 'Когда язык длиннее стендапа',
  },
  {
    src: 'https://cdn.poehali.dev/projects/c25a432b-e7e9-42fd-a6c8-0808501abc23/bucket/02c51cf2-5296-413d-8b10-b92062633fb3.jpg',
    title: 'Романтик на природе',
  },
  {
    src: 'https://cdn.poehali.dev/projects/c25a432b-e7e9-42fd-a6c8-0808501abc23/bucket/0e4c28c3-b2aa-460f-a102-0b2a4460557a.jpg',
    title: 'Задумчивый дрип',
  },
  {
    src: 'https://cdn.poehali.dev/projects/c25a432b-e7e9-42fd-a6c8-0808501abc23/bucket/5b6e54c9-72ca-441e-8632-8cff0ebc824b.jpg',
    title: 'Фиолетовый бунтарь',
  },
  {
    src: 'https://cdn.poehali.dev/projects/c25a432b-e7e9-42fd-a6c8-0808501abc23/bucket/3efb5323-36e2-4622-a82a-3a302af5e06d.jpg',
    title: 'Кадр перед выступом',
  },
];

export default function GallerySection() {
  return (
    <section className="bg-black py-20 px-8 md:px-16">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-12 text-center">
          Из жизни комика
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={cn(
                'group relative overflow-hidden rounded-lg aspect-square',
                'transform transition-all duration-500 hover:scale-105'
              )}
            >
              <img
                src={item.src}
                alt={item.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-lg font-light">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
