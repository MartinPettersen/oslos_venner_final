import { NextResponse } from "next/server";
import Post from "@/app/(models)/Post";

export async function POST(req: any) {
    try {
        const body = await req.json()
        const replyId = body.replyId
        if (!replyId) {
            return NextResponse.json({ message: "Mangler Reply id" }, { status: 400 })
        }

        const existingReply = await Post.findOne({ postId: replyId }).lean().exec();
        return NextResponse.json({ data: existingReply }, { status: 201 })

    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
}