import * as TabsPrimitive from "@radix-ui/react-tabs";
import { clsx } from "clsx";
import React from "react";

interface Tab {
  title: string;
  value: string;
}

const tabs: Tab[] = [
  {
    title: "Pessoa",
    value: "tab1",
  },
  {
    title: "Celular",
    value: "tab2",
  },

  {
    title: "Escada",
    value: "tab3",
  },
];

interface TabsProps {}

const Tabs = (props: TabsProps) => {
  return (
    <TabsPrimitive.Root defaultValue="tab1">
      <TabsPrimitive.List
        className={clsx("flex w-full bg-white dark:bg-gray-800")}
      >
        {tabs.map(({ title, value }) => (
          <TabsPrimitive.Trigger
            key={`tab-trigger-${value}`}
            value={value}
            className={clsx(
              "group",
              "first:rounded-tl-lg last:rounded-tr-lg",
              "border-b first:border-r last:border-l",
              "border-gray-300 dark:border-gray-600",
              "radix-state-active:border-b-gray-700 focus-visible:radix-state-active:border-b-transparent radix-state-inactive:bg-gray-50 dark:radix-state-active:border-b-gray-100 dark:radix-state-active:bg-gray-900 focus-visible:dark:radix-state-active:border-b-transparent dark:radix-state-inactive:bg-gray-800",
              "flex-1 px-3 py-2.5",
              "focus:radix-state-active:border-b-red",
              "focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
            )}
          >
            <span
              className={clsx(
                "text-sm font-medium",
                "text-gray-700 dark:text-gray-100"
              )}
            >
              {title}
            </span>
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>
      {tabs.map(({ value }) => (
        <TabsPrimitive.Content
          key={`tab-content-${value}`}
          value={value}
          className={clsx("rounded-b-lg bg-white px-6 py-4 dark:bg-gray-800")}
        >
          <span className="text-sm text-gray-700 dark:text-gray-100">
            {
              {
                tab1: `
                Quantidade de Pessoas: 0
                `,
                tab2: `Quantidade Celular: 0`,
                tab3: "Escada?",
              }[value]
            }
          </span>
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
};

export { Tabs };
