import { useAuthStore } from '../store/useAuthStore';
import { useChatStore } from '../store/useChatStore';

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  return (
    <div className="p-2.5 border-b border-base-300">
      <div className="flex items-center justify-between">
        {/* Close button */}
        <button onClick={() => setSelectedUser(null)}>
          {/* Back icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>

          {/* Back icon */}
        </button>
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div
            className={`avatar m-2 ${
              onlineUsers.includes(selectedUser._id)
                ? 'avatar-online'
                : 'avatar-offline'
            }`}>
            <div className="size-10 rounded-full relative">
              <img
                src={selectedUser.profilePic || '/avatar.svg'}
                alt={selectedUser.fullName}
              />
            </div>
          </div>

          {/* User info */}
          <div>
            <h3 className="font-medium">{selectedUser.fullName}</h3>
            <p className="text-sm text-base-content/70">
              {onlineUsers.includes(selectedUser._id) ? 'Online' : 'Offline'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChatHeader;
