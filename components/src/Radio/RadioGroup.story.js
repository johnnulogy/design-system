import React from "react";
import { storiesOf } from "@storybook/react";
import {
  Radio,
  RadioGroup,
} from "ComponentsRoot";

storiesOf("RadioGroup", module)
  .add("Radio Group", () => (
    <RadioGroup labelText="Setting Selection" name="settingSelection" defaultValue="a">
      <Radio value="a" labelText="Option A" />
      <Radio value="b" labelText="Option B" />
      <Radio value="c" labelText="Option C" />
    </RadioGroup>
  ))
  .add("with helpText", () => (
    <RadioGroup labelText="Setting Selection" helpText="Select a setting from the menu below:" name="settingSelection" defaultValue="a">
      <Radio value="a" labelText="Option A" />
      <Radio value="b" labelText="Option B" />
      <Radio value="c" labelText="Option C" />
    </RadioGroup>
  ))
  .add("with requirementText", () => (
    <RadioGroup labelText="Setting Selection" requirementText="(Required)" name="settingSelection" defaultValue="a">
      <Radio value="a" labelText="Option A" />
      <Radio value="b" labelText="Option B" />
      <Radio value="c" labelText="Option C" />
    </RadioGroup>
  ))
  .add("with additional text", () => (
    <RadioGroup labelText="Setting Selection" helpText="Select a setting from the menu below:" requirementText="(Required)" name="settingSelection" defaultValue="a">
      <Radio value="a" labelText="Option A" />
      <Radio value="b" labelText="Option B" />
      <Radio value="c" labelText="Option C" />
    </RadioGroup>
  ))
  .add("Set to disabled", () => (
    <RadioGroup disabled labelText="Setting Selection" name="settingSelection" defaultValue="a">
      <Radio value="a" labelText="Option A" />
      <Radio value="b" labelText="Option B" />
      <Radio value="c" labelText="Option C" />
    </RadioGroup>
  ))
  .add("Controlled", () => (
    <RadioGroup labelText="Setting Selection" name="settingSelection" checkedValue="a" onChange={ () => {} }>
      <Radio value="a" labelText="Option A" />
      <Radio value="b" labelText="Option B" />
      <Radio value="c" labelText="Option C" />
    </RadioGroup>
  ));
