import './button.css';

export const Button = (props:TButtonProps) => {

    const {children, disabled= false, onClick } = props;

    return (

        <button onClick={onClick} className="counter__button" disabled={disabled}>
            {children}
        </button>

    );
}

type TButtonProps = {
    children: React.ReactNode;
    disabled?: boolean;
    onClick?:() => void;
}