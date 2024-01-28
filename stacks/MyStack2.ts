import { StackContext } from "sst/constructs";

export function MyStack2({ stack }: StackContext) {
  stack.addOutputs({
    iAmStack: "hello",
  });
}
