import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#f1efec] px-6 md:px-16 py-20">
      <section className="max-w-6xl mx-auto text-center animate-fadeIn">

        <Image
          src="/logo.jpg"
          alt="Магия Страз"
          width={220}
          height={230}
          style={{ height: "auto" }}
          className="mx-auto -mb-14 object-contain"
        />

        <p className="font-[Prata] uppercase tracking-[0.22em] text-3xl text-neutral-900 mb-0">
          Магия Страз
        </p>

        <p className="text-base tracking-[0.12em] text-neutral-500 mb-5">
          студия инкрустации
        </p>

        <h1 className="text-3xl md:text-5xl leading-tight text-neutral-900 max-w-4xl mx-auto font-light">
          Индивидуальная инкрустация,
          <br />
          которая выглядит как личная эстетика
        </h1>

        <p className="mt-8 text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto leading-relaxed">
          Работаю под заказ: изделия клиента или подбор вещи под задачу.
          Без шаблонов, без потери вкуса, с ювелирной точностью.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
          <a
            href="https://t.me/rasskazova_natalya"
            className="px-8 py-4 bg-[#a89280] text-white rounded-full text-sm tracking-[0.08em] border border-[#6f6156] hover:border-neutral-800 hover:shadow-sm transition-all duration-300"
          >
            Обсудить заказ
          </a>

          <a
            href="https://t.me/studiya_ms_podbor_podarka_bot"
            target="_blank"
            className="px-8 py-4 border border-neutral-500 bg-white rounded-full text-sm tracking-[0.08em] hover:border-neutral-800 hover:shadow-sm transition-all duration-300"
          >
            Пройти подбор в Telegram
          </a>
        </div>

        <div className="mt-16 mb-12 md:mb-16 grid md:grid-cols-3 gap-4 md:gap-6 text-left">
          <div className="p-6 bg-white rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <p className="text-sm text-neutral-600">Материалы</p>
            <p className="mt-2 text-neutral-900">
              Только проверенные стразы и качественные основы
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <p className="text-sm text-neutral-600">Подход</p>
            <p className="mt-2 text-neutral-900">
              Каждая работа собирается под конкретный запрос
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <p className="text-sm text-neutral-600">Результат</p>
            <p className="mt-2 text-neutral-900">
              Изделие, которое производит впечатление сразу
            </p>
          </div>
        </div>

      </section>
    <section className="max-w-6xl mx-auto py-10 md:py-16 px-6 md:px-0 animate-fadeIn">
  <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-start">

    <div>
      <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-4">
        Почему выбирают
      </p>

      <h2 className="text-3xl md:text-5xl leading-tight text-neutral-900 font-light">
        Не просто декор,
        <br />
        а работа, в которой важна мера
      </h2>
    </div>

    <div className="space-y-8 text-neutral-600 leading-relaxed text-lg">

      <p>
        Каждое изделие создаётся под конкретного человека,
        повод, стиль и задачу.
      </p>

      <p>
        Здесь нет готового потока —
        только индивидуальная работа,
        где важны пропорции, материалы и впечатление.
      </p>

      <p>
        Инкрустация должна усиливать вещь,
        а не делать её перегруженной.
      </p>

    </div>

  </div>
</section><section className="max-w-6xl mx-auto py-10 md:py-14 px-6 md:px-0 animate-fadeIn">
  <div className="max-w-2xl">

    <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-4">
      Профессиональный подход
    </p>

    <p className="text-lg md:text-2xl text-neutral-900 leading-relaxed font-light">
      Сертифицированный специалист по художественной инкрустации стразами.
      Каждая работа создаётся вручную с учётом материала, формы изделия и общего впечатления.
    </p>

  </div>  
</section><section className="max-w-6xl mx-auto py-10 md:py-16 px-6 md:px-0 animate-fadeIn">
  <div className="text-center mb-8 md:mb-12">

    <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-4">
      Процесс заказа
    </p>

    <h2 className="text-3xl md:text-5xl font-light text-neutral-900">
      Всё спокойно и понятно
    </h2>

  </div>

  <div className="grid md:grid-cols-4 gap-4 md:gap-6">

    <div className="px-6 py-5 bg-white rounded-2xl shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <p className="text-sm text-neutral-400 mb-3">01</p>
      <p className="text-neutral-900 leading-relaxed">
        Вы пишете запрос или проходите подбор через Telegram-бот
      </p>
    </div>

    <div className="px-6 py-5 bg-white rounded-2xl shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <p className="text-sm text-neutral-400 mb-3">02</p>
      <p className="text-neutral-900 leading-relaxed">
        Мы обсуждаем формат, изделие, стиль и детали
      </p>
    </div>

    <div className="px-6 py-5 bg-white rounded-2xl shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <p className="text-sm text-neutral-400 mb-3">03</p>
      <p className="text-neutral-900 leading-relaxed">
        Подбирается композиция и согласовывается визуальное решение
      </p>
    </div>

    <div className="px-6 py-5 bg-white rounded-2xl shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <p className="text-sm text-neutral-400 mb-3">04</p>
      <p className="text-neutral-900 leading-relaxed">
        Изделие создаётся вручную и передаётся клиенту
      </p>
    </div>

  </div>
