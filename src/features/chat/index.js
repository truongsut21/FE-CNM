import { CardChat } from "./components/roomChat/CardChat";
import { CardPhonebook } from "./components/phonebook/CardPhonebook";

function Chat() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <CardPhonebook />
      <CardChat />
    </div>
  );
}

export default Chat;
