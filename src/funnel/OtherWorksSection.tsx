import { CTAButton } from "../components/CTAButton";
import { SELLER_CHECKOUT_URL } from "../config";

type AuthorBook = {
  id: string;
  title: string;
  coverImage: string;
  description: string;
  href?: string;
};

const books: AuthorBook[] = [
  {
    id: "book-one",
    title: "Book One",
    coverImage: "/images/other-work-placeholder-1.jpg",
    description:
      "A compact faith resource for readers seeking clarity and personal renewal.",
    href: "#",
  },
  {
    id: "book-two",
    title: "Book Two",
    coverImage: "/images/other-work-placeholder-2.jpg",
    description:
      "A practical message about walking in spiritual confidence and obedience.",
    href: "#",
  },
  {
    id: "book-three",
    title: "Book Three",
    coverImage: "/images/other-work-placeholder-3.jpg",
    description:
      "A pastoral reflection on courage, identity, and trusting God in uncertainty.",
    href: "#",
  },
];

interface AuthorBookCardProps {
  book: AuthorBook;
  index: number;
}

function AuthorBookCard({ book, index }: AuthorBookCardProps) {
  const content = (
    <>
      <div className='p-4 pb-0'>
        <img
          src={book.coverImage}
          alt={`${book.title} cover placeholder`}
          className='block h-[220px] w-full rounded-2xl border border-[rgba(99,74,58,0.12)] bg-[#efe6dd] object-cover min-[641px]:h-[260px]'
        />
      </div>

      <div className='px-[18px] pb-5 pt-[18px]'>
        <h3 className='mb-2 text-[1.15rem] leading-[1.4] text-[#1b120d]'>
          {book.title}
        </h3>
        <p className='m-0 leading-[1.65] text-[#51453f]'>{book.description}</p>
      </div>
    </>
  );

  if (book.href && book.href !== "#") {
    return (
      <a
        href={book.href}
        className='block overflow-hidden rounded-[22px] border border-[rgba(109,82,63,0.12)] bg-white/[0.78] text-inherit no-underline shadow-[0_18px_32px_rgba(39,30,24,0.04)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_36px_rgba(39,29,22,0.08)] motion-safe:animate-[card-in_0.45s_ease_both]'
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {content}
      </a>
    );
  }

  return (
    <article
      className='block overflow-hidden rounded-[22px] border border-[rgba(109,82,63,0.12)] bg-white/[0.78] text-inherit no-underline shadow-[0_18px_32px_rgba(39,30,24,0.04)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_36px_rgba(39,29,22,0.08)] motion-safe:animate-[card-in_0.45s_ease_both]'
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {content}
    </article>
  );
}

export function OtherWorksSection() {
  return (
    <section className='mt-[88px]' aria-labelledby='other-works-heading'>
      <div className='mb-6'>
        <p className='mb-2.5 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[#8b5e34]'>
          Additional resources
        </p>
        <h2
          id='other-works-heading'
          className='text-[clamp(2rem,3vw,3rem)] leading-tight tracking-[-0.05em] text-[#1b120d]'
        >
          Also by Pastor IPAYE ISAAC
        </h2>
      </div>

      <div className='grid grid-cols-1 gap-[18px] min-[861px]:grid-cols-2 min-[1101px]:grid-cols-3'>
        {books.map((book, index) => (
          <AuthorBookCard key={book.id} book={book} index={index} />
        ))}
      </div>

      <div className='mt-8 flex justify-center max-[640px]:w-full'>
        <CTAButton
          label='Explore Fearless Through Faith'
          href={SELLER_CHECKOUT_URL}
          variant='primary'
          size='lg'
          external
        />
      </div>
    </section>
  );
}
