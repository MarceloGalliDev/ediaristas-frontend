import { Button, Container, Divider, Tooltip, Typography } from '@mui/material';
import ToggleButtonGroup, { ToggleButton } from 'UI/components/inputs/ToggleButtonGroup/ToggleButtonGroup';
import { AddressForm } from 'UI/components/inputs/UserForm/UserForm';
import { ServicoInterface } from 'data/@types/ServicoInterface';
import React, { PropsWithChildren } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { ItemsContainer } from './_detalhe-servico.styled'; 
import ItemCounter from 'UI/components/inputs/ItemCounter/ItemCounter';
import TextFieldMask from 'UI/components/inputs/TextFieldMask/TextFieldMask';
import { FormValues } from 'data/@types/forms/FormValue';
import TextField  from 'UI/components/inputs/TextField/TextField';
//import {  } from 'react';

interface DetalheServicoProps {
  servicos?: ServicoInterface[];
  comodos?: number;
  podemosAtender?: boolean;
};

export const houseParts = [
  {
    singular: 'Cozinha',
    plural: 'Cozinhas',
    name: 'quantidade_cozinhas',
  },
  { 
    singular: 'Sala', 
    plural: 'Salas', 
    name: 'quantidade_salas' 
  },
  {
    singular: 'Banheiro',
    plural: 'Banheiros',
    name: 'quantidade_banheiros',
  },
  { 
    singular: 'Quarto', 
    plural: 'Quartos', 
    name: 'quantidade_quartos' 
  },
  {
    singular: 'Quintal',
    plural: 'Quintais',
    name: 'quantidade_quintais',
  },
  {
    singular: 'Outros',
    plural: 'Outros',
    name: 'quantidade_outros',
  }
];



const DetalheServico: React.FC<DetalheServicoProps> = ({ servicos = [], comodos = 0, podemosAtender }) => {
  //temos que colocar os dados no contexto da página
  //quando não passamos valor na desestruturação para um boleano, ele é um undefined=false
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FormValues>()
  return (
    <div>
      <Typography sx={{ fontWeight: 'bold', pb: 2 }}>
        Qual o tipo de limpeza você precisa?
      </Typography>
      <Controller
        name={'faxina.servico'} //recebemos da api
        defaultValue={servicos[0]?.id} //defaultValue so aceita valores em string, e id pode retornar um interger
        control={control} //recebemos do useFormContext
        render={({ field }) => (
          <ToggleButtonGroup
            exclusive //aqui é para quando marcar uma opção desmarcar a outra
            value={field.value}
            onChange={(_event, value) =>
              field.onChange(value ?? servicos[0]?.id)
            } //aqui verifica se está marcado um botão, se acaso apertar o mesmo botão, ele volta para a posição 0
          >
            {servicos.map(
              (
                servico //icone vindo da api, é o caminho dentro da api
              ) => (
                <ToggleButton key={servico.id} value={servico.id}>
                  <i className={servico.icone ?? 'twf-cleaning-1'} />
                  {servico.nome}
                </ToggleButton>
              )
            )}
          </ToggleButtonGroup>
        )}
      />

      <Divider sx={{ my: 5 }} />

      <Typography sx={{ fontWeight: 'bold', mb: 2 }}>
        Qual o tamanho da sua casa?
      </Typography>

      <ItemsContainer>
        {houseParts.map((item) => (
          <Controller
            key={item.name}
            name={`faxina.${item.name}` as any}
            defaultValue={0}
            control={control}
            render={({ field }) => (
              <ItemCounter
                label={item.singular}
                plural={item.plural}
                counter={field.value as number}
                onInc={() => field.onChange((field.value as number) + 1)}
                onDec={() =>
                  field.onChange(Math.max(0, (field.value as number) - 1))
                }
              />
            )}
          />
        ))}
      </ItemsContainer>

      <Divider sx={{ my: 5 }} />

      <Typography sx={{ fontWeight: 'bold', mb: 2 }}>
        Qual a data você gostaria de receber a/o diarista?
      </Typography>

      <ItemsContainer>
        <Controller
          name={'faxina.data_atendimento'}
          defaultValue={''}
          control={control}
          render={({ field: { ref, ...inputProps } }) => (
            <TextFieldMask
              {...inputProps}
              inputRef={ref}
              mask={'99/99/9999'}
              label={'Data'}
              error={errors?.faxina?.data_atendimento !== undefined}
              helperText={errors?.faxina?.data_atendimento?.message}
            />
          )}
        />

        <Controller
          name={'faxina.hora_inicio'}
          defaultValue={''}
          control={control}
          render={({ field: { ref, ...inputProps } }) => (
            <TextFieldMask
              {...inputProps}
              inputRef={ref}
              mask={'99:99'}
              label={'Hora Início'}
              error={errors?.faxina?.hora_inicio !== undefined}
              helperText={errors?.faxina?.hora_inicio?.message}
            />
          )}
        />

        <Controller
          name={'faxina.hora_termino'}
          defaultValue={''}
          control={control}
          render={({ field: { ref, ...inputProps } }) => (
            <Tooltip title={"Campo Automático"}>
              <div>
                <TextFieldMask
                  {...inputProps}
                  inputProps={{readOnly: true, disabled: true}}
                  inputRef={ref}
                  mask={'99:99'}
                  label={'Hora Término'}
                  error={errors?.faxina?.hora_termino !== undefined}
                  helperText={errors?.faxina?.hora_termino?.message}
                  fullWidth
                />
              </div>
            </Tooltip>
          )}
        />

      </ItemsContainer>

      <Divider sx={{ my: 5 }} />

      <Typography sx={{fontWeight: 'bold', pb: 2}}>
        Observações
      </Typography>

      <TextField 
        {...register('faxina.observacoes')}
        label={'Quer acrescentar algum detalhe?'}
        required={false}
        fullWidth
        multiline
      />

      <Divider sx={{ my: 5 }} />

      <Typography sx={{ fontWeight: 'bold', pb: 2}}>
        Qual endereço onde será realizada a limpeza?
      </Typography>

      <AddressForm />

      {!podemosAtender && (
        <Typography
          color={'error'}
          align={'center'}
          sx={{ pb: 2}}
        >
          Infelizmente ainda não atendemos na sua região.
        </Typography>
      )}

      <Container sx={{ textAlign: 'right' }}>
        <Button
          variant='contained'
          color='secondary'
          type='submit'
          disabled={comodos === 0 || !podemosAtender}
        >
          Ir para identificação
        </Button>
      </Container>
    </div>
  );
};

export default DetalheServico;

//usamos Controller para enviar os dados para o context
//usamos ToolTip do material ui para que quando passar o mause em cima de um campo, ele mostra uma observação