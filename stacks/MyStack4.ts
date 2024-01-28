import { StackContext } from "sst/constructs";

export function MyStack4({ stack }: StackContext) {
  stack.addOutputs({
    iAmStack: "hello",
  });
}
