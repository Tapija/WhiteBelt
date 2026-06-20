import trainerImage from '../../gogi.jpeg'

const highlights = [
  {
    value: '2017',
    eyebrow: 'Prekretnica',
    title: 'Godina kada je Jiu Jitsu postao glavni put.',
    label: 'Preseljenje na studij pretvorilo je interes u punu posvećenost — od tada se gradi stil temeljen na radu, ritmu i disciplini.',
  },
  {
    value: '2023',
    eyebrow: 'Stručna potvrda',
    title: 'Završeno osposobljavanje za voditelja Ju Jitsu-a.',
    label: 'Formalno obrazovanje na Hrvatskom institutu za kineziologiju zaokružilo je praktično znanje stečeno na strunjači.',
  },
  {
    value: '100+',
    eyebrow: 'Natjecateljski put',
    title: '100 + mečeva poslije, a fokus je i dalje isti.',
    label: 'Stotinjak izlazaka na tatami donijelo je mirnoću pod pritiskom i iskustvo koje se danas prenosi dalje.',
  },
]

export default function TrainerSection() {
  return (
    <section className="px-4 pb-16 pt-14 sm:px-8 md:px-12 md:pb-20 md:pt-20 lg:px-16" aria-labelledby="trainer-title">
      <div id="trainer" className="mx-auto max-w-7xl scroll-mt-28 rounded-[2rem] border border-white/10 bg-white/[0.04] p-1.5 shadow-[0_30px_120px_rgba(0,0,0,0.18)] md:scroll-mt-32">
        <div className="grid overflow-hidden rounded-[calc(2rem-0.375rem)] border border-white/10 bg-zinc-950/95 lg:grid-cols-[minmax(320px,0.92fr)_minmax(0,1.08fr)]">
          <div className="relative border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-8">
            <div className="absolute left-8 top-8 h-40 w-40 rounded-full bg-white/8 blur-3xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/40">
              <img
                src={trainerImage.src}
                alt="Goran, trener White Belt BJJ-a"
                className="h-full w-full object-cover grayscale transition duration-700 ease-premium hover:scale-[1.03] hover:grayscale-0"
              />
            </div>

            <div className="relative mt-6 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.14)]">
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-400">White Belt BJJ</p>
              <p className="mt-3 text-base leading-7 text-zinc-200 sm:text-lg">
                “Bez kompliciranja, bez pametovanja — konzistencija je ključ.”
              </p>
            </div>

            <div className="relative mt-4 rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)] p-5 sm:p-6">
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-400">Trenerska filozofija</p>
              <p className="mt-3 text-base leading-8 text-zinc-300 sm:text-lg">
                Moja trenerska filozofija je jednostavna: bez kompliciranja i bez prazne priče — konzistencija je
                ključ. Najviše me veseli trenutak kada netko napreduje upravo zbog rada i truda koji smo uložili
                zajedno. Želim da svatko tko dođe na trening ode kući motiviran, mirniji i ponosan na svoj napredak.
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-8">
            <div className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-300">
              O meni / Trener / Filozofija
            </div>

            <h2
              id="trainer-title"
              className="mt-5 max-w-4xl font-display text-[clamp(2.6rem,5vw,4.6rem)] uppercase leading-[0.92] tracking-[0.03em] text-white"
            >
              Goran — trener koji živi Jiu Jitsu i prenosi ga bez kompliciranja.
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
              Zovem se Goran i na tatamiju sam još od srednjoškolskih dana. Nisam birao samo jednu disciplinu —
              trenirao sam sve što sam mogao, od MMA-a i kickboxinga do Ju Jitsu-a. No 2017. godine, kada me studij
              odveo u drugi grad, Jiu Jitsu je postao ono čemu sam dao cijelo srce.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
              Iste godine krenula je i moja natjecateljska priča. Prvo natjecanje, pa drugo, pa sljedeće — i tako
              stotinjak mečeva kasnije još sam uvijek ovdje, spreman za novi izazov. Godine 2022. upisao sam
              osposobljavanje za voditelja Ju Jitsu-a na Hrvatskom institutu za kineziologiju u Zagrebu, završio ga
              2023., a iste godine licenciran sam i za suca Ju Jitsu-a. Godine 2026. odradio sam i mikrokvalifikaciju
              za trenera Ju Jitsu-a 1. razine.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045)_0%,rgba(255,255,255,0.02)_100%)] p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.14)] transition duration-500 ease-premium hover:-translate-y-1 hover:border-white/15"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-70" />
                  <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">{item.eyebrow}</p>
                  <div className="mt-5">
                    <p className="text-3xl font-semibold tracking-[0.06em] text-white sm:text-[2.2rem]">{item.value}</p>
                  </div>
                  <p className="mt-5 text-base leading-7 text-zinc-200">{item.title}</p>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">{item.label}</p>
                </div>
              ))}
            </div>

            <p className="mt-7 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
              Danas kroz White Belt BJJ želim prenijeti znanje i iskustvo dalje — početnicima, natjecateljima i svima
              koji žele stvarno upoznati Jiu Jitsu.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
