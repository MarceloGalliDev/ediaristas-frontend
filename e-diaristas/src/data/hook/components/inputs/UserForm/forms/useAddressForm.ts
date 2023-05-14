import { FormValues } from "data/@types/forms/FormValue";
import useCities from "data/hook/useCities";
import { LocationService } from "data/services/LocationService";
import { useEffect, useMemo } from "react";
import { useFormContext } from "react-hook-form";


export default function useAddressForm(){
  const {
    register,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<FormValues>();

  const [addressState, addressCity, addressCep] = watch([
    'endereco.estado',
    'endereco.cidade',
    'endereco.cep'
  ]);//vou observar vários campos

  const estados = LocationService.estados();
  const listaCidades = useCities(addressState);
  const opcoesCidades = useMemo(() => {
    listaCidades.map((item) => item.cidade)
  },[listaCidades]);

  useEffect(() => {
    register('endereco.codigo_ibge')
  }, [])

  useEffect(() => {
    if(addressCity) {
      const cidade = listaCidades.find((item) => item.cidade === addressCity);//estamos buscando dentro do retornado da api uma cidade
      if(cidade){
        setValue('endereco.codigo_ibge', cidade.codigo_ibge);
      }
    }
  }, [addressCity])//aqui sempre que mudamos o estado, ele vai buscar as cidades correspondentes.

  useEffect(() => {
    const cep = (addressCep ?? '').replaceAll('_','');
    if(cep.length === 10){
      LocationService.cep(cep).then((newAddress) => {
        if(newAddress){
          newAddress.uf && setValue('endereco.estado', newAddress.uf);
          newAddress.localidade && setValue('endereco.cidade', newAddress.localidade);
          newAddress.ibge && setValue('endereco.codigo_ibge', newAddress.ibge);
          newAddress.bairro && setValue('endereco.bairro', newAddress.bairro);
          newAddress.logradouro && setValue('endereco.logradouro', newAddress.logradouro)
        }
      })//aqui o .then retorna todos os dados
    }
  }, [addressCep]);

  return {
    addressCep,
    addressCity,
    addressState,
    register,
    estados,
    opcoesCidades,
    control,
    errors,
  };
}