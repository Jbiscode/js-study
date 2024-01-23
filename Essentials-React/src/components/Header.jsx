import  HeaderImg  from "../assets/investment-calculator-logo.png";

export default function Header() {
    return (
        <>
            <div id="header">
                <img src={HeaderImg} alt="Investment Calculator" />
                <h1>Investment Calculator</h1>
            </div>
        </>
    );
}
