import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";

export const Hero = () => {
  return (
    <Container as="section" aria-labelledby="hero-title">
      <div className="relative isolate overflow-hidden bg-white dark:bg-black rounded-md gap-6 md:px-12 lg:px-24 md:pt-0 mt-8 grid md:grid-cols-2 shadow-xl border">
        <div className="mx-auto max-w-md text-center md:mx-0 md:flex-auto pt-4 pb-16 md:py-32 md:text-left px-6 max-md:order-2">
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
        <div className="block relative inset-0 max-md:h-60 max-md:overflow-hidden">
          <div className="bg-gradient-to-t md:bg-gradient-to-r from-white dark:from-black absolute inset-0 z-10"></div>
          <Image
            className="md:absolute md:left-0 md:top-0 md:w-[57rem] max-w-auto md:max-w-none rounded-md min-w-[100%] w-auto"
            src="/images/hero.png"
            alt="klawiatura i mysz komputerowa na podkładce"
            width={540}
            height={540}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </Container>
  );
};
