import { StackContext } from "sst/constructs";

export function MyStack3({ stack }: StackContext) {
  stack.addOutputs({
    iAmStack: "hello",
  });
}
