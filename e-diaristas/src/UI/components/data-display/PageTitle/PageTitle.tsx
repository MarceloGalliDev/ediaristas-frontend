import { PropsWithChildren } from "react";
import { PageTitleContainer } from "./PageTitle.styled";

export interface PageTitleProps {
  title: string;
  subtitle?: string;
}

const PageTitle:React.FC<PropsWithChildren<PageTitleProps>> = ({title, subtitle, children}) => {
  return (
    <PageTitleContainer>PageTitle</PageTitleContainer>
  )
}

export default PageTitle;