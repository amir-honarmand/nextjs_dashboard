export const dynamic = 'force-dynamic';
import { headers, cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // const reqBody = await request.json();
  
  // const headersList = headers();
  // console.log(headersList.get('Authorization'))

  // const cookie = cookies();

  // const token = cookie.get('token');

  // console.log(token?.value);

  // const searchParams = request.nextUrl.searchParams;
  // const query = searchParams.get('name');
  
//  return res.json({ userName: "amir", id: "01", token: 'ttttttttt', maxAge: 1000000 })
 
  return Response.json(
    { userName: "amir", id: "01", token: 'ttttttttt', maxAge: 1000000 },
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        // "set-Cookie": `token=${token}`
        
      },
    }
  );
}
