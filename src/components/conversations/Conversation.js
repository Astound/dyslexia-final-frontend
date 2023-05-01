import "./conversation.css";

export default function Conversation({ conversation, currentUser }) {
  return (
    <div className="conversation">
      {!currentUser ? (
        <div className="conversationName">
          {conversation.name || conversation.firstName}
        </div>
      ) : (
        <div className="conversationName w-full p-2 bg-slate-400">
          {conversation.name || conversation.firstName}
        </div>
      )}
    </div>
  );
}
