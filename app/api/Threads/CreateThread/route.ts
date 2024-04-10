import { NextResponse } from "next/server";
import Forum from '@/app/(models)/Forum';
import Thread from '@/app/(models)/Thread';
import { Forum as ForumT }  from "@/types/Forum";


export async function POST(req: any) {
    try {
        const body = await req.json()
        const formData = body.form
        const forumLabel = body.forumLabel
        const parentId = body.id

        if (!forumLabel || !parentId) {
            return NextResponse.json({ message: "Mangler informasjon" }, { status: 400 })
        }

        const existingForum = await Forum.findOne({ label: forumLabel }).lean().exec() as any as ForumT;

        await Thread.create(formData)
        await Forum.findOneAndUpdate({ label: forumLabel }, { threads: [formData.id, ...existingForum!.threads] })
        return NextResponse.json({ message: "Innlegg opprettet" }, { status: 201 })

    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }
}