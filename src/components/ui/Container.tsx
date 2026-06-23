type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`
        mx-auto
        max-w-[1280px]
        px-6
        md:px-8
        lg:px-12
        ${className}
      `}
    >
      {children}
    </div>
  );
}