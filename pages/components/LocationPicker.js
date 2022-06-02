import { useState } from 'react'


const style = {
    wrapper: `pt-2`,
    searchHeader: `w-full font-bold text-left flex items-center text-3xl p-4 overflow-hidden`,
    inputBoxes: `flex flex-col mb-4 relative`,
    inputBox: `h-10 mx-4 border-2 bg-[#eeeeee] flex items-center my-1 px-2`,
    svgContainer: `mx-1`,
    focusedInputBox: `border-black`,
    input: `my-2 rounded-2 p-2 outline-none border-none bg-transparent h-full`,
    verticalLine: `w-0 h-[2rem] border-black border absolute z-10 left-[2.3rem]`,
}

const LocationPicker = () => {

    const [inFocus, setInFocus] = useState('from');

    return (
        <div className={ style.wrapper }>
            <div className={ style.searchHeader }>
                { inFocus === 'from' ? 'where can we pick you from?' : 'where to?' }
            </div>

            <div className={ style.inputBoxes }>
                <div className={ `${style.inputBox}
                 ${inFocus === 'from' && style.focusedInputBox
                    }` }>

                </div>
            </div>
        </div>
    )
}

export default LocationPicker