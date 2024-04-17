import { Reply } from '@/types/Reply';
import React, { useState } from 'react'

type Props = {
    reply?: Reply
}

const EditReplyForm = ({reply}: Props) => {

    const [errorMessage, setErrorMessage] = useState("");

    const [form, setForm] = useState({
      postId: reply?.postId,
      parentId: reply?.parentId,
      reply: reply?.reply.toString(),
      userName: reply?.userName,
    });
  
    const handleChange = (e: any) => {
      const value = e.target.value;
      const name = e.target.name;
      setForm((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (e: any) => {
      e.preventDefault();
      setErrorMessage("");
  
      const res = await fetch("/api/Replies/EditReply", {
        method: "POST",
        body: JSON.stringify({ form }),
        headers: new Headers({ "content-type": "application/json" }),
      });
  
      if (!res.ok) {
        const response = await res.json();
        setErrorMessage(response.message);
      } else {
        // router.refresh();
        // router.push("/");
      }
    };

  return (
    <div>
    <form onSubmit={handleSubmit} method="post" className="flex gap-2">
      <input
        id="reply"
        type="text"
        name="reply"
        onChange={handleChange}
        required={true}
        value={form.reply}
        className="text-black bg-soft-pink dark:bg-grey"
      />
      <input 
        type="submit"
        value="lagre"
        className='cursor-pointer font-bold'
      />
    </form>
  </div>
  )
}

export default EditReplyForm