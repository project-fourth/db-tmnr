import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { AlertDialogAction } from "@radix-ui/react-alert-dialog";
import { Trash2 } from "lucide-react";
import { trpc } from "@/utils/trpc.ts";

function DeleteMemberButton({
  _id,
  refetch,
}: {
  _id: string;
  refetch: () => void;
}) {
  const deleteMember = trpc.deleteMember.useMutation();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="link" size="icon" className="w-7 h-7">
          <Trash2 className="w-4 h-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-[min(80vw,425px)]">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            Clicking "Continue" will result in deleting member from the database
            permanently. Click "Cancel" to abort this action.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              variant="destructive"
              onClick={() => {
                deleteMember.mutate(_id);
                refetch();
              }}
            >
              Continue
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeleteMemberButton;
