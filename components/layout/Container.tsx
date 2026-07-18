type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-20">
      {children}
    </div>
  );
}