import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import UserProfileAvatar from "./UserProfileAvatar";
import { UserType } from "data/@types/UserInterface";

type Story = StoryObj<typeof UserProfileAvatar>;

const meta: Meta<typeof UserProfileAvatar> = {
  title: "data-display/UserProfileAvatar",
  component: UserProfileAvatar,
};

export default meta;

export const ComponentStory: Story = {
  render: (args: any) => <UserProfileAvatar {...args} />,
  args: {
    user: {
      nome_completo: 'Ariel Sardinha',
      nascimento: '1993-07-07',
      cpf: '99999999999',
      email: 'abc@def.com',
      foto_usuario: 'https://github.com/arielsardinha.png',
      telefone: '(99) 99999-9999',
      tipo_usuario: UserType.Cliente,
      reputacao: 0,
      password: '',
      chave_pix: '',
    },
  },
  argTypes: {
    user: {
      description: 'Componente para configuração de avatar',
      defaultValue: '',
    },
  },
};
