/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices.js';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily.js';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage';
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import HtmlEmbed from '@ckeditor/ckeditor5-html-embed/src/htmlembed';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter'; 
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert';

class Editor extends ClassicEditor { }

// Plugins to include in the build.
Editor.builtinPlugins = [
	Alignment,
	Autoformat,
	BlockQuote,
	Bold,
	CloudServices,
	Code,
	Essentials,
	FontColor,
	FontFamily,
	FontSize,
	Heading,
	Indent,
	Italic,
	List,
	Paragraph,
	PasteFromOffice,
	TextTransformation,
	TodoList,
	Image, 
	ImageToolbar, 
	ImageCaption, 
	ImageStyle, 
	ImageResize, 
	LinkImage, 
	ImageUpload,
	Base64UploadAdapter,
	CodeBlock,
	HtmlEmbed,
	Underline,
	Strikethrough, 
	Subscript,
	Superscript,
	SimpleUploadAdapter,
	ImageInsert,  
];



export default Editor;
