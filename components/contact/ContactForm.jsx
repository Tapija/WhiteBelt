'use client'

import { useState } from 'react'
import { useForm } from '@tanstack/react-form'
import { ArrowIcon } from '../landing/icons'

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function FieldError({ field }) {
  const error = field.state.meta.errors?.[0]

  if (!error || !field.state.meta.isBlurred) {
    return null
  }

  return <p className="mt-2 text-sm text-red-300">{String(error)}</p>
}

export default function ContactForm() {
  const [submitState, setSubmitState] = useState({ type: 'idle', message: '' })

  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      website: '',
    },
    onSubmit: async ({ value, formApi }) => {
      setSubmitState({ type: 'idle', message: '' })

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(value),
      })

      const payload = await response.json().catch(() => ({ error: 'Unable to send your message right now.' }))

      if (!response.ok) {
        setSubmitState({
          type: 'error',
          message: payload.error || 'Unable to send your message right now.',
        })
        return
      }

      formApi.reset()
      setSubmitState({
        type: 'success',
        message: payload.message || 'Your message has been sent. We will get back to you soon.',
      })
    },
  })

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-1.5">
      <div className="rounded-[calc(2rem-0.375rem)] border border-white/10 bg-zinc-950/90 p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.14)] sm:p-8">
        <div className="mb-6">
          <div className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-300">
            Send us a message
          </div>
          <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,4.25rem)] uppercase leading-[0.92] tracking-[0.03em] text-white">
            Book your first conversation.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            Tell us a bit about your experience and goals. We will reach out with the best next step for getting you on the mats.
          </p>
        </div>

        <form
          onSubmit={(event) => {
            event.preventDefault()
            event.stopPropagation()
            void form.handleSubmit()
          }}
          className="space-y-5"
        >
          <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
            <form.Field name="website">
              {(field) => (
                <input
                  type="text"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(event) => field.handleChange(event.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              )}
            </form.Field>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <form.Field
              name="name"
              validators={{
                onBlur: ({ value }) => {
                  if (!value.trim()) return 'Name is required.'
                  if (value.trim().length < 2) return 'Please enter your full name.'
                  return undefined
                },
              }}
            >
              {(field) => (
                <label className="block text-sm text-zinc-300">
                  <span className="mb-2 block text-[11px] font-medium uppercase tracking-[0.24em] text-zinc-400">
                    Name
                  </span>
                  <input
                    type="text"
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(event) => field.handleChange(event.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition duration-300 placeholder:text-zinc-600 focus:border-white/30"
                    placeholder="Your full name"
                  />
                  <FieldError field={field} />
                </label>
              )}
            </form.Field>

            <form.Field
              name="email"
              validators={{
                onBlur: ({ value }) => {
                  if (!value.trim()) return 'Email is required.'
                  if (!isValidEmail(value.trim())) return 'Enter a valid email address.'
                  return undefined
                },
              }}
            >
              {(field) => (
                <label className="block text-sm text-zinc-300">
                  <span className="mb-2 block text-[11px] font-medium uppercase tracking-[0.24em] text-zinc-400">
                    Email
                  </span>
                  <input
                    type="email"
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(event) => field.handleChange(event.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition duration-300 placeholder:text-zinc-600 focus:border-white/30"
                    placeholder="you@example.com"
                  />
                  <FieldError field={field} />
                </label>
              )}
            </form.Field>
          </div>

          <form.Field
            name="phone"
            validators={{
              onBlur: ({ value }) => {
                if (!value.trim()) return undefined
                if (value.trim().length < 7) return 'Please enter a valid phone number.'
                return undefined
              },
            }}
          >
            {(field) => (
              <label className="block text-sm text-zinc-300">
                <span className="mb-2 block text-[11px] font-medium uppercase tracking-[0.24em] text-zinc-400">
                  Phone (optional)
                </span>
                <input
                  type="tel"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(event) => field.handleChange(event.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition duration-300 placeholder:text-zinc-600 focus:border-white/30"
                  placeholder="Best number to reach you"
                />
                <FieldError field={field} />
              </label>
            )}
          </form.Field>

          <form.Field
            name="message"
            validators={{
              onBlur: ({ value }) => {
                const trimmed = value.trim()
                if (!trimmed) return 'Message is required.'
                if (trimmed.length < 20) return 'Please share a little more detail.'
                return undefined
              },
            }}
          >
            {(field) => (
              <label className="block text-sm text-zinc-300">
                <span className="mb-2 block text-[11px] font-medium uppercase tracking-[0.24em] text-zinc-400">
                  Message
                </span>
                <textarea
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(event) => field.handleChange(event.target.value)}
                  rows={6}
                  className="w-full rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition duration-300 placeholder:text-zinc-600 focus:border-white/30"
                  placeholder="Tell us about your training background, schedule, or what you want from your first class."
                />
                <FieldError field={field} />
              </label>
            )}
          </form.Field>

          {submitState.type !== 'idle' ? (
            <div
              className={`rounded-2xl border px-4 py-3 text-sm ${
                submitState.type === 'success'
                  ? 'border-emerald-400/20 bg-emerald-400/10 text-emerald-200'
                  : 'border-red-400/20 bg-red-400/10 text-red-200'
              }`}
            >
              {submitState.message}
            </div>
          ) : null}

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-xs uppercase tracking-[0.22em] text-zinc-500">
              By submitting, you agree that White Belt may contact you about classes and scheduling.
            </p>
            <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting, state.isPristine]}>
              {([canSubmit, isSubmitting, isPristine]) => (
                <button
                  type="submit"
                  disabled={!canSubmit || isPristine || isSubmitting}
                  className="group inline-flex items-center justify-between rounded-full border border-white bg-white px-6 py-3 text-sm font-bold tracking-[0.22em] text-black transition-all duration-700 ease-premium hover:-translate-y-px hover:bg-zinc-100 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <span>{isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
                  <span className="ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-all duration-700 ease-premium group-hover:translate-x-1 group-hover:-translate-y-[1px] group-hover:scale-105">
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </span>
                </button>
              )}
            </form.Subscribe>
          </div>
        </form>
      </div>
    </div>
  )
}
