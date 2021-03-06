import React, { useEffect, useState, memo } from "react"; 
 
import * as Util from '@util';

import "./style.scss"; 
 
/* 
    * value 
    width - %, px, 
    height - %, px 
    color - zzz 
*/ 
const BubbleChat = props => { 
  let clsName = "BubbleChat "; 
    let colorClsName = "color-default"; 
 
    if (props.color) colorClsName = "color-" + props.color; 
 
    clsName += colorClsName;

    if(props.className) clsName += props.className;

    return (
        <div className={clsName}>
          <p className="Name">{props.data.userName}</p>
        
            <div className="Chat">
                <p>{props.data.chat}</p>
            </div>

            <p className="Date">{Util.dateForm(props.data.time, 'full')}</p>
            
        </div>

    );
};

export default BubbleChat;