export const Column = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col justify-center items-center min-h-0'>
      {children}
    </div>
  );
};
