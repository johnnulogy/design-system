import React from "react";
import { storiesOf } from "@storybook/react";
import {
  Field,
  Input,
  Form,
  FormSection,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Toggle,
  InlineValidation,
  HeaderValidation,
  List,
  ListItem,
  Select,
} from "ComponentsRoot";

const options = [
  { value: "planned", label: "Planned" },
  { value: "booked", label: "Booked" },
];

storiesOf("Form", module)
  .add("Form", () => (
    <Form title="New Profile">
      <Input id="name" labelText="Name" />
      <Input id="birthdate" placeholder="DD-MM-YYYY" labelText="Date of birth" requirementText="(Optional)" helpText="Enter a date below" />
      <Input id="birthplace" labelText="Place of birth" requirementText="(Optional)" />
    </Form>
  ))
  .add("Without title", () => (
    <Form>
      <Input id="name" labelText="Name" />
      <Input id="birthdate" placeholder="DD-MM-YYYY" labelText="Date of birth" requirementText="(Optional)" helpText="Enter a date below" />
      <Input id="birthplace" labelText="Place of birth" requirementText="(Optional)" />
    </Form>
  ))
  .add("With form sections", () => (
    <Form title="New Profile">
      <FormSection title="Personal Information">
        <Input id="name" labelText="Name" />
        <Input id="birthdate" placeholder="DD-MM-YYYY" labelText="Date of birth" requirementText="(Optional)" helpText="Enter a date below" />
        <Input id="birthplace" labelText="Place of birth" requirementText="(Optional)" />
      </FormSection>
      <FormSection title="General Information">
      <Input id="gender" labelText="Gender" />
      <Input id="occupation" labelText="Occupation" />
      </FormSection>
    </Form>
  ))
  .add("With form sections without titles", () => (
    <Form title="New Profile">
      <FormSection>
        <Input id="name" labelText="Name" />
        <Input id="birthdate" placeholder="DD-MM-YYYY" labelText="Date of birth" requirementText="(Optional)" helpText="Enter a date below" />
        <Input id="birthplace" labelText="Place of birth" requirementText="(Optional)" />
      </FormSection>
      <FormSection>
      <Input id="gender" labelText="Gender" />
      <Input id="occupation" labelText="Occupation" />
      </FormSection>
    </Form>
  ))
  .add("Demo form", () => (
    <>
      <Form title="Job 324400">
        <HeaderValidation message="Instructions and description of an error" title="Error has occured ...">
          <List compact>
            <ListItem>Affected field</ListItem>
            <ListItem>Unmet criteria</ListItem>
            <ListItem><a href="https://nulogy.design/">Affected field</a></ListItem>
          </List>
        </HeaderValidation>
        <FormSection title="Job Information">
          <Input id="project" labelText="Project" placeholder="Project 128703" />
          <Input id="project-description" labelText="Project description" requirementText="(Optional)" helpText="Project description helps identify the project." />
          <Select id="project-status" labelText="Project status" options={options} />
          <Input id="item-code" labelText="Item code" defaultValue="WS2SB6" error="Item WS2SB6 does not exist." />
          <Input id="eaches-expected" labelText="Eaches expected on Job" placeholder="2 000" />
          <Input id="eaches-remaining" labelText="Eaches remaining on Project" defaultValue="18 000" disabled/>
          <Input id="scheduled-start" labelText="Scheduled start" placeholder="MMM-DD-YYYY" />
          <Input id="scheduled-end" labelText="Scheduled end" placeholder="MMM-DD-YYYY" />
          <CheckboxGroup labelText="Line Lead" name="linelead" requirementText="(Optional)">
            <Checkbox value="christiaan" labelText="Christiaan Oostenbrug" />
            <Checkbox value="matt" labelText="Matt Dunn" />
            <Checkbox value="clemens" labelText="Clemens Park" disabled checked />
            <Checkbox value="nikola" labelText="Nikola Pejcic" disabled />
          </CheckboxGroup>
          <RadioGroup error="Only yes can be selected..." labelText="Reconcile" name="settingSelection" defaultValue="yes" id="reconcile">
            <Radio value="yes" labelText="Yes" />
            <Radio value="no" labelText="No" />
            <Radio value="maybe" labelText="Maybe" disabled />
          </RadioGroup>
          <Field labelText="Job visibility" htmlFor="testThis">
            <Toggle
              onText="Visible" offText="Hidden" id="testThis"
            />
          </Field>
        </FormSection>
        <FormSection title="Rejects">
          <Field labelText="Item" htmlFor="rejects">
            <Input error defaultValue="235432" id="rejects" />
            <InlineValidation message="Item 235432 is not a valid entry.">
              <List compact>
                <ListItem>Item is at least 8 characters long.</ListItem>
                <ListItem>Item contains at least 1 letter.</ListItem>
              </List>
            </InlineValidation>
          </Field>
          <Input id="quantity" labelText="Quantity" />
          <Field labelText="Reject visibility" htmlFor="reject-visibility">
            <Toggle
              id="reject-visibility" onText="Visible" offText="Hidden"
              disabled
            />
          </Field>
        </FormSection>
      </Form>
    </>
  ));
