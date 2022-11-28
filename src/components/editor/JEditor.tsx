import React, { useState } from 'react';

import ace from "brace";
import { JsonEditor as Editor } from "jsoneditor-react";
import "jsoneditor-react/es/editor.min.css";
import "brace/mode/json";
import "brace/theme/github";

const Jeditor = (props: any) => {
    const allowedModes = ['code', 'tree', 'view'];
    const { mode = 'code', content = {}, onJsonEdit, theme = undefined, search = false, navigationBar = true } = props;
    let editor;
    if(mode === 'view') {
        const viewStyle = {
            display: 'block',
            padding: '0.5rem',
            margin: '0.5rem',
            background: 'lightgray',
            'text-align': 'left',
            height: 'auto',
            'max-height': '400px',
            overflow: 'auto',
            'word-break': 'normal !important',
            'word-wrap': 'normal !important',
            'white-space': 'pre !important',
            color: 'black',
            'border-radius': '2px',
            'counter-increment': 'line'
        }
        editor = <pre id="json-renderer" style={viewStyle}>
        </pre>
    } else {
        editor = <Editor
            history
            mode = {mode}
            theme={theme}
            allowedModes={allowedModes}
            ace={ace}
            search={search}
            navigationBar={navigationBar}    
            value={content}
            onChange={onJsonEdit}
        />
    }
    return <div>
        {editor}
    </div>
}

export default Jeditor;