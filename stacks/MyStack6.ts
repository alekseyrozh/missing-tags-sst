import { StackContext } from "sst/constructs";

export function MyStack6({ stack }: StackContext) {
  stack.addOutputs({
    iAmStack: "hello",
  });
}
