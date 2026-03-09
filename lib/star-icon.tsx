import React from "react";

export function StarIcon({
  size = 24,
  color = "currentColor",
  ...props
}: React.SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M9.98438 15.2344L16.1719 18.9844L14.5312 11.9531L19.9688 7.21875L12.7969 6.60938L9.98438 0L7.17188 6.60938L0 7.21875L5.4375 11.9531L3.79688 18.9844L9.98438 15.2344Z" />
    </svg>
  );
}
