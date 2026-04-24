import { NextResponse } from "next/server";

const association = {
  applinks: {
    apps: [],
    details: [
      {
        appID: "NT9ZZHK7H9.io.sappnin",
        paths: ["/__/auth/*", "/finishSignUp/*", "*"],
      },
    ],
  },
  webcredentials: {
    apps: ["NT9ZZHK7H9.io.sappnin"],
  },
};

export function GET() {
  return NextResponse.json(association, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Content-Disposition": "inline",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
