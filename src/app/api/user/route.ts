import { headers, cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // const reqBody = await request.json();
  
  // const _headers = headers(request);
  // const cookie = cookies();

  // const token = cookie.get('token');

  // console.log(token?.value);

  // const searchParams = request.nextUrl.searchParams;
  // const query = searchParams.get('name');
  
  return Response.json(
    { error: null, data: { userName: "amir", id: "01" } },
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        // "set-Cookie": `token=${token}`
      },
    }
  );
}
