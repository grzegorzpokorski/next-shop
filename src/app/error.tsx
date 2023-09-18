"use client";

import { Button } from "@/components/ui/Button/Button";
import { Container } from "@/components/ui/Container/Container";
import { Heading } from "@/components/ui/Heading/Heading";

type Props = {
  reset: () => void;
};

export default function Error({ reset }: Props) {
  return (
    <Container as="section" aria-labelledby="title">
      <div className="mx-auto my-4 flex max-w-xl flex-col gap-4 rounded border bg-white p-8 dark:bg-black md:p-12">
        <Heading as="h1" size="3xl" id="title">
          Coś poszło nie tak...
        </Heading>
        <p className="my-2">
          Wystąpił problem z naszą witryną sklepową. Może to być problem
          tymczasowy. Spróbuj ponownie.
        </p>
        <Button variant="indigo" onClick={() => reset()}>
          Spróbuj ponownie
        </Button>
      </div>
    </Container>
  );
}
