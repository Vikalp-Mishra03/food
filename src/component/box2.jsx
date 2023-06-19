import React, { useState } from 'react'
export default function box2() {
    const list = [
        {
            "asset_id": 18884,
            "asset_title": "Threadbuild",
            "asset_description": "Watch the video and thread build, and jot out key threads while watching that video.",
            "asset_content": " ",
            "asset_type": "input_asset",
            "asset_content_type": "threadbuilder"
        },
    ]

    const [open, setOpen] = useState(false)
    return (
        <>
            <div class=" box-2">
                <div class="black">
                    <p>{list[0].asset_title}</p>
                    <div class="circle">
                        <span>i</span>
                    </div>
                </div>
                <div class="description">
                    <p>
                        <b>Description</b>:{list[0].asset_description}
                    </p>
                </div>
                <div class="thread-box" onClick={() => setOpen(!open)}>
                    <img src="src/assets/img/arrow.png" alt="" />
                    <h1>Thread A</h1>
                </div>
                {
                    open &&

                    <div className="yellow-box" onClick={() => setOpen(false)}>
                        <div class="thread-box">
                            <img src="src/assets/img/arrow.png" alt="" />
                            <h1>Thread A</h1>
                        </div>
                        <div class="input">
                            <p>Sub thread 1</p>
                        </div>
                        <div class="input-data">
                            <input type="text" placeholder="Enter Text Here" />
                        </div>


                        <div class="input-1">
                            <p>Sub Interpretation 1</p>
                        </div>
                        <div class="input-data1">
                            <input class="input-data2" type="text" placeholder="Enter Text Here" />
                        </div>
                        <div class="icon">
                            <img src="src/assets/img/Vector.png" alt="" />
                            <img src="src/assets/img/Vector4.png" alt="" />
                            <img src="src/assets/img/Vector (1).png" alt="" />
                            <img src="src/assets/img/Vector (2).png" alt="" />
                        </div>
                        <div class="dropdown">
                            <div class="mini-dropdown">
                                <select name="select Category">
                                    <option value="volvo">select Category</option>
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="opel">Opel</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            <div class="mini-dropdown">
                                <select name="select Category">
                                    <option value="volvo">select Category</option>
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="opel">Opel</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                        </div>
                        <button>
                            <img src="src/assets/img/plus.png" alt="" />
                            <p>Sub-thread</p>
                        </button>
                    </div>
                }
                <div className="main-summary">
                    <div class="Summary">
                        <p>Summary for Thread A</p>
                    </div>
                    <div class="summary-data">
                        <input type="text" placeholder="Enter Text Here" />
                    </div>
                </div>
            </div>


        </>
    )
}