</section><section className="max-w-6xl mx-auto py-12 md:py-20 px-6 md:px-0 animate-fadeIn">
  <div className="text-center mb-8 md:mb-12">

    <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-4">
      Для кого
    </p>

    <h2 className="text-3xl md:text-5xl font-light text-neutral-900">
      Когда хочется не просто красиво,
      <br />
      а с ощущением вкуса
    </h2>

  </div>

  <div className="grid md:grid-cols-3 gap-4 md:gap-6">

    <div className="px-6 py-5 bg-white rounded-2xl shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <p className="text-neutral-900 text-lg leading-relaxed">
        Для тех, кто выбирает вещь для себя —
        как продолжение своего стиля.
      </p>
    </div>

    <div className="px-6 py-5 bg-white rounded-2xl shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <p className="text-neutral-900 text-lg leading-relaxed">
        Для подарка, который хочется сделать действительно запоминающимся.
      </p>
    </div>

    <div className="px-6 py-5 bg-white rounded-2xl shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <p className="text-neutral-900 text-lg leading-relaxed">
        Для образа, где важна деталь,
        которая считывается сразу.
      </p>
    </div>

  </div>
</section><section className="max-w-6xl mx-auto py-10 md:py-16 px-6 md:px-0 animate-fadeIn">
  <div className="text-center mb-8 md:mb-14">

    <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-4">
      Избранные работы
    </p>

    <h2 className="text-3xl md:text-5xl font-light text-neutral-900">
      То, что уже было создано
    </h2>

  </div>

  <div className="grid md:grid-cols-3 gap-4 md:gap-10">

    <div className="rounded-2xl overflow-hidden">
  <Image
    src="/photo1.jpg"
    alt="Работа Магия Страз"
    width={900}
    height={1200}
    className="w-full h-auto rounded-2xl transition-all duration-700 hover:scale-[1.015]"
  />
</div>

    <div className="rounded-2xl overflow-hidden">
  <Image
    src="/photo2.jpg"
    alt="Работа Магия Страз"
    width={900}
    height={1200}
    className="w-full h-auto rounded-2xl transition-all duration-700 hover:scale-[1.015]"
  />
</div>

    <div className="rounded-2xl overflow-hidden">
  <Image
    src="/photo3.jpg"
    alt="Работа Магия Страз"
    width={900}
    height={1200}
    className="w-full h-auto rounded-2xl transition-all duration-700 hover:scale-[1.015]"
  />
</div>

  </div>

  <div className="grid md:grid-cols-3 gap-4 md:gap-10 mt-4 md:mt-6">

    <div className="rounded-2xl overflow-hidden">
  <Image
    src="/photo4.jpg"
    alt="Работа Магия Страз"
    width={900}
    height={1200}
    className="w-full h-auto rounded-2xl transition-all duration-700 hover:scale-[1.015]"
  />
</div>

    <div className="rounded-2xl overflow-hidden">
  <Image
    src="/photo5.jpg"
    alt="Работа Магия Страз"
    width={900}
    height={1200}
    className="w-full h-auto rounded-2xl transition-all duration-700 hover:scale-[1.015]"
  />
</div>

    <div className="rounded-2xl overflow-hidden">
  <Image
    src="/photo6.jpg"
    alt="Работа Магия Страз"
    width={900}
    height={1200}
    className="w-full h-auto rounded-2xl transition-all duration-700 hover:scale-[1.015]"
  />
</div>

  </div>
</section><section className="max-w-6xl mx-auto py-10 md:py-16 px-6 md:px-0 animate-fadeIn">
  <div className="bg-white rounded-3xl px-10 py-10 md:px-14 md:py-12 shadow-sm text-center">

    <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-4">
      Telegram-бот
    </p>

    <h2 className="text-3xl md:text-4xl font-light text-neutral-900 leading-tight">
      Если пока нет точного понимания,
      <br />
      с чего начать
    </h2>

    <p className="mt-8 text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
      Я создала Telegram-бот, который помогает подобрать идею изделия
      под человека, повод и желаемое впечатление.
    </p>

    <div className="mt-8">
      <a
        href="https://t.me/studiya_ms_podbor_podarka_bot"
        target="_blank"
        className="px-8 py-4 bg-[#a89280] text-white rounded-full text-sm tracking-[0.08em] border border-[#6f6156] hover:border-neutral-800 hover:shadow-sm transition-all duration-300"
      >
        Пройти подбор
      </a>
    </div>

  </div>
