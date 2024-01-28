import { StackContext } from "sst/constructs";

export function MyStack({ stack }: StackContext) {
  stack.addOutputs({
    iAmStack: "hello",
  });
}
