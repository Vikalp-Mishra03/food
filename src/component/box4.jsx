import React from 'react'
import { useState } from 'react'

export default function box4() {
    const list = [

        {
            "asset_id": 18886,
            "asset_title": "4SA Method",
            "asset_description": "To explore more read more",
            "asset_content": " https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
            "asset_type": "display_asset",
            "asset_content_type": "article"
        },

    ]
    const [open, setOpen] = useState(false)
    const [isopen, setIsopen] = useState(false)
    const [Isopen, setIsOpen] = useState(false)
    return (
        <>
            <div className="boxes">
                <div class="box-4">
                    <div class="black">
                        <p>{list[0].asset_title}</p>
                        <div class="circle">
                            <span>i</span>
                        </div>
                    </div>
                    <div class="description">
                        <p>
                            <b>Description </b>: {list[0].asset_description}
                        </p>
                    </div>
                    <div className="top">
                        <div class="introduction" onClick={() => setOpen(!open)}>
                            <img src="src/assets/img/arrow1.png" alt="" />
                            <h1>Introduction</h1>
                        </div>
                        {
                            open &&
                            <div className="intro" onClick={() => setOpen(false)}>
                                <div class="introduction">
                                    <img src="src/assets/img/arrow.png" alt="" />
                                    <h1>Introduction</h1>
                                </div>
                                <div class="para">
                                    <p>The 4SA Method , How to bring a idea into progress ? </p>
                                    <h2>See More</h2>
                                </div>
                            </div>
                        }
                    </div>

                    <div className="middle">
                        <div class="thr" onClick={() => setIsopen(!isopen)}>
                            <img src="src/assets/img/arrow1.png" alt="" />
                            <h1>Thread</h1>
                        </div>
                        {
                            isopen &&
                            <div className="thread1" onClick={() => setIsopen(false)}>
                                <div class="thr">
                                    <img src="src/assets/img/arrow.png" alt="" />
                                    <h1>Thread</h1>
                                </div>
                                <div class="para">
                                    <p>How are you going to develop your stratergy ? Which method are you going to use to develop a
                                        stratergy ? What if the project is lengthy?</p>
                                    <h2>See More</h2>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="end">
                        <div class="example" onClick={() => setIsOpen(!Isopen)}>
                            <img src="src/assets/img/arrow1.png" alt="" />
                            <h1>Thread</h1>
                        </div>
                        {
                            Isopen&&
                            <div className="ex" onClick={() => setIsOpen(false)}>
                                <div class="example">
                                    <img src="src/assets/img/arrow.png" alt="" />
                                    <h1>Thread</h1>
                                </div>
                                <div class="para">
                                    <h6 className='margin'>You have a concept , How will you put into progress? </h6>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>

        </>
    )
}
