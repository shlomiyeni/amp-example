import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const TaskCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <SelectArrayInput
          label="status"
          source="status"
          choices={[
            { label: "Open", value: "Open" },
            { label: "Done", value: "Done" },
            { label: "In-progress", value: "InProgress" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="title" source="title" />
        <ReferenceInput source="user.id" reference="User" label="user_id">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
