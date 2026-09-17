
import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';

import {
    ClassicEditor,
    Essentials,
    Paragraph,
    Bold,
    Italic,
    Underline,
    Heading,
    Link,
    List,
    Strikethrough,
    Font,
    Alignment,
    Table,
    TableToolbar
} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';

function Composemail() {
    const [content, setContent] = useState(
        '<p>Hello world!</p>'
    );

    return (
        <div>
            <CKEditor
                editor={ClassicEditor}
                data={content}
                config={{
                    licenseKey: 'GPL',
                    plugins: [
                        Essentials,
                        Paragraph,
                        Bold,
                        Italic,
                        Underline,
                        Heading,
                        Link,
                        List,
                        Strikethrough,
                        Font,
                        Alignment,
                        Table,
                        TableToolbar
                    ],
                    toolbar: [
                        'undo',
                        'redo',
                        '|',
                        'heading',
                        '|',
                        'bold',
                        'italic',
                        'underline',
                        '|',
                        'link',
                        'bulletedList',
                        'numberedList',
                        'Strikethrough',
                        'Font',
                        'Alignment'
                    ],
                    table: {
                        contentToolbar: [
                            'tableColumn',
                            'tableRow',
                            'mergeTableCells'
                        ]
                    }
                }}
                onChange={(event, editor) => {
                    setContent(editor.getData());
                }}
            />
        </div>
    );
}

export default Composemail;