interface TitleMenuProps {
  title: string;
}
export const TitleMenu = ({ title }: TitleMenuProps) => {
  return <h3 className="menu_h3">{title}</h3>;
};
