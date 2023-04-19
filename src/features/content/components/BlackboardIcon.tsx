interface BlackboardIconProps {
  color?: string;
  width?: number;
  height?: number;
}

export const BlackboardIcon = ({
  color = "white",
  width = 89,
  height = 89,
}: BlackboardIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 89 89"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M74.1667 11.125H14.8334C10.7431 11.125 7.41669 14.4514 7.41669 18.5417V59.3333C7.41669 63.4236 10.7431 66.75 14.8334 66.75H29.6667L22.9917 75.65L28.925 80.1L38.9375 66.75H50.0625L60.075 80.1L66.0083 75.65L59.3334 66.75H74.1667C78.257 66.75 81.5834 63.4236 81.5834 59.3333V18.5417C81.5834 14.4514 78.257 11.125 74.1667 11.125ZM14.8334 59.3333V18.5417H74.1667L74.1704 59.3333H14.8334Z"
        fill="white"
      />
      <path d="M22.25 44.5H37.0833V51.9167H22.25V44.5Z" fill={color} />
    </svg>
  );
};
