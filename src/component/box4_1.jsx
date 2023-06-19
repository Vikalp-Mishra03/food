import React from 'react'

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

                    <div class="introduction">
                        <img src="src/assets/img/arrow.png" alt="" />
                        <h1>Introduction</h1>
                    </div>
                    <div class="introduction">
                        <img src="src/assets/img/arrow.png" alt="" />
                        <h1>Introduction</h1>
                    </div>
                    <div className="intr">
                        <div class="para">
                            <p>The 4SA Method , How to bring a idea into progress ? </p>
                            <h2>See More</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
