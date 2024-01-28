import { SSTConfig } from "sst";
import { MyStack } from "./stacks/MyStack";
import { MyStack2 } from "./stacks/MyStack2";
import { MyStack3 } from "./stacks/MyStack3";
import { MyStack4 } from "./stacks/MyStack4";
import { MyStack5 } from "./stacks/MyStack5";
import { MyStack6 } from "./stacks/MyStack6";
import { MyStack7 } from "./stacks/MyStack7";
import { MyStack8 } from "./stacks/MyStack8";

export default {
  config(_input) {
    return {
      name: "missing-tags-test",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(MyStack);
    app.stack(MyStack2);
    app.stack(MyStack3);
    app.stack(MyStack4);
    app.stack(MyStack5);
    app.stack(MyStack6);
    app.stack(MyStack7);
    app.stack(MyStack8);
  },
} satisfies SSTConfig;
