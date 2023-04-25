import { PropsWithChildren } from "react";
import { PageSubtitleStyled, PageTitleContainer, PageTitleStyled } from "./PageTitle.styled";

export interface PageTitleProps {
  title: string;
  subtitle?: string;
}

const PageTitle:React.FC<PropsWithChildren<PageTitleProps>> = ({title, subtitle, children}) => {
  return (
    <PageTitleContainer>
      <PageTitleStyled>{title}</PageTitleStyled>
      <PageSubtitleStyled>{subtitle}</PageSubtitleStyled>
    </PageTitleContainer>
  )
}

export default PageTitle;