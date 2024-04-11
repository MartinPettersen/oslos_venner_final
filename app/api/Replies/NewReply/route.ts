import { NextResponse } from "next/server";
import Forum from '@/app/(models)/Forum';
import Thread from '@/app/(models)/Thread';
import Post from '@/app/(models)/Post';
import { Thread as ThreadT } from "@/types/Thread";
import { Reply } from "@/types/Reply";



export async function POST(req: any) {
    try {
        const body = await req.json()
        const postData = body.form
        const parentType = body.parentType

        console.log(postData)
        if (!postData) {
            return NextResponse.json({ message: "Mangler informasjon" }, { status: 400 })
        }
        await Post.create(postData)

        if (parentType === 'thread') {
            const existingThread = await Thread.findOne({ id: postData.parentId }).lean().exec() as any as ThreadT;  
            console.log(existingThread)          
            await Thread.findOneAndUpdate({ id: postData.parentId }, { replies: [postData.postId, ...existingThread!.replies] })
        }
        if (parentType === 'reply') {
            const existingPost = await Post.findOne({ postId: postData.parentId }).lean().exec() as any as Reply;            
            await Post.findOneAndUpdate({ postId: postData.parentId }, { children: [postData.postId, ...existingPost!.children] })
        }

        return NextResponse.json({ message: "Kommentar opprettet" }, { status: 201 })

    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
}