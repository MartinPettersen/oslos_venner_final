import { NextResponse } from "next/server";
import Thread from '@/app/(models)/Thread';
import Post from "@/app/(models)/Post";
import { Reply } from "@/types/Reply";
import Report from "@/app/(models)/Report";

type ThreadT = {
    headline: String;
    userName: String;
    content: String;
    replies: Reply[];
}

export async function POST(req: any) {
    try {
        const body = await req.json()
        const replyId = body.replyId
        const parentId = body.parentId

        console.log(body)

        if (!replyId || !parentId) {
            return NextResponse.json({ message: "Mangler reply informasjon" }, { status: 400 })
        }

        const existingPost = await Post.findOneAndDelete({ postId: replyId }).lean().exec();

        await Report.findOneAndDelete({ subjectId: replyId }).lean().exec();

        let existingThread = await Thread.findOne({ id: parentId }).lean().exec() as any as ThreadT;


        const index = existingThread!.replies.indexOf(replyId);
        if (index > -1) {
            existingThread!.replies.splice(index, 1);
        }

        await Thread.findOneAndUpdate({ id: parentId }, { replies: existingThread!.replies })

        return NextResponse.json({ data: existingPost }, { status: 201 })

    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
}