import { useState } from "react";
// Image
// Icons
import { LuCopyPlus  } from "react-icons/lu";
import { RxReload } from "react-icons/rx";



function Clipboard() {

    const [notif, setNotif] = useState(false);
    const [inputValue, setInputValue] = useState('harisandriirawan');

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(inputValue);
            setNotif(true);

                // Reset Icons After 2 seconds
            setTimeout(() => {
                setNotif(false);
            }, 2000);
        } catch (err) {
            console.error('error bro', err);
        }
    };

    return (
        <div className="flex justify-center items-center">
            <div>
                <div className="flex px-4 py-[7.7px] text-base btn rounded-full">
                    <input
                        value={inputValue}
                        onChange={ (e) => setInputValue(e.target.value) }
                        className="outline-none bg-transparent"
                    />
                    <button
                        onClick={copyToClipboard}
                    >
                        {notif ? <RxReload className="animate-spin" /> : <LuCopyPlus />}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Clipboard;
