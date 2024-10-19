import { trpc } from "@/utils/trpc";
import React from "react";

export default function Home() {
  // const [email, setEmail] = React.useState<string>();
  // const [name, setName] = React.useState<string>();

  // const createUser = trpc.user.create.useMutation();
  const users = trpc.user.getAll.useQuery();
  const hello = trpc.hello.useQuery({ text: "client" });
  if (!hello.data) {
    return <div>Loading...</div>;
  }

  // const handleSubmit = () => {
  //   if (!email || !name) {
  //     return;
  //   }
  //   createUser.mutate({ email, name },{
  //     onSuccess: () => {
  //       alert('User created successfully')
  //     },
  //     onError: (error) => {
  //       alert(error.message)
  //     }
  //   });
  // };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="font-bold text-[60px]">Demo trpc</h1>
      <h2 className="text-[40px]">{hello.data.greeting}!</h2>

      {/* <div className="flex flex-col gap-2">
        <input
          onChange={(value) => setEmail(value.target.value)}
          type="text"
          className="border-2 border-gray-300 rounded-md p-2"
        />
        <input
          onChange={(value) => setName(value.target.value)}
          type="text"
          className="border-2 border-gray-300 rounded-md p-2"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white rounded-md p-2 mt-2 w-32"
      >
        Submit
      </button> */}

      {/* {users.data?.map((item, index) => (
        <div key={index} className="flex gap-2">
          <span>{item.id}</span>
          <span>{item.name}</span>
          <span>{item.email}</span>
        </div>
      ))} */}
    </div>
  );
}
