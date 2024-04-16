import { NextResponse } from "next/server";
import Thread from '@/app/(models)/Thread';
import Post from "@/app/(models)/Post";
import Forum from '@/app/(models)/Forum';
// import Thread from "@/app/(models)/Thread";

import { Thread as ThreadT } from "@/types/Thread";
import { Forum as ForumT } from "@/types/Forum";



export async function POST(req: any) {
    try {
        const body = await req.json()
        const thread = body.thread

        if (!thread) {
            return NextResponse.json({ message: "Mangler Tråd informasjon" }, { status: 400 })
        }

        thread.replies.map(async (post: string) => {

            await Post.findOneAndDelete({ postId: post }).lean().exec();
        })

        const existingForum = await Forum.findOne({ label: thread.forumLabel }).lean().exec() as any as ForumT;

        const index = existingForum!.threads.indexOf(thread.id);
        if (index > -1) {
            existingForum!.threads.splice(index, 1);
        }

        await Forum.findOneAndUpdate({ label: thread.forumLabel }, { threads: existingForum!.threads })

        await Thread.findOneAndDelete({ id: thread.id }).lean().exec();


        return NextResponse.json({ data: "deleted" }, { status: 201 })

    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
}