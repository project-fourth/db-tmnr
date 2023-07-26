import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button.tsx";
import { DialogClose } from "@radix-ui/react-dialog";
import FieldSet from "@/components/ui/fieldset.tsx";
import { UserPlus2 } from "lucide-react";
import { useState } from "react";
import type { Member } from "@server/db.ts";
import { trpc } from "@/utils/trpc.ts";

function AddMemberDialog({ refetch }: { refetch: () => void }) {
  const [member, setMember] = useState<Member>({} as Member);
  const createMember = trpc.createMember.useMutation();

  const handleSubmit = () => {
    createMember.mutate(member);
    refetch();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon">
          <UserPlus2 className="w-4 h-4"></UserPlus2>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[min(80vw,425px)]">
        <DialogHeader>
          <DialogTitle>Add New User</DialogTitle>
          <DialogDescription>
            Enter details of the new user and click "Save" when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-2">
          <FieldSet
            name="name"
            filler="placeholder"
            setValue={(e) =>
              setMember((member) => ({ ...member, name: e.target.value }))
            }
          />
          <FieldSet
            name="age"
            filler="placeholder"
            setValue={(e) =>
              setMember((member) => ({
                ...member,
                age: Number(e.target.value),
              }))
            }
          />
          <FieldSet
            name="department"
            filler="placeholder"
            setValue={(e) =>
              setMember((member) => ({ ...member, department: e.target.value }))
            }
          />
          <DialogFooter className="mt-1">
            <DialogClose asChild>
              <Button type="submit" onClick={handleSubmit}>
                Save
              </Button>
            </DialogClose>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default AddMemberDialog;
