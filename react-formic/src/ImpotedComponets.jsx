import React from "react";
// import FormikConntainer from "./Components/ReusbleFormik/FormiKCOntainer";
// import FormikControl from "./Components/ReusableComponents/FormikControl";
// import InputFormikcontrol from "./Components/ReusableComponents/InputFormikcontrol";
// import FormiKCOntainer from "./Components/ReusbleFormik/FormiKCOntainer";
// import LoginForm from "./Components/LoginForm/LoginForm";
// import RegistrationForm from "./Components/RegistrationForm";
// import EnrollmentForm from "./Components/EnrollmentForm";
// import YoutubeForm from "./Components/Youtube Form/YoutubeForm";
// import YoutubeSecond from "./Components/Youtube Form/YoutubeSecond";
// import FormikForm from "./Components/Youtube Form/FormikForm";
// import FormComponent from "./Components/Youtube Form/Form";
import { theme, ThemeProvider } from "@chakra-ui/react";
import LoginForm from "./Components/LoginForm/LoginForm";
function ImpotedComponets() {
  return (
    <div>
      {/* <YoutubeForm /> */}
      {/* <YoutubeSecond /> */}
      {/* <FormComponent /> */}

      {/* <FormikForm /> */}
      {/* 
      <FormikContainer />
      <FormikControl />
      <InputFormikcontrol /> */}
      {/* <FormikConntainer /> */}
      {/* <LoginForm />
      <hr /> */}
      {/* <RegistrationForm /> */}
      {/* <EnrollmentForm /> */}
      <ThemeProvider theme={theme}>
        <LoginForm />
      </ThemeProvider>
    </div>
  );
}

export default ImpotedComponets;
