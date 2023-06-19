import React from 'react'
const list = [
    {
        "asset_id": 18883,
        "asset_title": "Technical Project Management",
        "asset_description": "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
        "asset_content": " https://www.youtube.com/embed/TiMRwri1xJ8",
        "asset_type": "display_asset",
        "asset_content_type": "video"
    },
]
export default function box1() {

    return (
        <>
            <div className="box-1">
                <div className="black">
                    {/* <p>Technical Project Management</p> */}
                    <p>{list[0].asset_title} </p>
                    <div className="circle">
                        <span>i</span>
                    </div>
                </div>
                <div className="description">
                    <p>

                        <b>Description </b>: {list[0].asset_description}
                    </p>
                </div>
                <div className="youtube">
                <div className="video">
                    <iframe src=" https://www.youtube.com/embed/TiMRwri1xJ8" title='Youtube Video' frameborder="0"></iframe>
                </div>
                </div>
            </div>
        </>
    )
}
