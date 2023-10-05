import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";

export const Hero = () => {
  return (
    <Container as="section" aria-labelledby="hero-title">
      <div className="relative isolate overflow-hidden bg-white dark:bg-black px-6 rounded-md sm:px-16 gap-6 md:px-24 md:pt-0 mt-8 grid md:grid-cols-2 shadow-xl">
        <div className="mx-auto max-w-md text-center md:mx-0 md:flex-auto py-16 md:py-32 md:text-left">
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            id="hero-title"
          >
            Twój komputer, twoje zasady, nasze akcesoria
          </h2>
          <p className="mt-6 text-md leading-7">
            Wprowadź nowy wymiar do swojego cyfrowego świata dzięki naszym
            akcesoriom komputerowym
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 md:justify-start">
            <Button asChild variant="indigo" size="lg">
              <Link href="/products">Zobacz ofertę</Link>
            </Button>
          </div>
        </div>
        <div className="hidden md:block relative">
          <Image
            className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md"
            src="/images/hero.png"
            alt="klawiatura i mysz komputerowa na podkładce"
            width={1080}
            height={1080}
          />
        </div>
      </div>
    </Container>
  );
};
