import React, { useEffect, useState, memo } from "react";
import { observer, inject } from "mobx-react";

import Input from "@components/Input";
import Button from "@components/Button";
import BubbleChat from "@components/BubbleChat";

import "./style.scss";

const TalkLayout = (props) => {
    const { storeMain, storeLecture } = props;

    const [chat, setChat] = useState("");

    const inputControl = () => {
        if (props.title.indexOf("공지") == 1) {
            //userType이 교수면 input 사용가능
            // 학생이면 input에 disable 넣기
        }
    };
    const handleChat = (e) => {
        setChat(e.target.value);
    };

    const btnSend = (e) => {
        storeMain.socket.emit("message", {
            token: sessionStorage.token,
            type: "chat",
            data: {
                courseIdx: storeLecture.selectLecture.courseIdx,
                chat: chat,
                type: props.type,
            },
        });
    };

    console.log(
        "input disabled",
        props.type === "notice"
            ? storeMain.userType == 1
                ? false
                : true
            : false,
        storeMain.userType
    );
    return (
        <div className="TalkLayout">
            <p className="title">{props.title}</p>

            <div className="talk">{props.children}</div>

            <div className="bottom">
                <Input
                    value={chat}
                    onChange={handleChat}
                    placeholder="내용을 입력하세요."
                    height="40px"
                    margin="0px 10px 0px 0px"
                ></Input>
                <Button
                    onClick={btnSend}
                    value="전송"
                    width="110px"
                    height="40px"
                    margin="10px 0px 0px 0px"
                ></Button>
            </div>
        </div>
    );
};

export default inject("storeMain", "storeLecture")(TalkLayout);
