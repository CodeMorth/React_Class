type BasicButtonProps = {
  content: string;
};

export const BasicButton = ({ content }: BasicButtonProps) => {
  return <button>{content}</button>;
};
