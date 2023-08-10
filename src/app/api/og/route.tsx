import type { NextRequest } from "next/server";
import { ImageResponse } from "next/server";

export const runtime = "edge";

const font = fetch(
  new URL("../../../assets/fonts/Poppins-Bold.ttf", import.meta.url),
).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest): Promise<Response | ImageResponse> {
  try {
    const fontData = await font;

    const { searchParams } = new URL(req.url);

    const width = searchParams.has("width")
      ? parseInt(searchParams.get("width") || "0")
      : 1200;

    const height = searchParams.has("height")
      ? parseInt(searchParams.get("height") || "0")
      : 630;

    const title = searchParams.has("title")
      ? searchParams.get("title")
      : "Next Shop";

    const subtitle = searchParams.get("subtitle");

    console.log(title);

    return new ImageResponse(
      (
        <div
          tw="flex h-full w-full flex-col items-center justify-center bg-white"
          style={{ color: "#000000" }}
        >
          <div tw="flex flex-col items-center justify-center w-2/3">
            <h1
              tw="mx-auto p-auto leading-none flex flex-row flex-wrap items-center justify-center"
              style={{
                fontSize: height / 6,
                lineHeight: 1,
                rowGap: 0,
              }}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                tw="uppercase text-center mt-4"
                style={{
                  fontSize: height / 14,
                  lineHeight: 1.2,
                  color: "#4f46e5",
                }}
              >
                {subtitle}
              </p>
            )}
          </div>
        </div>
      ),
      {
        width: width,
        height: height,
        fonts: [
          {
            name: "Poppins",
            data: fontData,
            style: "normal",
            weight: 700,
          },
        ],
      },
    );
  } catch (e) {
    if (!(e instanceof Error)) throw e;

    console.log(e.message);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
