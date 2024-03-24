import { CardChat } from "./components/roomChat/CardChat";
import { CardContact } from "./components/contactSection/CardContact";

function Chat() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <CardContact />
      <CardChat />
    </div>
  );
}

export default Chat;
