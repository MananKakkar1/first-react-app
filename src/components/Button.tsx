interface Props {
  text: string;
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  onClick: () => void;
}

const Button = ({ text, color, onClick }: Props) => {
  return (
    <div>
      <button className={ "btn btn-" + color} onClick={onClick}>{ text }</button>
    </div>
  );
};

export default Button;
