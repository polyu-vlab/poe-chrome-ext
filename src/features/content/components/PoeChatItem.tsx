export const PoeChatItem = () => {
  //check if query string exists
  const urlParams = new URLSearchParams(window.location.search);

  return (
    <div>
      <a href="/chatgpt?channel=gpt">
        <div className="PageWithSidebarNavItem_navItem__6742K PageWithSidebarNavItem_divider___d5DH">
          <div className="BotHeader_title__q67To">
            <img
              alt="GPTutor"
              className="BotImage_botImage__Awqvh"
              src={chrome.runtime.getURL("assets/images/logo-white.png")}
              width="36"
            />
            <p>GPTutor</p>
          </div>
          <div className="PageWithSidebarNavItem_expander__9ZHTC"></div>
          <svg
            viewBox="0 0 7 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="PageWithSidebarNavItem_chevronIcon__omMfH"
          >
            <path d="M1.5 1.5 5 5 1.5 8.502"></path>
          </svg>
        </div>
      </a>
    </div>
  );
};
