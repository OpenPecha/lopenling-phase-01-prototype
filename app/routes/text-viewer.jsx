import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

export default function () {
    const editor = useEditor({
        extensions: [StarterKit],
        content: "Some text",
    })

    return (
        <main>
            <h1>Text Viewer</h1>
            <section>
                <EditorContent editor={editor} />
            </section>
        </main>
    )
}