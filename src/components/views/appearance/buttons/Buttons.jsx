import dynamic from 'next/dynamic';
import React from 'react'
const ColorPicker = dynamic(() => import('antd/lib/color-picker'), {
    ssr: false // Disable server-side rendering for this component
});

const Buttons = ({ styles, buttonStyle, setButtonStyle, btnColor, btnBg, setBtnColor, setBtnBg }) => {
    return (
        <div className='card '>

            <div className="grid grid-cols-3 gap-4 py-1 mb-5">
                {styles.map((style, index) => (
                    <button onClick={() => setButtonStyle(style)} className={`${style} btn-base relative`} key={index} style={{ color: btnColor, backgroundColor: btnBg }}>
                        {style == buttonStyle && <i className='bx bx-check text-xl'></i>}
                    </button>
                ))}
            </div>
            <input type="text" className="form-input mb-2" placeholder='or custom yourself by tailwid css' onChange={(e) => setButtonStyle(e.target.value)} value={buttonStyle} />
            <div className="flex gap-2 justify-center">
                <ColorPicker showText={(color) => <span className='whitespace-nowrap text-xs sm:text-base'>Color ({color.toHexString()})</span>} defaultValue={btnColor} onChange={(value) => setBtnColor(value.toHexString())} value={btnColor} size="" />
                <ColorPicker showText={(color) => <span className='whitespace-nowrap text-xs sm:text-base'>Background ({color.toHexString()})</span>} defaultValue={btnBg} onChange={(value) => setBtnBg(value.toHexString())} value={btnBg} size="" />
            </div>
            <button className={`btn-base mt-3 !py-6 ${buttonStyle} `} style={{ color: btnColor, backgroundColor: btnBg }}>Preview Your Link</button>

        </div>
    )
}

export default Buttons