</section><section className="max-w-6xl mx-auto py-10 md:py-16 px-6 md:px-0 animate-fadeIn">
  <div className="text-center">

    <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-4">
      Обсудить заказ
    </p>

    <h2 className="text-3xl md:text-5xl font-light text-neutral-900 leading-[1.15]">
      Если хотите изделие под себя
      <br />
      или эффектный подарок —
      <br />
      можно начать с одного сообщения
    </h2>

    <p className="mt-8 text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
      Помогу определить формат, подобрать идею
      и предложить решение под ваш запрос.
    </p>

    <div className="mt-10 flex flex-col md:flex-row gap-4 md:gap-6 justify-center">

      <a
        href="https://t.me/rasskazova_natalya"
        className="px-8 py-4 bg-[#a89280] text-white rounded-full text-sm tracking-[0.08em] border border-[#6f6156] hover:border-neutral-800 hover:shadow-sm transition-all duration-300"
      >
        Написать в Telegram
      </a>

      <a
        href="https://t.me/studiya_ms_podbor_podarka_bot"
        target="_blank"
        className="px-8 py-4 border border-neutral-500 bg-white rounded-full text-sm tracking-[0.08em] hover:border-neutral-800 hover:shadow-sm transition-all duration-300"
      >
        Пройти подбор
      </a>

    </div>

  </div>
</section><section className="max-w-6xl mx-auto py-10 md:py-16 px-6 md:px-0 animate-fadeIn">
  <div className="text-center mb-8 md:mb-12">

    <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-4">
      Что можно оформить
    </p>

    <h2 className="text-3xl md:text-5xl font-light text-neutral-900">
      Поверхности, с которыми я работаю
    </h2>

  </div>

  <div className="grid md:grid-cols-3 gap-4 md:gap-6">

    <div className="px-6 py-5 bg-white rounded-2xl shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <p className="text-neutral-900">Стекло и посуда</p>
    </div>

    <div className="px-6 py-5 bg-white rounded-2xl shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <p className="text-neutral-900">Аксессуары и личные вещи</p>
    </div>

    <div className="px-6 py-5 bg-white rounded-2xl shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <p className="text-neutral-900">Предметы интерьера</p>
    </div>

    <div className="px-6 py-5 bg-white rounded-2xl shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <p className="text-neutral-900">Кожа, ткань, пластик</p>
    </div>

    <div className="px-6 py-5 bg-white rounded-2xl shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <p className="text-neutral-900">Металл и твёрдые поверхности</p>
    </div>

    <div className="px-6 py-5 bg-white rounded-2xl shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <p className="text-neutral-900">Изделия под индивидуальный запрос</p>
    </div>

  </div>
</section><section className="max-w-6xl mx-auto py-12 md:py-20 px-6 md:px-0 animate-fadeIn">
  <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-start">

    <div>
      <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-4">
        Почему доверяют
      </p>

      <h2 className="text-3xl md:text-5xl leading-tight text-neutral-900 font-light">
        Здесь важна
        <br />
        не только красота,
        <br />
        но и чувство меры
      </h2>
    </div>

    <div className="space-y-8 text-neutral-700 leading-relaxed text-lg">

      <p>
        Каждая работа собирается вручную,
        с учётом формы изделия,
        поверхности и общего впечатления.
      </p>

      <p>
        Используются только качественные материалы,
        которые проходят проверку в работе.
      </p>

      <p>
        Важно не просто добавить блеск,
        а сохранить эстетику вещи.
      </p>

      <p>
        Поэтому каждая композиция сначала продумывается,
        а потом уже выполняется.
      </p>

    </div>

  </div>
</section><section className="max-w-6xl mx-auto py-8 md:py-12 px-6 md:px-0 animate-fadeIn">
  <div className="text-center mb-8 md:mb-12">

    <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-4">
      Частые сомнения
    </p>

    <h2 className="text-3xl md:text-5xl font-light text-neutral-900">
      Что важно заранее учесть
    </h2>

  </div>

  <div className="grid md:grid-cols-2 gap-4 md:gap-6">

    <div className="px-6 py-5 bg-white rounded-2xl shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <p className="text-neutral-900 text-lg leading-relaxed">
        Чтобы изделие выглядело дорого,
        важно соблюдать меру,
        а не количество декора.
      </p>
    </div>

    <div className="px-6 py-5 bg-white rounded-2xl shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <p className="text-neutral-900 text-lg leading-relaxed">
        Подарок должен соответствовать человеку,
        а не просто быть эффектным.
      </p>
    </div>

    <div className="px-6 py-5 bg-white rounded-2xl shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <p className="text-neutral-900 text-lg leading-relaxed">
        Поверхность и форма всегда влияют
        на итоговое впечатление.
      </p>
    </div>

    <div className="px-6 py-5 bg-white rounded-2xl shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <p className="text-neutral-900 text-lg leading-relaxed">
        Поэтому решение всегда подбирается индивидуально.
      </p>
    </div>

  </div>
