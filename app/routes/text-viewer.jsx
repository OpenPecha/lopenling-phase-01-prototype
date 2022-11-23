import { useLoaderData, useSearchParams } from "@remix-run/react"
import * as React from "react"

import Document from "@tiptap/extension-document"
import Highlight from '@tiptap/extension-highlight'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import { EditorContent, useEditor } from "@tiptap/react"

export async function loader() {
    // const text = await fetch("https://raw.githubusercontent.com/OpenPecha-Data/P000001/master/P000001.opf/base/v001.txt")
    const text = "༄༅། །འདུལ་བ་ཀ་བཞུགས་སོ། ། ༄༅༅། །རྒྱ་གར་སྐད་དུ། བི་ན་ཡ་བསྟུ། བོད་སྐད་དུ། འདུལ་བ་གཞི། བམ་པོ་དང་པོ། དཀོན་མཆོག་གསུམ་ལ་ཕྱག་འཚལ་ལོ། །གང་གིས་འཆིང་ རྣམས་ཡང་དག་རབ་བཅད་ཅིང་། །མུ་སྟེགས་ཚོགས་རྣམས་ཐམས་ཅད་རབ་བཅོམ་སྟེ། །སྡེ་དང་བཅས་པའི་བདུད་རྣམས་ངེས་བཅོམ་ནས། །བྱང་ཆུབ་འདི་བརྙེས་དེ་ལ་ ཕྱག་འཚལ་ལོ། །ཁྱིམ་དོན་ཆེ་ཆུང་སྤངས་ཏེ་དང་པོར་རབ་འབྱུང་དཀའ། །རབ་བྱུང་ཐོབ་ནས་ཡུལ་སྤྱད་དག་གིས་དགའ་ཐོབ་དཀའ། །མངོན་དགའ་ཇི་བཞིན་དོན་བསྐྱེད་ཡང་ དག་བྱེད་པ་དཀའ། །ངུར་སྨྲིག་གོས་འཆང་མཁས་པ་ཚུལ་ལས་ཉམས་པ་དཀའ། །གཞི་རྣམས་ཀྱི་སྤྱི་སྡོམ་ལ། རབ་འབྱུང་གསོ་སྦྱོང་གཞི་དང་ནི། །དགག་དབྱེ་དབྱར་དང་ཀོ་ ལྤགས་གཞི། །སྨན་དང་གོས་དང་སྲ་བརྐྱང་དང་། །ཀཽ་ཤཱམ་བཱི་དང་ལས་ཀྱི་གཞི། །དམར་སེར་ཅན་དང་གང་ཟག་དང་། །སྤོ་དང་གསོ་སྦྱོང་བཞག་པ་དང་། །གནས་མལ་དང་ནི་ རྩོད་པ་དང་། །དགེ་འདུན་དབྱེན་རྣམས་བསྡུས་པ་ཡིན། །རབ་ཏུ་འབྱུང་བའི་གཞིའི་སྤྱི་སྡོམ་ལ། ཤཱ་རིའི་བུ་དང་མུ་སྟེགས་ཅན། །དགེ་ཚུལ་གཉིས་དང་བྱ་རོག་སྐྲོད། །དགྲ་བཅོམ་བསད་དང་ལག་རྡུམ་གྱི། །སྡེ་ཚན་ ཡང་དག་བསྡུས་པ་ཡིན། །སྡོམ་ལ། ཤཱ་རིའི་བུ་དང་རབ་འབྱུང་དང་། །བསྙེན་པར་རྫོགས་པར་གནང་བ་དང་། །ཉེ་སྡེས་ཚོགས་ནི་བསྡུས་པ་དང་། །ལྔ་པའི་སྡེ་ཚན་བསྡུས་པ་ཡིན། །བྱང་ཆུབ་སེམས་དཔའ་དགའ་ལྡན་གྱི་གནས་ན་བཞུགས་པ་ན། ཡུལ་ཨང་ག་དག་ན་ཨང་གའི་རྒྱལ་པོ་ཞེས་བྱ་བས་རྒྱལ་སྲིད་འབྱོར་པ། རྒྱས་པ་བདེ་བ་ལོ་ལེགས་པ་སྐྱེ་བོ་དང་མི་མང་པོས་གང་བ་བྱེད་དུ་བཅུག་གོ། །ཡུལ་མ་ག་དྷཱ་དག་ན་ཡང་རྒྱལ་པོ་པད་མ་ཆེན་པོ་ཞེས་བྱ་བས། རྒྱལ་སྲིད་འབྱོར་པ་རྒྱས་པ་བདེ་བ་ལོ་ ལེགས་པ་སྐྱེ་བོ་དང་མི་མང་པོས་གང་བ་བྱེད་དུ་བཅུག་གོ། །རེས་འགའ་ནི་ཨང་གའི་རྒྱལ་པོ་དཔུང་དང་མཐུ་ཆེ་བ་ཡིན་ལ། རེས་འགའ་ནི་རྒྱལ་པོ་པད་མ་ཆེན་པོ་དཔུང་དང་མཐུ་ཆེ་བ་ཡིན་ནོ། །གང་གི་ཚེ་ཨང་གའི་རྒྱལ་པོ་དཔུང་དང་མཐུ་ཆེ་བ་དེའི་ཚེ་ ན། དེས་དཔུང་གི་ཚོགས་ཡན་ལག་བཞི་པ། གླང་པོ་ཆེ་པའི་ཚོགས་དང་། རྟ་པའི་ཚོགས་དང་། ཤིང་རྟ་པའི་ཚོགས་དང་། དཔུང་བུ་ཆུང་གི་ཚོགས་གོ་བསྐོན་ཏེ། ཡུལ་མ་ག་དྷཱ་རྒྱལ་པོའི་ཁབ་མ་གཏོགས་པ་བཅོམ་ནས་ཕྱིར་ལྡོག་པར་ བྱེད་དོ། །གང་གི་ཚེ་རྒྱལ་པོ་པད་མ་ཆེན་པོ་དཔུང་དང་མཐུ་ཆེ་བ་དེའི་ཚེ་ན། དེས་ཀྱང་དཔུང་གི་ཚོགས་ཡན་ལག་བཞི་པ། གླང་པོ་ཆེ་པའི་ཚོགས་དང་། རྟ་པའི་ཚོགས་དང་། ཤིང་རྟ་པའི་ཚོགས་དང་། དཔུང་བུ་ཆུང་གི་ཚོགས་གོ་བསྐོན་ཏེ། ཡུལ་ཨང་ག་ཙམ་པ་མ་གཏོགས་པ་བཅོམ་ནས་ཕྱིར་ལྡོག་པར་བྱེད་དོ། །དེ་ནས་དུས་གཞན་ཞིག་ན་ཨང་གའི་རྒྱལ་པོ་དཔུང་དང་མཐུ་ཆེ་བར་གྱུར་ནས། དེས་དཔུང་གི་ཚོགས་ཡན་ལག་བཞི་པ་གླང་པོ་ཆེ་པའི་ཚོགས་དང་། རྟ་པའི་ཚོགས་དང་། ཤིང་རྟ་པའི་ཚོགས་དང་། དཔུང་ བུ་ཆུང་གི་ཚོགས་གོ་བསྐོན་ཏེ། ཡུལ་མ་ག་དྷཱ་གཞོམ་པར་བརྩམས་པ་དང་། མ་ག་དྷཱ་ན་གནས་པའི་སྐྱེ་བོའི་ཚོགས་ཀྱིས་རྒྱལ་པོ་པད་མ་ཆེན་པོ་ལ་ལྷ་ཨང་གའི་རྒྱལ་པོས་དཔུང་གི་ཚོགས་ཡན་ལག་བཞི་པ་གླང་པོ་ཆེ་པའི་ཚོགས་དང་། རྟ་པའི་ཚོགས་དང་། ཤིང་རྟ་པའི་ ཚོགས་དང་། དཔུང་བུ་ཆུང་གི་ཚོགས་གོ་བསྐོན་ཏེ། ཡུལ་མ་ག་དྷཱ་འཇོམས་པར་བགྱིད་དོ་ཞེས་སྦྲོན་པ་དག་བཏང་ངོ་། །རྒྱལ་པོ་པད་མ་ཆེན་པོས་ཀྱང་ཐོས་ནས་དཔུང་གི་ཚོགས་ཡན་ལག་བཞི་པ་གླང་པོ་ཆེ་པའི་ཚོགས་དང་། རྟ་པའི་ཚོགས་དང་། ཤིང་རྟ་པའི་ཚོགས་དང་། དཔུང་བུ་ཆུང་གི་ཚོགས་གོ་བསྐོན་ཏེ། ཨང་གའི་རྒྱལ་པོ་དང་གཡུལ་སྤྲད་པའི་ཕྱིར་འཕགས་སོ། །དེ་ནས་ཨང་གའི་རྒྱལ་པོས་རྒྱལ་པོ་པད་མ་ཆེན་པོའི་གླང་པོ་ཆེ་པའི་ཚོགས་ཐམས་ཅད་ཕྲོགས་ཤིང་། རྟ་པའི་ཚོགས་དང་། ཤིང་རྟ་པའི་ཚོགས་དང་། དཔུང་བུ་ཆུང་གི་ "
    return text
}

