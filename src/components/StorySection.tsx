export default function StorySection() {
  return (
    <section className="bg-zinc-900 py-20 px-8 md:px-16">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-12 text-center">
          Легенда МБОУ СОШ №4
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-white/80 text-base md:text-lg leading-relaxed">
            <p>
              В МБОУ СОШ №4 Иркутска ходили странные слухи о Давиде. Никто не знал, откуда у него появилась привычка приходить на уроки с бутылкой «Егермейстера» спрятанной в рюкзаке, но все сразу чувствовали странное напряжение.
            </p>
            <p>
              Строгий завуч Николай Сергеевич давно подозревал что-то неладное. Он был человеком, который видел все: кто списывает, кто курит в туалете и кто слишком долго задерживается в коридорах после звонка. Но Давид казался ему… невозможным. Каждый раз, когда Николай Сергеевич заходил в класс, Давид сидел с пустым взглядом, а бутылка словно исчезала сама по себе.
            </p>
            <p>
              Однажды вечером, когда школа опустела, Николай Сергеевич решил проверить, куда пропадают ночами странные звуки и почему в кладовке пахнет травяным ликером. Он медленно поднялся на третий этаж, где, как говорят, духи старых учителей все еще бродят по коридорам.
            </p>
            <p>
              Вдруг он услышал тихий шепот: «Не тревожь меня…» Это был Давид, сидевший на столе с открытой бутылкой Егермейстера, вокруг которого плавали темные тени. Завуч, побелевший от страха, понял, что в этой школе давно появился не ученик, а… нечто, питающееся страхом взрослых.
            </p>
            <p className="text-white/60 italic">
              С тех пор говорят, что в МБОУ СОШ №4 Иркутска, если прислушаться в тихие ночи, можно услышать, как Давид тихо шепчет старым коридорам, а строгий Николай Сергеевич бродит по этажам, пытаясь спасти школу… но каждый раз бутылка снова появляется, и тени только улыбаются.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://cdn.poehali.dev/projects/c25a432b-e7e9-42fd-a6c8-0808501abc23/bucket/1d61246d-07ae-4332-9401-ebb0cde0e067.jpg"
              alt="Давид на Байкале"
              className="rounded-lg w-full h-48 object-cover"
            />
            <img
              src="https://cdn.poehali.dev/projects/c25a432b-e7e9-42fd-a6c8-0808501abc23/bucket/a37e57ee-adba-4d4c-9114-6d3ade7c038d.jpg"
              alt="МБОУ СОШ №4"
              className="rounded-lg w-full h-48 object-cover"
            />
            <img
              src="https://cdn.poehali.dev/projects/c25a432b-e7e9-42fd-a6c8-0808501abc23/bucket/e7150921-8d91-4b63-a741-8647200c0f6b.png"
              alt="Легендарная бутылка"
              className="rounded-lg w-full h-48 object-contain bg-white"
            />
            <img
              src="https://cdn.poehali.dev/projects/c25a432b-e7e9-42fd-a6c8-0808501abc23/bucket/360240e2-2d10-40f0-b014-68c171bdfd20.jpg"
              alt="Тайный вход"
              className="rounded-lg w-full h-48 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
