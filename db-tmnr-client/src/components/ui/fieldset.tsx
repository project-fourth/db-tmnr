import { Input } from "@/components/ui/input";
import type { Member } from "@server/db";
import { ChangeEvent } from "react";

function FieldSet({
  name,
  setValue,
  filler,
  defaultValue,
}: {
  name: keyof Member;
  setValue?: (e: ChangeEvent<HTMLInputElement>) => void;
  filler: "placeholder" | "defaultValue";
  defaultValue?: Member[keyof Member];
}) {
  const fieldNameText = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div className="grid grid-cols-1 items-center gap-4">
      {filler === "placeholder" ? (
        <Input
          className="col-span-1"
          id={name}
          placeholder={`${fieldNameText}`}
          onChange={setValue}
        />
      ) : (
        <Input
          className="col-span-1"
          id={name}
          defaultValue={defaultValue || fieldNameText}
          onChange={setValue}
        />
      )}
    </div>
  );
}

export default FieldSet;
