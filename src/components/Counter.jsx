import { Text } from "./Text";
import { IconAdd } from "./icons/IconAdd";
import { IconMinus } from "./icons/IconMinus";

export const Counter = (props) => {
  return (
    <div className="flex">
      <Text>
        {props.count} {props.text}
      </Text>
      <nav className="flex ml-3">
        <IconMinus onClick={props.onDecrement} />
        <IconAdd onClick={props.onIncrement} />
      </nav>
    </div>
  );
};
