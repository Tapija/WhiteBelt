import Link from 'next/link'
import InfoCard from './InfoCard'
import { ArrowIcon, ClockIcon, LocationIcon, UsersIcon } from './icons'

export default function AboutSection({ schedule }) {
  return (
    <section className="px-4 pb-24 pt-10 sm:px-8 md:px-12 md:pb-28 md:pt-14 lg:px-16" id="about">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-12">
        <InfoCard icon={<LocationIcon />} title="LOKACIJA" className="md:col-span-4">
          <p className="mb-5 text-sm leading-7 text-zinc-400">
            Šijanska cesta 1a
            <br />
            Pula
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.18em] transition duration-500 ease-premium hover:text-zinc-300"
          >
            <span>JAVI NAM SE</span>
            <ArrowIcon />
          </Link>
        </InfoCard>

        <InfoCard icon={<ClockIcon />} title="TERMINI TRENINGA" className="md:col-span-5">
          <div className="space-y-2 text-sm">
            {schedule.map(([day, time], index) => (
              <div
                key={day}
                className={`flex items-center justify-between ${
                  index < schedule.length - 1
                    ? 'border-b border-zinc-800/80 pb-2 text-zinc-400'
                    : 'pt-1 text-zinc-400'
                }`}
              >
                <span>{day}</span>
                <span>{time}</span>
              </div>
            ))}
          </div>
        </InfoCard>

        <InfoCard icon={<UsersIcon />} title="ZA SVE RAZINE" className="md:col-span-3">
          <p className="text-sm leading-7 text-zinc-400">
            Od potpunih početnika do iskusnih vježbača, svaki trening je strukturiran tako da napredak bude jasan i postupan.
          </p>
        </InfoCard>
      </div>
    </section>
  )
}
