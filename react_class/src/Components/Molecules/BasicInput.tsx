interface BasicInputProps {
  labelTitle: string;
}

export const BasicInput = ({ labelTitle }: BasicInputProps) => {
  return (
    <>
      <label htmlFor="">{labelTitle}</label>
      <input type="text" />
    </>
  );
};
