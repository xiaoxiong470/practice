import React from "react";
import {Card} from "antd";
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState,convertToRaw} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
export default class RichDemo extends React.Component{
    state = {
        editorState: EditorState.createEmpty(),
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };
    render(){
        return (
            <div>
                <Card title="富文本">
                    <Editor
                        editorState={this.state.editorState}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        onEditorStateChange={this.onEditorStateChange}
                    />

                    <textarea
                        cols={130}
                        disabled
                        value={draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))}
                    />
                </Card>

            </div>
        );
    }
}