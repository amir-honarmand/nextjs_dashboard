export const dynamic = "force-dynamic";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  return Response.json(
    {
      user: {
        id: "01",
        fullName: "امیر هنرمندزاده",
        role: "مدیر فروش",
        avatar: "https://beta.reqabat.com/v1/user/profile/avatar/2-mnnaglJO41G6aaoMjef.jpg",
      },
      token: "user-token",
      maxAge: 1000000,
    },
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        // "set-Cookie": `token=${token}`
      },
    }
  );
}
