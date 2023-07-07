import { useState, useEffect } from "react";
import type { Student } from "./EditableTable";
import { Column, Row, Table } from "@tanstack/react-table";

const EditableCell = ({
  getValue,
  row,
  column,
  table,
}: {
  getValue: () => Student[keyof Student];
  row: Row<Student>;
  column: Column<Student, Student[keyof Student]>;
  table: Table<Student>;
}) => {
  const initialValue = getValue();
  const [value, setValue] = useState<Student[keyof Student]>("");

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const onBlur = () => {
    table.options.meta?.updateData(row.index, column.id, value);
  };

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
    />
  );
};

export default EditableCell;