</section><section className="max-w-6xl mx-auto py-10 md:py-16 px-6 md:px-0 animate-fadeIn">
  <div className="text-center mb-8 md:mb-12">

    <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-4">
      Отзывы
    </p>

    <h2 className="text-3xl md:text-5xl font-light text-neutral-900">
      То, что особенно ценят клиенты
    </h2>

  </div>

  <div className="grid md:grid-cols-3 gap-4 md:gap-8">

  <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-sm border border-white/40">
    <Image
      src="/review1.jpg"
      alt="Отзыв клиента"
      fill
      sizes="(max-width: 768px) 100vw, 33vw"
      className="object-cover"
    />
  </div>

  <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-sm border border-white/40">
    <Image
      src="/review2.jpg"
      alt="Отзыв клиента"
      fill
      sizes="(max-width: 768px) 100vw, 33vw"
      className="object-cover"
    />
  </div>

  <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-sm border border-white/40">
    <Image
      src="/review3.jpg"
      alt="Отзыв клиента"
      fill
      sizes="(max-width: 768px) 100vw, 33vw"
      className="object-cover"
    />
  </div>

</div>
</section><section className="max-w-6xl mx-auto py-10 md:py-16 px-6 md:px-0 animate-fadeIn">
  <div className="text-center mb-8 md:mb-12">

    <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-4">
      Частые вопросы
    </p>

    <h2 className="text-3xl md:text-5xl font-light text-neutral-900">
      То, о чём спрашивают чаще всего
    </h2>

  </div>

  <div className="grid md:grid-cols-2 gap-4 md:gap-6">

    <div className="p-8 bg-white rounded-2xl shadow-sm">
      <p className="text-neutral-900 mb-3">Стразы не отклеятся со временем?</p>
      <p className="text-neutral-600 leading-relaxed">
        Используются проверенные материалы и технология, рассчитанная на реальное использование изделия.
      </p>
    </div>

    <div className="p-8 bg-white rounded-2xl shadow-sm">
      <p className="text-neutral-900 mb-3">Можно оформить свою вещь?</p>
      <p className="text-neutral-600 leading-relaxed">
        Да, можно работать как с вашим изделием, так и подобрать основу под задачу.
      </p>
    </div>

    <div className="p-8 bg-white rounded-2xl shadow-sm">
      <p className="text-neutral-900 mb-3">Если я не знаю, что выбрать?</p>
      <p className="text-neutral-600 leading-relaxed">
        Можно обсудить задачу лично или пройти подбор через Telegram.
      </p>
    </div>

    <div className="p-8 bg-white rounded-2xl shadow-sm">
      <p className="text-neutral-900 mb-3">Это будет смотреться аккуратно?</p>
      <p className="text-neutral-600 leading-relaxed">
        Композиция всегда подбирается с чувством меры и под конкретный стиль.
      </p>
    </div>

  </div>
</section>  

<section className="max-w-6xl mx-auto py-12 md:py-16 px-6 md:px-0 border-t border-neutral-200">
  <div className="text-center">

    <p className="uppercase tracking-[0.3em] text-xs text-neutral-500 mb-4">
      Контакты
    </p>

    <h2 className="text-2xl md:text-4xl font-light text-neutral-900 mb-6">
      Можно написать удобным способом
    </h2>

    <div className="space-y-3 text-neutral-700 text-lg">

      <p>
        <a
          href="https://t.me/rasskazova_natalya"
          target="_blank"
          className="hover:text-neutral-900 transition-colors duration-300"
        >
          Telegram: @rasskazova_natalya
        </a>
      </p>

      <p>
        <a
          href="https://vk.com/im?sel=rasskazovanatalya"
          target="_blank"
          className="hover:text-neutral-900 transition-colors duration-300"
        >
          ВКонтакте: rasskazovanatalya
        </a>
      </p>

      <p>
        <a
          href="tel:+79277000948"
          className="hover:text-neutral-900 transition-colors duration-300"
        >
          Телефон: +7 927 700-09-48
        </a>
      </p>

      <p>
        <a
          href="mailto:7000948@mail.ru"
          className="hover:text-neutral-900 transition-colors duration-300"
        >
          Email: 7000948@mail.ru
        </a>
      </p>

    </div>

  </div>
</section>

<p className="mt-10 text-xs text-neutral-400 text-center">
  Используя сайт, вы соглашаетесь с{" "}
  <a href="/privacy" className="underline hover:text-neutral-600">
    политикой конфиденциальности
  </a>
</p>

</main>
  );
}
