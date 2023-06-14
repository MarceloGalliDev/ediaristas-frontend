import { Container } from "@mui/material";
import PageTitle from "UI/components/data-display/PageTitle/PageTitle";
import SafeEnvironment from "UI/components/feedback/SafeEnvironment/SafeEnvironment";
import type { NextPage } from "next";

const Index: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <Container>
        <PageTitle title={""} />
      </Container>
      
    </div>
  )
}

export default Index;