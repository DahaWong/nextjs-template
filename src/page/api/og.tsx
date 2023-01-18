import {ImageResponse} from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        tw="relative flex px-14 py-12 items-end w-full h-full bg-white text-7xl font-semibold text-slate-800"
        style={{
          backgroundImage: "linear-gradient(to bottom right, #bfdbfe, #fef2f2)",
        }}>
        Dreamlong
      </div>
    ),
    {
      width: 1200,
      height: 800,
    }
  );
}
