import { useEffect, useState } from "react";
import "./App.css";
import { User } from "./contant";

function App() {
  const [myuser, setMyUser] = useState<User | null>(null);
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const [upid, setupid] = useState<string>("");
  const [upname, setupName] = useState<string>("");
  const [upaddress, setupAddress] = useState<string>("");

  async function handlefetch() {
    let getuser = await (
      await fetch("http://localhost:4000/api/v1/users")
    ).json();

    if (getuser) {
      console.log(getuser.data, "mygetuserdata-->");
      setMyUser(getuser.data);
    }
  }

  const handeDelete = async (id: string) => {
    const response = await (
      await fetch(`http://localhost:4000/api/v1/user/${id}`, {
        method: "DELETE",
      })
    ).json();

    if (response.data) {
      await handlefetch();
      console.log(response, "response--->");
    }
  };

  const handleUserAdd = async () => {
    if (name && address) {
      const response = await (
        await fetch("http://localhost:4000/api/v1/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, address }),
        })
      ).json();

      if (response.data) {
        await handlefetch();
        console.log(response, "response--->");
        setName("");
        setAddress("");
      }
    }
  };

  const handleUserUpdate = async () => {
    if (upid && upname && upaddress) {
      const response = await (
        await fetch(`http://localhost:4000/api/v1/user/${upid}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: upname, address: upaddress }),
        })
      ).json();
      
      if (response.data) {
        await handlefetch();

        setupid("");
        setupName("");
        setupAddress("");
      }
    }
  };

  useEffect(() => {
    handlefetch();
  }, []);

  return (
    <div className="h-screen w-screen">
      <h2 className="text-3xl bg-white   p-10">List of Users</h2>

      <div className="p-10 w-full bg-purple-300 gap-5 flex">
        <input
          type="text"
          value={name}
          placeholder="Enter Name"
          className="p-2"
          onChange={(e: any) => setName(e.target.value)}
        />
        <input
          type="text"
          value={address}
          placeholder="Enter address"
          className="p-2"
          onChange={(e: any) => setAddress(e.target.value)}
        />

        <button className="px-10 py-2 bg-red-500 " onClick={handleUserAdd}>
          Add
        </button>
      </div>

      <div className="p-10 w-full bg-purple-300 gap-5 flex">
        <input
          type="text"
          value={upid}
          placeholder="User id"
          className="p-2"
          onChange={(e: any) => setupid(e.target.value)}
        />
        <input
          type="text"
          value={upname}
          placeholder="updated Name"
          className="p-2"
          onChange={(e: any) => setupName(e.target.value)}
        />
        <input
          type="text"
          value={upaddress}
          placeholder="updated address"
          className="p-2"
          onChange={(e: any) => setupAddress(e.target.value)}
        />

        <button className="px-10 py-2 bg-red-500 " onClick={handleUserUpdate}>
          Update
        </button>
      </div>

      <div className=" px-20 py-2 grid grid-cols-2 gap-5 justify-center item-center">
        {myuser &&
          myuser?.map((user: User) => (
            <div
              className="p-5 border-2  justify-center items-center gap-4 bg-orange-300"
              key={user.id}
            >
              <p className="bg-pink-300 p-2">{user.id}</p>
              <p>{user.name}</p>
              <p>{user.address}</p>

              <button
                className="bg-red-500 p-2 rounded-xl mt-2"
                onClick={() => handeDelete(user.id)}
              >
                delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
