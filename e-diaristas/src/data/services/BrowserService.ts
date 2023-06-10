// Função para scroll da página, quando utilizado o scroll da página sobe até posição inicial da tela

export const BrowserService = {
  scrollToTop(){
    window.scroll({
      top: 0,
      behavior: 'smooth', //scroll suavizado
    });
  },
}