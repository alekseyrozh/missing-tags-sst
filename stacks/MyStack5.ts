import { StackContext } from "sst/constructs";

export function MyStack5({ stack }: StackContext) {
  stack.addOutputs({
    iAmStack: "hello",
  });
}
