import "./conversation.css";

export default function Conversation({ conversation, currentUser }) {
  return (
    <div className="conversation">
      <div className="conversationName">{conversation?.name}</div>
    </div>
  );
}
