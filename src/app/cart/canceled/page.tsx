import { FaTimesCircle } from "react-icons/fa";
import { Container } from "@/components/ui/Container/Container";
import { Heading } from "@/components/ui/Heading/Heading";

export default function Page() {
  // display order summary
  // decrease available items
  // remove cart from db
  // destroy cart stored in cookie
  return (
    <Container as="section" aria-labelledby="title">
      <div className="mx-auto my-4 flex max-w-xl flex-col gap-4 rounded border bg-white p-8 dark:bg-black md:p-12">
        <p className="flex gap-2 items-center">
          <FaTimesCircle aria-hidden className="text-red-500 text-xl" />
          Coś poszło nie tak!
        </p>
        <Heading as="h1" size="3xl" id="title">
          Anulowałeś płatność
        </Heading>
        <p className="my-2">
          Twoje zamówienie nie zostanie wysłane i wkrótce usuniemy je z naszej
          bazy. W razie kłopotów ze złożeniem zamówienia zapraszamy do kontaktu.
        </p>
      </div>
    </Container>
  );
}
