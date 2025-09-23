import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";

export const checkUser = async () => {
    const user = await currentUser();

    if(!user){
        return null;
    }

    const LoggInUser = await db.user.findUnique({
        where:{
            cleckUserId: user.id,
        },
    });

    if(LoggInUser){
        return LoggInUser;
    }

    const newUser  =await db.user.create({
        data:{
            cleckUserId: user.id,
            name: `${user.firstName} ${user.lastName}`,
            imageUrl: user.imageUrl,
            email: user.emailAddresses[0]?.emailAddress || '',
        }
    })

    return newUser
}