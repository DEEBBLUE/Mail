import { NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest ) => {
  if(req.url.includes("mail") && !req.cookies.get("refreshToken")){
    return NextResponse.redirect(new URL("/auth",req.url)) 
  }
  return NextResponse.next()
}

export const config = {
  mathcher: '/mail/:path*',
}
