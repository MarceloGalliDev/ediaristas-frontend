import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import DataList from "./DataList";
import { Button } from "@mui/material";

type Story = StoryObj<typeof DataList>;

const meta: Meta<typeof DataList> = {
  title: "data-display/DataList",
  component: DataList,
};

export default meta;

export const ComponentStory: Story = {
  render: (args: any) => (
  <DataList 
    header={
      <div>
        Data: 05/05/2022
        <br />
        Limpeza simples
      </div>
    }
    
    body={
      <div>
        Cidade: São Paulo
        <br />
        Número de comôdos
      </div>
    }

    actions={
      <>
        <Button variant="contained" color="secondary">Se candidatar</Button>
        <Button variant="contained" color="secondary">Se candidatar</Button>
        <Button variant="contained" color="secondary">Se candidatar</Button>
      </>
    }
  />),
  args: {},
  argTypes: {
    header: {
      description: 'Componente cabeçalho para aside de dispositivos medium device abaixo',
    },
    body: {
      description: 'Componente corpo para aside de dispositivos medium device abaixo',
    },
    actions: {
      description: 'Componente actions para aside de dispositivos medium device abaixo, com dependências de existência',
    },
  },
};
