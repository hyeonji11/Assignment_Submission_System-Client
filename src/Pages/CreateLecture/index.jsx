import React, { useEffect, useState, useRef, memo } from "react";

import Input from "@components/Input";
import Button from "@components/Button";
import MainLayout from "@templates/MainLayout";
import ComboBox from "@components/ComboBox";

import "./style.scss";
import Main from "../../Store/Main";
import Table from "../../Components/Table";

const CreateLecturePage = (props) => {
    let data = [
        {
            number: "1",
            studentNumber: "201734016",
            studentName: "박현주",
        },
        {
            number: "2",
            studentNumber: "201734016",
            studentName: "박현주",
        },
        {
            number: "3",
            studentNumber: "201734016",
            studentName: "박현주",
        },
        {
            number: "4",
            studentNumber: "201734016",
            studentName: "박현주",
        },
        {
            number: "5",
            studentNumber: "201734016",
            studentName: "박현주",
        },
    ];

    let headerItem = [
        {
            text: "NO",
            align: "center",
        },
        {
            text: "학번",
            align: "center",
        },
        {
            text: "이름",
            align: "center",
        },
    ];

    let childElement = data.map((item, idx) => {
        return (
            <tr key={idx}>
                <td align="center">{item.number}</td>
                <td align="center">{item.studentNumber}</td>
                <td align="center">{item.studentName}</td>
            </tr>
        );
    });

    return (
        <MainLayout>
            <div className="CreateLecturePage">
                <div className="CreateLecture">
                    <p className="Title"> 강의 생성 </p>
                </div>
            </div>
        </MainLayout>
    );
};

export default CreateLecturePage;
