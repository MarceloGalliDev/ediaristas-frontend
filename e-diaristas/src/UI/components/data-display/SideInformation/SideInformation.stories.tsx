import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SideInformation from "./SideInformation";

type Story = StoryObj<typeof SideInformation>;

const meta: Meta<typeof SideInformation> = {
  title: "data-display/SideInformation",
  component: SideInformation,
};

export default meta;

export const SideItemsIcons: Story = {
  render: (args: any) => <SideInformation {...args} />,
  args: {
    title: 'Detalhes',
    items: [
      {
        title: 'Tipo',
        descricao: ['Limpeza de rotina'],
        icon: 'twf-check-circle',
      },
      {
        title: 'Tamanho',
        descricao: ['3 cômodos', '2 banheiros'],
        icon: 'twf-check-circle',
      },
      {
        title: 'Data',
        descricao: ['07/05/2023'],
        icon: 'twf-check-circle',
      },
    ],
    footer: {
      text: 'R$185,00',
      icon: 'twf-credit-card',
    }
  },
};

export const SideItems: Story = {
  render: (args: any) => <SideInformation {...args} />,
  args: {
    title: 'Como funciona?',
    items: [
      {
        title: '1 - Cadastro',
        descricao: ['Você faz o cadastro e escolhe as cidades atendidas'],
      },
      {
        title: '2 - Receba Proposta',
        descricao: ['Você receberá os serviçoes por email e notificação no celular'],
      },
      {
        title: '3 - Diária Agendada',
        descricao: ['Se o seu perfil for escolhido pelo cliente você receberá a confirmação do agendamento'],
      },
    ],
  },
};
