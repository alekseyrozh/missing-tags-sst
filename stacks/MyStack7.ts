import { StackContext } from "sst/constructs";

export function MyStack7({ stack }: StackContext) {
  stack.addOutputs({
    iAmStack: "hello",
  });
}
