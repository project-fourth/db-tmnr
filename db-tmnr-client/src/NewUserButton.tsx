import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useState } from "react";
import { User } from "../../db-tmnr-server/src/db.ts";
import { trpc } from "./utils/trpc";

const NewUserButton = () => {
  const [user, setUser] = useState<User>({} as User);
  const userCreate = trpc.userCreate.useMutation();

  const handleSubmit = () => {
    userCreate.mutate(user);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button> Add New User</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 text-gray-900 shadow max-w-md">
          <div className=" flex items-center justify-between">
            <Dialog.Title className=" text-xl"> Add New User </Dialog.Title>
            <Dialog.Close asChild className="text-gray hover:text-gray-500">
              <button>
                {" "}
                <X />{" "}
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Description>
            Add new users here. Click Save when you're done
          </Dialog.Description>
          <div className="form mt-8">
            <fieldset className="Fieldset">
              <label
                className=" Label block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="Input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                placeholder=" Name..."
                onChange={(e) =>
                  setUser((user) => ({ ...user, name: e.target.value }))
                }
              />
            </fieldset>

            <fieldset className="Fieldset">
              <label
                className=" Label block text-gray-700 text-sm font-bold mb-2"
                htmlFor="age"
              >
                Age
              </label>
              <input
                className="Input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="age"
                type="number"
                placeholder=" Enter your age..."
                onChange={(e) =>
                  setUser((user) => ({ ...user, age: Number(e.target.value) }))
                }
              />
            </fieldset>

            <fieldset className="Fieldset">
              <label
                className=" Label block text-gray-700 text-sm font-bold mb-2"
                htmlFor="department"
              >
                Department
              </label>
              <input
                className="Input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="department"
                placeholder="Department..."
                onChange={(e) =>
                  setUser((user) => ({ ...user, department: e.target.value }))
                }
              />
            </fieldset>
          </div>
          <Dialog.Close asChild>
            <div className=" mt-8 text-right space-x-6">
              <button className=" text-gray-500 px-4 py-2 font-medium rounded hover:text-gray-600">
                Cancel
              </button>
              <button
                className="bg-green-500 text-sm-white px-4 py-2 font-medium rounded hover:bg-green-400"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
export default NewUserButton;
