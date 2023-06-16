import { UserInterface, UserType } from "data/@types/UserInterface";
import { NextRouter, useRouter } from "next/router";
import { useEffect } from "react";

//lista de urls, tem que ser o mesmo que as pages
export const privateRoutes = [
  '/alterar_dados',
  '/diarias',
  '/pagamentos',
  '/oportunidades',
]

export const annonymousRoutes = [
  '/cadastro/diarista',
  '/login',
  '/recuperar_senha',
  '/',
]

export const houseCleanerOnlyRoutes = [
  '/pagamentos',
  '/oportunidades'
]

//NextRouter é o retorno
export default function useRouterGuard(
  //vamos receber os dados do usuario
  user: UserInterface,
  isLogging: boolean,
): NextRouter {
  const router = useRouter(),
    isLogged = user.nome_completo.length > 0,
    isHouseCleaner = user.tipo_usuario === UserType.Diarista;

    useEffect(() => {
      handleNavigation(router.route)

      //on(), inicia um evento, cria um evento a cada troca de tela na navegação
      router.events.on('routeChangeStart', handleNavigation)

      //aqui retornamos a cada troca de tela e excluimos apos executada
      return () => {
        router.events.off('routeChangeStart', handleNavigation)
      }

    }, [router, isLogging, isLogged])

    //aqui verificamos se tem incluso na url a string citada no includes
    function handleNavigation(url: string){
      if (!isLogging){
        if(privateRoutes.includes(url) && !isLogged) {
          //aqui simula uma função link do navigation
          router.replace('/login');
          return
        }
        
        //aqui verificamos se tem a url na navegação e se esta logado, ou se está em uma diária
        if(
          (annonymousRoutes.includes(url) && !isLogged) ||
          (houseCleanerOnlyRoutes.includes(url) && !isHouseCleaner)
        ) {
          router.replace(getHome());
          return;
        }
  
        if(url === '/encontrar-diarista' && isHouseCleaner) {
          router.replace('/');
          return;
        }
      }
    }
    
    function getHome(): string {
      if(!isLogged){
        return '/';
      }

      return isHouseCleaner ? '/oportunidades' : '/diarias'
    }

  return router
}