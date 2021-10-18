import WinFive from "./winFive";
import WinFour from "./winFour";
import WinOnce from "./winOnce";
import WinSix from "./winSix";
import WinThree from "./winThree";
import WinTwo from "./winTwo";
import './dice.css';

const Dice = (props) => {
    switch (props.diceNum) {
        case 1: return <WinOnce />;
        case 2: return <WinTwo />;
        case 3: return <WinThree />;
        case 4: return <WinFour />;
        case 5: return <WinFive />;
        case 6: return <WinSix />;
        default: return <WinTwo />;
    }
}

export default Dice