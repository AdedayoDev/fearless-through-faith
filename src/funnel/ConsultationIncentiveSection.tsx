export function ConsultationIncentiveSection() {
  return (
    <section
      className='relative mt-[68px] overflow-hidden rounded-3xl border border-[rgba(118,86,62,0.16)] bg-[linear-gradient(135deg,rgba(255,255,255,0.86),rgba(249,239,226,0.9))] px-4 py-7 shadow-[0_24px_52px_rgba(35,24,15,0.08)] min-[641px]:mt-24 min-[641px]:px-7 min-[641px]:py-10'
      aria-labelledby='consultation-incentive-heading'
    >
      <div className='relative mx-auto grid max-w-[960px] items-center gap-7 min-[761px]:grid-cols-[minmax(0,0.9fr)_minmax(280px,1.1fr)] min-[761px]:gap-10'>
        <div className='relative overflow-hidden rounded-2xl border border-[rgba(95,72,56,0.14)] bg-[#f4ecdf] shadow-[0_18px_34px_rgba(41,30,24,0.12)]'>
          <img
            src='/one-on-one-01.png'
            alt='One-on-one consultation with Pastor'
            className='block h-auto w-full object-cover'
          />
          <span className='absolute left-3 top-3 rounded-full bg-[#1b120d] px-3 py-1.5 text-[0.66rem] font-bold uppercase tracking-[0.1em] text-[#f9dfb7]'>
            Exclusive buyer bonus
          </span>
        </div>

        <div className='text-center min-[761px]:text-left'>
          <p className='mb-2.5 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[#8b5e34]'>
            Buy the book. Receive personal guidance.
          </p>
          <h2
            id='consultation-incentive-heading'
            className='m-0 text-[clamp(1.8rem,4vw,3rem)] leading-[1.1] tracking-[-0.05em] text-[#1b120d]'
          >
            One-on-one consultation with Pastor
          </h2>
          <p className='mx-auto mt-4 max-w-[520px] text-[1rem] leading-[1.65] text-[#5a4c43] min-[761px]:mx-0'>
            Purchase <em>Fearless Through Faith</em> today and receive the
            opportunity for a personal one-on-one consultation with Pastor.
          </p>
          <div className='mt-5 inline-flex items-center gap-2 rounded-full border border-[rgba(139,94,52,0.2)] bg-[rgba(255,255,255,0.58)] px-4 py-2 text-[0.78rem] font-semibold text-[#6b472c]'>
            <span aria-hidden='true' className='text-[#a66a35]'>
              ✦
            </span>
            Included when you buy the book
          </div>
        </div>
      </div>
    </section>
  );
}
