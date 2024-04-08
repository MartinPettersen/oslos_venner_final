import React, { useEffect, useState } from 'react'
import Reply from "@/app/components/(thread)/Reply";
import ReplyDisplay from "@/app/components/(thread)/ReplyDisplay";
import ReportForm from "@/app/components/(thread)/ReportForm";
import ThreadContent from "@/app/components/(thread)/ThreadContent";
import ThreadDisplay from "@/app/components/(thread)/ThreadDisplay";
import { Post } from "@/types/Post";
import { Thread } from "@/types/Thread";
const UserReplies = () => {


    const [kommentarer, setKommentarer] = useState(false);
    const [threads, setThreads] = useState<Thread[]>();
    const [posts, setPosts] = useState<Post[]>();
  
    const getUserThreads = async () => {
      console.log("i run");
      const res = await fetch("/api/GetUserThreads", {
        method: "POST",
        body: JSON.stringify({ userName }),
        headers: new Headers({ "content-type": "application/json" }),
      });
      if (!res.ok) {
        const response = await res.json();
        console.log(response.message);
      } else {
        const temp = await res.json();
        setThreads(temp.data);
        console.log(temp.data);
      }
    };
  
    const getUserPosts = async () => {
      console.log("i run");
      const res = await fetch("/api/GetUserPosts", {
        method: "POST",
        body: JSON.stringify({ userName }),
        headers: new Headers({ "content-type": "application/json" }),
      });
      if (!res.ok) {
        const response = await res.json();
        console.log(response.message);
      } else {
        const temp = await res.json();
        setPosts(temp.data);
        console.log(temp.data);
      }
    };
  
    useEffect(() => {
      getUserThreads();
      getUserPosts();
    }, []);

  return (
    <div>
                  <div className="border-2 flex h-[3rem] justify-between border-orange-300 bg-slate-600">
            <div
              onClick={() => setKommentarer(false)}
              className={`w-1/2  flex items-center cursor-pointer justify-center ${
                !kommentarer
                  ? "bg-slate-700 hover:bg-slate-600 text-orange-300 font-bold hover:text-orange-400"
                  : "bg-slate-500 hover:bg-slate-600 text-orange-300 font-semibold"
              } `}
            >
              Tråder
            </div>
            <div
              onClick={() => setKommentarer(true)}
              className={`w-1/2  flex items-center cursor-pointer justify-center ${
                kommentarer
                  ? "bg-slate-700 hover:bg-slate-600 text-orange-300 font-bold hover:text-orange-400"
                  : "bg-slate-500 hover:bg-slate-600 text-orange-300 hover:text-orange-400 font-semibold"
              } `}
            >
              kommentarer
            </div>
          </div>
{winReady ? (
              <div className="border-2 flex h-[3rem] justify-between border-orange-300 bg-slate-600">
            <div
              onClick={() => setKommentarer(false)}
              className={`w-1/2  flex items-center cursor-pointer justify-center ${
                !kommentarer
                  ? "bg-slate-700 hover:bg-slate-600 text-orange-300 font-bold hover:text-orange-400"
                  : "bg-slate-500 hover:bg-slate-600 text-orange-300 font-semibold"
              } `}
            >
              Tråder
            </div>
            <div
              onClick={() => setKommentarer(true)}
              className={`w-1/2  flex items-center cursor-pointer justify-center ${
                kommentarer
                  ? "bg-slate-700 hover:bg-slate-600 text-orange-300 font-bold hover:text-orange-400"
                  : "bg-slate-500 hover:bg-slate-600 text-orange-300 hover:text-orange-400 font-semibold"
              } `}
            >
              kommentarer
            </div>
          </div>
        <div className=" w-[90%] h-[90%] flex   items-end justify-center  overflow-y-auto no-scrollbar overflow-hidden sm:hover:overflow-y-auto ">
          {!kommentarer ? (
            <div className=" w-full h-full flex flex-col gap-4 items-center justify-center overflow-y-auto no-scrollbar">
              {threads!.map((thread: any) => (
                <div className="bg-slate-500 hover:bg-slate-400 text-orange-300 flex flex-col p-4 w-[80%] sm:w-[40%]">
                  <ThreadDisplay parentId={thread.id} />
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full sm:w-[40%] h-[90%] flex flex-col gap-4 items-center justify-start  overflow-y-auto no-scrollbar overflow-hidden sm:hover:overflow-y-auto  ">
              {posts?.map((post) => (
                <ReplyDisplay postId={post.postId} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="animate-pulse  flex font-bold text-3xl text-orange-300 w-full items-center justify-center">
          Loading
        </div>
      )}

    </div>
  )
}

export default UserReplies