import Link from 'next/link'
import InfoCard from './InfoCard'
import { ArrowIcon, ClockIcon, LocationIcon, UsersIcon } from './icons'

export default function AboutSection({ schedule }) {
  return (
    <section className="px-4 py-24 sm:px-8 md:px-12 md:py-32 lg:px-16" id="about">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-12">
        <InfoCard icon={<LocationIcon />} title="LOCATION" className="md:col-span-4">
          <p className="mb-5 text-sm leading-7 text-zinc-400">
            123 Grapple Ave
            <br />
            Fighter City, FC 12345
            <br />
            United States
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.18em] transition duration-500 ease-premium hover:text-zinc-300"
          >
            <span>GET IN TOUCH</span>
            <ArrowIcon />
          </Link>
        </InfoCard>

        <InfoCard icon={<ClockIcon />} title="TRAINING TIMES" className="md:col-span-5">
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

        <InfoCard icon={<UsersIcon />} title="ALL LEVELS" className="md:col-span-3">
          <p className="text-sm leading-7 text-zinc-400">
            From complete beginners to experienced grapplers, every class is structured to make progress feel steady.
          </p>
        </InfoCard>
      </div>
    </section>
  )
}
