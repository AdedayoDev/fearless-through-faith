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
      <div className='author-book-card__cover-wrap'>
        <img
          src={book.coverImage}
          alt={`${book.title} cover placeholder`}
          className='author-book-card__cover'
        />
      </div>

      <div className='author-book-card__body'>
        <h3>{book.title}</h3>
        <p>{book.description}</p>
      </div>
    </>
  );

  if (book.href && book.href !== "#") {
    return (
      <a
        href={book.href}
        className='author-book-card'
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {content}
      </a>
    );
  }

  return (
    <article
      className='author-book-card'
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {content}
    </article>
  );
}

export function OtherWorksSection() {
  return (
    <section
      className='other-works-section'
      aria-labelledby='other-works-heading'
    >
      <div className='other-works__header'>
        <p className='section-kicker'>Additional resources</p>
        <h2 id='other-works-heading'>Also by Pastor I.P.A.Y.E. Isaac</h2>
      </div>

      <div className='author-book-grid'>
        {books.map((book, index) => (
          <AuthorBookCard key={book.id} book={book} index={index} />
        ))}
      </div>

      <div className='other-works__cta'>
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
