import React from "react";

const CreateUserForm = () => {
  return (
    <form method="post" className="rounded-xl bg-light-brown w-[60%] h-[40%] flex items-center justify-center flex-col">
      <div className="flex flex-col items-center p-1">
        <label>Brukernavn</label>
        <input
          className="rounded-full text-black bg-soft-pink w-[80%]"
          id="name"
          type="text"
          name="name"
          required={true}
          value="temp"
        />
      </div>
      <div className="flex flex-col items-center p-1">
        <label>E-Post</label>
        <input
          className="rounded-full text-black bg-soft-pink w-[80%]"
          id="email"
          type="text"
          name="email"
          required={true}
          value="temp@gmail.com"
        />
      </div>
      <div className="flex flex-col items-center p-1">
        <label>Passord</label>
        <input
          className="rounded-full text-black bg-soft-pink w-[80%]"
          id="password"
          type="password"
          name="password"
          required={true}
          value="temppass"
        />
      </div>
      <div className="flex flex-col items-center p-1">
        <label>Gjenta Passord</label>
        <input
          className="rounded-full text-black bg-soft-pink w-[80%]"
          id="repeatpassword"
          type="password"
          name="repeatpassword"
          required={true}
          value="temppass"
        />
      </div>

      <div className="flex items-center justify-center p-4 w-full">
        <input
          type="submit"
          value="Opprett Bruker"
          className="bg-brown text-soft-pink rounded-full w-[80%]"
        />
      </div>
    </form>
  );
};

export default CreateUserForm;
