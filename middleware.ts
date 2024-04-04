import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
    function middleware(req){
        console.log(req.nextUrl.pathname);
        console.log(req.nextauth.token!.role);

        if (req.nextUrl.pathname.startsWith("/MyPage") && !req.nextauth.token) {
            return NextResponse.rewrite(new URL("/Denied", req.url))
        }

        if (req.nextUrl.pathname.startsWith("/Admin") && req.nextauth.token!.role != "admin") {
            return NextResponse.rewrite(new URL("/Denied", req.url))
        }
        if (req.nextUrl.pathname.startsWith("/Admin/CreateForum") && req.nextauth.token!.role != "admin") {
            return NextResponse.rewrite(new URL("/Denied", req.url))
        }
        if (req.nextUrl.pathname.startsWith("/Admin/Reports") && req.nextauth.token!.role != "admin") {
            return NextResponse.rewrite(new URL("/Denied", req.url))
        }
    },{
    callbacks: {
        authorized: ({token}) => !!token
    }}
)

export const config = { matcher: ["/Admin", "/Admin/CreateForum", "/Admin/Reports", "/MyPage"] }