function highlight(text, spanStart, spanEnd)  {
    const textBeginning = text.slice(0, spanStart)
    const textMiddle = text.slice(spanStart, spanEnd)
    const textEnd = text.slice(spanEnd)
    return `${textBeginning}<mark style="background-color: #ffeda7">${textMiddle}</mark>${textEnd}`
}


export default function () {
    let text = useLoaderData()
    const [searchParams] = useSearchParams()

    const [selectionSpan, setSelectionSpan] = React.useState({})

    const selectionSpanStart = parseInt(searchParams.get("selectionStart") ?? '0')
    const selectionSpanEnd= parseInt(searchParams.get("selectionEnd") ?? '0')
    if (selectionSpanEnd !==0) {
        text = highlight(text, selectionSpanStart, selectionSpanEnd)
    }

    const editor = useEditor({
        extensions: [
            Document,
            Paragraph,
            Text,
            Highlight.configure({ multicolor: true })
        ],
        content: `<p>${text}</p>`,
        editable: false,
    })

    if (!editor) {
        return null
    }

    editor.on("selectionUpdate", ({editor}) => {
        const { from, to } = editor.state.selection
        console.log(from, to)
        setSelectionSpan({start: from, end: to})
    })

    function shareSelectedText() {
        const selectionUrl = `http://localhost:3001/text-viewer?selectionStart=${selectionSpan.start}&selectionEnd=${selectionSpan.end}`
        alert(selectionUrl)
    }

    return (
        <main style={{ width: '60%', margin: 'auto'}}>
            <h1 style={{ textAlign: 'center'}}>Text Viewer</h1>
            <button onClick={shareSelectedText}>Share</button>
            <section>
                <EditorContent editor={editor} />
            </section>
        </main>
    )
}