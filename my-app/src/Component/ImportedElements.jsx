import React from "react";
// import USer from "./ExamplePropsssHOP/USer";
import Counter from "./ExamplePropsssHOP/Counter";
import Hover from "./ExamplePropsssHOP/Hover";
import MentalComponent from "./ExamplePropsssHOP/MentalComponent";
// import HigherOrderComponets from "./HigherOrderComponets/HigherOrderComponets";
// import HoverCounter from "./HigherOrderComponets/HoverCounter";
// import Hero from "./Error/Hero";
// import ErrorBoudry from "./ErrorBoudry.jsx/ErrorBoudry";
// import ParentCompoent from "./Componentss/ParentCompoent";
// import Inlinstyle from "./inlineStyle/Inlinstyle";
// import Rendering from "./Rendering";
// import NameList from "./NameList";
// import Stylesheet from "./StyleComponent/Stylesheet";
// import ParentMethodpeops from "./Bind/ParentMethodpeops";
// import Refmemo from "./REF/Refmemo";
// import ClassRef from "./REF/ClassRefs";
// import Focusinput from "./REF/Focusinput";
// import DateDisplay from "./DateDisplay.jsx/DateDisplay";
// import Counter from "./Counter";
// import Destructring from "./Destructring";
// import Click from "./Click";
// import ClassClick from "./ClassClick";
// import Message from "./Message";
// import Eventt from "./Event";
// import Class1 from "./Class1";
// import styles from "../Component/Appstyles/appStyle.module.css";
// import "./Appstyles/app.css";
// import Table from "./Fragment/Table";
// import Lifecylce from "./Lifecycle/Lifecylce";
// import FragmentDemo from "./Lifecycle/FragmentDemo";
// import Form from "./Form/Form";

function ImportedElemets() {
  return (
    <div>
      {/* <Greet />
      <Hello />

      <H name="Manoj" heroName="Batman" />
      <H name="Gagan" heroName="Naruto " />
      <H name="Omar" heroName="Spider man" />
      <Display name="Gagan" /> */}
      {/* <Message /> */}
      {/* <DateDisplay /> */}
      {/* <Counter /> */}
      {/* <Destructring name="Gagan" HeroName="Naruto" /> */}
      {/* <Click />
      <ClassClick /> */}
      {/* <Eventt /> */}
      {/* <Class1 /> */}
      {/* <ParentMethodpeops /> */}
      {/* <Rendering /> */}

      {/* <NameList /> */}

      {/* <Stylesheet /> */}

      {/* <Inlinstyle /> */}

      {/* <h1 className="error">Normal Css file</h1>
      <h2 className={styles.success}>Module css file</h2> */}

      {/* <Form /> */}
      {/* <Lifecylce /> */}
      {/* <FragmentDemo /> */}
      {/* <Table /> */}

      {/* <ParentCompoent /> */}
      {/* <Refmemo /> */}
      {/* <ClassRef /> */}

      {/* <Focusinput /> */}
      {/* <FRinputParent /> */}
      {/* <ErrorBoudry>
        <Hero heroName="Joker" />
        <Hero heroName="Batman" />
      </ErrorBoudry> */}

      {/* <HigherOrderComponets />
      <HoverCounter /> */}

      {/* <Counter />
      <Hover />
      <USer
        render={(isLoggedIn) => isLoggedIn ? "Gagan" : "Guest"}/> */}

      <MentalComponent
        render={(count, IncrementHandler) => (
          <Counter count={count} increment={IncrementHandler} />
        )}
      />
      <MentalComponent
        render={(count, IncrementHandler) => (
          <Hover count={count} increment={IncrementHandler} />
        )}
      />
    </div>
  );
}

export default ImportedElemets;
