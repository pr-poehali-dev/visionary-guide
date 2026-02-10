export default function Footer() {
  return (
    <footer className="bg-black py-12 px-8 md:px-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-light text-white mb-8">Разработчики сайта</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/20">
                <img
                  src="https://cdn.poehali.dev/projects/c25a432b-e7e9-42fd-a6c8-0808501abc23/bucket/fc703a53-5c6e-41dd-bd3f-ef55e80be5a8.png"
                  alt="Игорь Монилов"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xl text-white font-light">Игорь Монилов</p>
              <p className="text-white/60">Разработчик</p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/20">
                <img
                  src="https://cdn.poehali.dev/projects/c25a432b-e7e9-42fd-a6c8-0808501abc23/bucket/d4a130b1-8100-4205-814e-688da054709b.png"
                  alt="Навиков Святослав"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xl text-white font-light">Навиков Святослав</p>
              <p className="text-white/60">Основатель</p>
              <a
                href="https://t.me/+MNOL3HEckF02MjJi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                Telegram канал
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/40 text-sm">
            © 2025 Бекоев Давид. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
