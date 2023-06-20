import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Table, { TableCell, TablePagination, TableProps, TableRow } from "./Table";
import { Button } from "@mui/material";

type Story = StoryObj<typeof Table>;

interface TemplatePropInterface {
  data: string;
  tipo: string;
  comodos: string;
  cidade: string;
}

const meta: Meta<typeof Table> = {
  title: "data-display/Table",
  component: Table,
};

export default meta;

export const ComponentStory: Story = {
  render: (args: any) => (
    <>
      <Table {...args} />
      <TablePagination count={5}/>
    </>
  ),
  args: {
    header: ['Data', 'Tipo de serviço', 'Número de cômodos', 'Cidade', ''],
    data: [
      data: '10/10/2023',
      tipo: 'Limpeza de rotina',
      comodos: 2,
      cidade: 'Maringá - PR',
    ] as TemplatePropInterface[],
    rowElement(item, index) {
      return <TableRow key={index}>
        <TableCell>
          <strong>{item.data}</strong>
        </TableCell>
        <TableCell>
          {item.tipo}
        </TableCell>
        <TableCell>
          {item.comodos} cômodos
        </TableCell>
        <TableCell>
          {item.cidade}
        </TableCell>
        <TableCell>
          <Button>
            Visualizar
          </Button>
        </TableCell>
      </TableRow>
    },
  } as TableProps<TemplatePropInterface>,
  argTypes: {
    header: {
      description: 'Componente header da tabela',
      defaultValue: '',
    },
  },
};
