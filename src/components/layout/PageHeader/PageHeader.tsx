import { Container } from "@/components/ui/Container/Container";
import { Heading } from "@/components/ui/Heading/Heading";

type Props = {
  title: string;
};

export const PageHeader = ({ title }: Props) => {
  return (
    <Container as="header" hidden>
      <Heading as="h1">{title}</Heading>
    </Container>
  );
};
