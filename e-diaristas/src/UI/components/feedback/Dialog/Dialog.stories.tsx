import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Dialog from "./Dialog";

type Story = StoryObj<typeof Dialog>;

const meta: Meta<typeof Dialog> = {
  title: "feedback/Dialog",
  component: Dialog,
};

export default meta;

export const ComponentStory: Story = {
  render: (args: any) => <Dialog {...args} />,
  args: {},
  argTypes: {
    isOpen: {
      description: 'confirma se está aberto ou fechado a janela',
      defaultValue: true,
    },
    title: {
      description: 'titulo',
      defaultValue: 'Confirmar presença da diarista',
    },
    subtitle: {
      description: 'subtitulo',
      defaultValue: 'Tem certeza que deseja confirmar presença da diarista',
    },
    children: {
      description: 'caixa de texto',
      defaultValue: 'Texto',
    },
    noConfirm: {
      description: 'função para aparecer o botão confirmar no Dialog',
      defaultValue: true,
    },
    noCancel: {
      description: 'função para aparecer o botão confirmar no Dialog',
      defaultValue: true,
    },
  },
};
