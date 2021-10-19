import "./App.css";
import { Button, ButtonVariants } from "./components";

function App() {
  const onButtonClick = () => {
    alert("You clicked on button");
  };

  return (
    <div className="container">
      <Button onClick={onButtonClick} type="button">
        Default
      </Button>
      <Button
        variant={ButtonVariants.primary}
        onClick={onButtonClick}
        type="button"
      >
        Primary
      </Button>
      <Button
        variant={ButtonVariants.secondary}
        onClick={onButtonClick}
        type="button"
      >
        Secondary
      </Button>
      <Button
        variant={ButtonVariants.success}
        onClick={onButtonClick}
        type="button"
      >
        Success
      </Button>
      <Button
        variant={ButtonVariants.info}
        onClick={onButtonClick}
        type="button"
      >
        Information
      </Button>
      <Button
        variant={ButtonVariants.warning}
        onClick={onButtonClick}
        type="button"
      >
        Warning
      </Button>
      <Button
        variant={ButtonVariants.danger}
        onClick={onButtonClick}
        type="button"
      >
        Danger
      </Button>
    </div>
  );
}

export default App;
