import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import UserHeaderMenu from "./UserHeaderMenu";
import { UserType } from "data/@types/UserInterface";
import UserProfileAvatar from "UI/components/data-display/UserProfileAvatar/UserProfileAvatar";

type Story = StoryObj<typeof UserHeaderMenu>;

const meta: Meta<typeof UserHeaderMenu> = {
  title: "navigation/UserHeaderMenu",
  component: UserHeaderMenu,
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
    isMenuOpen: false,
  },
  argTypes: {
    user: {
      description: 'Componente para configuração de avatar',
      defaultValue: '',
    },
  },
};
