import React from 'react'

export default function box3() {
    const list = [
        {
            "asset_id": 18885,
            "asset_title": "Structure you pointers ",
            "asset_description": "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
            "asset_content": " ",
            "asset_type": "input_asset",
            "asset_content_type": "article"
        },
    ]
    return (
        <>
            <div className="boxes">
                <div class="box-3">
                    <div class="black">
                        <p>{list[0].asset_title}</p>
                        <div class="circle">
                            <span>i</span>
                        </div>
                    </div>
                    <div class="description">
                        <p>
                            <b>Description </b>:{list[0].asset_description}
                        </p>
                    </div>
                    <div class="Title">
                        <h3>Title</h3>
                        <input type="text" />
                        <div class="content">
                            <h3>Content</h3>
                        </div>
                        <div class="content-box">
                            <div class="header">
                                <ul>
                                    <li><a href="#">File</a></li>
                                    <li><a href="#">Edit</a></li>
                                    <li><a href="#">View</a></li>
                                    <li><a href="#">Insert</a></li>
                                    <li><a href="#">Format</a></li>
                                    <li><a href="#">Tools</a></li>
                                    <li><a href="#">Table</a></li>
                                    <li><a href="#">Help</a></li>
                                </ul>
                            </div>
                            <div class="tools">
                                <img src="src/assets/img/Icon.png" alt="" />
                                <img src="src/assets/img/Icon (1).png" alt="" />
                                <img src="src/assets/img/Icon (2).png" alt="" />
                                <div class="paragraph">
                                    <p>Paragaph</p>
                                </div>
                                <i class="fa-solid fa-ellipsis"></i>
                            </div>
                            <div class="note">
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
