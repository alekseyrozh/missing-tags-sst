import { StackContext } from "sst/constructs";

export function MyStack8({ stack }: StackContext) {
  stack.addOutputs({
    iAmStack: "hello",
  });
}
