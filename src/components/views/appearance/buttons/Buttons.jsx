import dynamic from 'next/dynamic';
import React from 'react'
const ColorPicker = dynamic(() => import('antd/lib/color-picker'), {
    ssr: false // Disable server-side rendering for this component
});

const Buttons = ({ styles, customBtn, setCustomBtn }) => {
    return (
        <div className='card '>

            <div className="grid grid-cols-3 gap-4 py-1 mb-5">
                {styles.map((style, index) => (
                    <button onClick={() => setCustomBtn(prevState => ({
                        ...prevState,
                        style: style
                    }))} className={`${style} btn-base relative`} key={index} >
                        {style == customBtn.style && <i className='bx bx-check text-xl'></i>}
                    </button>
                ))}
            </div>
            <hr className="hr" />
            <input
                type="text"
                className="form-input mb-2"
                placeholder='or custom yourself by tailwid css'
                onChange={(e) => setCustomBtn(prevState => ({
                    ...prevState,
                    style: e.target.value
                }))}
                value={customBtn.style}
            />
            <div className="flex gap-2 flex-wrap">
                <ColorPicker
                    showText={(color) => <span className='whitespace-nowrap text-xs sm:text-base'>Color</span>}
                    defaultValue={customBtn.color}
                    value={customBtn.color} size=""
                    onChange={(value) =>
                        setCustomBtn(prevState => ({
                            ...prevState,
                            color: value.toHexString()
                        }))
                    }
                >
                    <button className='flex-1 border border-stroke text-sm rounded-md p-2 flex justify-center item-center gap-2'>
                        <div className="w-6 md:w-10 h-6 rounded-sm"  style={{ backgroundColor: customBtn.color }}></div> 
                        <p className='text-white mix-blend-difference'>Color</p>
                    </button>
                </ColorPicker>
                <ColorPicker
                    showText={(color) => <span className='whitespace-nowrap text-xs sm:text-base'>Background </span>}
                    defaultValue={customBtn.background}
                    onChange={(value) =>
                        setCustomBtn(prevState => ({
                            ...prevState,
                            background: value.toHexString()
                        }))
                    }
                    value={customBtn.background} size=""
                >
                    <button className='flex-1 border border-stroke text-sm rounded-md p-2 flex justify-center item-center gap-2'>
                        <div className="w-6 md:w-10 h-6 rounded-sm"  style={{ backgroundColor: customBtn.background }}></div> 
                        <p className='text-white mix-blend-difference'>Background</p>
                    </button>
                </ColorPicker>
                <ColorPicker
                    showText={(color) => <span className='whitespace-nowrap text-xs sm:text-base '>Shadow </span>}
                    defaultValue={customBtn.shadow}
                    onChange={(value) =>
                        setCustomBtn(prevState => ({
                            ...prevState,
                            shadow: value.toHexString()
                        }))
                    }
                    disabled={!customBtn.style.includes("shadow")}
                    value={customBtn.shadow} size=""
                >
                    <button className={`flex-1 border border-stroke text-sm rounded-md p-2 flex justify-center item-center gap-2 ${!customBtn.style.includes("shadow") ? 'cursor-not-allowed' : ''}`}>
                        <div className="w-6 md:w-10 h-6 rounded-sm"  style={{ backgroundColor: customBtn.shadow }}></div> 
                        <p className='text-white mix-blend-difference'>Shadow</p>
                    </button>
                </ColorPicker>
            </div>
            <button
                className={`btn-base mt-3 !h-auto !min-h-8 ${customBtn.style} `}
                style={{ color: customBtn.color, backgroundColor: customBtn.background }}
            >
                Example Your Link
            </button>

        </div>
    )
}

export default Buttons