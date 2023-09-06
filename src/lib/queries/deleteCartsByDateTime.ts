import { fetcher } from "@/lib/fetcher";
import { DeleteCartsByDateTimeDocument } from "@/lib/generated/graphql";

type Args = {
  dateTime: string;
};

export const deleteCartsByDateTime = async ({ dateTime }: Args) => {
  const result = await fetcher({
    query: DeleteCartsByDateTimeDocument,
    variables: {
      boundaryDate: dateTime,
    },
    cache: "no-store",
  });

  return result.deleteManyCarts.count;
};
