import User from "@/app/(models)/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: any) {

    try {
        const body = await req.json()
        const userData = body.formData

        if (!userData.email || !userData.password) {
            return NextResponse.json({ message: "Alle felt er påkrevd" }, { status: 400 })
        }

        const duplicateEmail = await User.findOne({email: userData.email}).lean().exec();
        const duplicateUsername = await User.findOne({name: userData.name}).lean().exec();

        if (duplicateEmail || duplicateUsername) {
            return NextResponse.json({ message: "Bruker eksisterer allerede" }, { status: 409 })
        }

        const hashPassword = await bcrypt.hash(userData.password, 12);
        userData.password = hashPassword;


        await User.create(userData)
        return NextResponse.json({ message: "Bruker Opprettet"}, { status: 201 })


    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Error", error }, { status: 500 })
    }

}







