import React from "react";

const CreateUserForm = () => {
  return (
    <form method="post" className="rounded-xl dark:text-dark-grey dark:rounded-none bg-light-brown dark:bg-gradient-to-b from-orange to-pink w-[60%] h-[40%] flex items-center justify-center flex-col">
      <div className="flex flex-col items-center  p-1">
        <label>Brukernavn</label>
        <input
          className="rounded-full  text-black bg-soft-pink dark:rounded-none dark:bg-grey w-[80%]"
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
          className="rounded-full text-black bg-soft-pink dark:rounded-none dark:bg-grey w-[80%]"
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
          className="rounded-full text-black bg-soft-pink dark:rounded-none dark:bg-grey w-[80%]"
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
          className="rounded-full text-black bg-soft-pink dark:rounded-none dark:bg-grey w-[80%]"
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
          className="bg-brown dark:dark:bg-gradient-to-r from-dark-grey to-black text-soft-pink dark:text-pink rounded-full dark:rounded-none w-[80%] dark:w-[90%] dark:sm:w-[54%] dark:h-[30px]"
        />
      </div>
    </form>
  );
};

export default CreateUserForm;
