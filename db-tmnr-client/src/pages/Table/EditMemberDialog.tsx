import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FieldSet from "@/components/ui/fieldset";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
import { Pencil } from "lucide-react";
import { trpc } from "@/utils/trpc";
import { useState } from "react";
import { Member } from "@server/db";

function EditMemberDialog({ refetch }: { refetch: () => void }) {
  const [member, setMember] = useState<Member>({} as Member);
  const createMember = trpc.createMember.useMutation();

  const handleSubmit = () => {
    createMember.mutate(member);
    refetch();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="link" className="w-7 h-7">
          <Pencil className="w-4 h-4"></Pencil>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[min(80vw,425px)]">
        <DialogHeader>
          <DialogTitle>Edit Member</DialogTitle>
          <DialogDescription>
            Edit details of existing member and click "Save" when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-2">
          <FieldSet name="name" filler="defaultValue" />
          <FieldSet name="age" filler="defaultValue" />
          <FieldSet name="department" filler="defaultValue" />
          <DialogFooter className="mt-1">
            <DialogClose asChild>
              <Button type="submit">Save</Button>
            </DialogClose>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default EditMemberDialog;
