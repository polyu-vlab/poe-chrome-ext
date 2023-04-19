import { createContext } from "react";

export interface ExampleContextProps {}

export const ExampleContext = createContext<ExampleContextProps>({});

// import { createSafeContext } from "@mantine/utils";

// interface ExampleContextProps {}

// export const [ExampleProvider, useExampleContext] =
//   createSafeContext<ExampleContextProps>("ExampleProvider was not found in tree");
